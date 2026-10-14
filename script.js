/* =====================================================
   Financial Hub — Calculator Logic
   ===================================================== */

/* ── Mobile Menu ── */
const menuToggle  = document.getElementById('menuToggle');
const mobileMenu  = document.getElementById('mobileMenu');

menuToggle?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

function closeMenu() {
    mobileMenu?.classList.remove('open');
    if (menuToggle) menuToggle.textContent = '☰';
}

/* Close on outside tap */
document.addEventListener('click', e => {
    if (mobileMenu?.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !menuToggle.contains(e.target)) {
        closeMenu();
    }
});

/* ── Active nav on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector(`.nav-links a[href="#${e.target.id}"]`)?.classList.add('active');
        }
    });
}, { threshold: 0.3 });

sections.forEach(s => io.observe(s));

/* ── Helpers ── */
function $v(id) {
    const val = parseFloat(document.getElementById(id)?.value);
    return isNaN(val) ? null : val;
}

function fmt(n, type = 'auto') {
    if (type === 'pct')  return n.toFixed(2) + '%';
    if (type === 'x')    return n.toFixed(2) + '×';
    if (type === '$')    return (n < 0 ? '-$' : '$') + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return n.toFixed(2);
}

function render(id, { value, label, note, status = 'ok' }) {
    const el = document.getElementById(id);
    if (!el) return;
    el.className = 'result visible';
    el.innerHTML = `
        <div class="result-box ${status}">
            <span class="result-dot"></span>
            <div class="result-meta">
                <span class="result-num">${value}</span>
                <span class="result-label">${label}</span>
            </div>
        </div>
        ${note ? `<p class="result-note">${note}</p>` : ''}
    `;
}

function err(id, msg) {
    const el = document.getElementById(id);
    if (!el) return;
    el.className = 'result visible';
    el.innerHTML = `<div class="result-box bad"><span class="result-dot"></span><div class="result-meta"><span class="result-num">—</span><span class="result-label">${msg}</span></div></div>`;
}

/* ── Master dispatcher ── */
function calc(key) {
    const map = {
        cr:    calcCR,
        qr:    calcQR,
        cash:  calcCash,
        dta:   calcDTA,
        tie:   calcTIE,
        inv:   calcINV,
        ar:    calcAR,
        at:    calcAT,
        pm:    calcPM,
        roa:   calcROA,
        roe:   calcROE,
        eps:   calcEPS,
        pe:    calcPE,
        nopat: calcNOPAT,
        ocf:   calcOCF,
        fcf:   calcFCF,
        cb:    calcCB,
    };
    map[key]?.();
}

/* ── Calculators ── */

/* Current Ratio */
function calcCR() {
    const a = $v('cr-assets'), l = $v('cr-liabilities');
    if (!a || !l) return err('cr-result', 'Enter both values');
    if (l === 0)  return err('cr-result', 'Liabilities cannot be zero');
    const r = a / l;
    const status = r >= 2 ? 'ok' : r >= 1 ? 'warn' : 'bad';
    const note = r >= 2 ? `Strong coverage. $${r.toFixed(2)} in assets per $1 of short-term debt.`
               : r >= 1 ? `Adequate but thin. Watch for tightening liquidity.`
               : `Below 1.0 — current liabilities exceed current assets. Liquidity risk.`;
    render('cr-result', { value: fmt(r, 'x'), label: 'Current Ratio', note, status });
}

/* Quick Ratio */
function calcQR() {
    const a = $v('qr-assets'), inv = $v('qr-inventory'), l = $v('qr-liabilities');
    if (a === null || inv === null || l === null) return err('qr-result', 'Enter all values');
    if (l === 0) return err('qr-result', 'Liabilities cannot be zero');
    const r = (a - inv) / l;
    const status = r >= 1 ? 'ok' : r >= 0.7 ? 'warn' : 'bad';
    const note = r >= 1 ? `Solid quick liquidity. Obligations can be met without selling inventory.`
               : r >= 0.7 ? `Marginal. Some reliance on inventory conversion.`
               : `Weak. Highly dependent on inventory to cover short-term debts.`;
    render('qr-result', { value: fmt(r, 'x'), label: 'Quick Ratio', note, status });
}

/* Cash Ratio */
function calcCash() {
    const c = $v('cash-amount'), l = $v('cash-liabilities');
    if (!c || !l) return err('cash-result', 'Enter both values');
    if (l === 0)  return err('cash-result', 'Liabilities cannot be zero');
    const r = c / l;
    const status = r >= 0.5 ? 'ok' : r >= 0.2 ? 'warn' : 'bad';
    const note = r >= 0.5 ? `Healthy cash buffer. Can cover over half of short-term debt immediately.`
               : r >= 0.2 ? `Normal operating range. Most companies stay between 0.2–0.5.`
               : `Very low cash reserve. Any surprise expense creates pressure.`;
    render('cash-result', { value: fmt(r, 'x'), label: 'Cash Ratio', note, status });
}

/* Debt-to-Asset */
function calcDTA() {
    const l = $v('dta-liabilities'), a = $v('dta-assets');
    if (!l || !a) return err('dta-result', 'Enter both values');
    if (a === 0)  return err('dta-result', 'Total assets cannot be zero');
    const r = (l / a) * 100;
    const status = r <= 40 ? 'ok' : r <= 65 ? 'warn' : 'bad';
    const note = r <= 40 ? `Low leverage. Mostly equity-financed — low default risk.`
               : r <= 65 ? `Moderate leverage. Manageable, but monitor debt growth.`
               : `High leverage. Significant financial risk, especially in downturns.`;
    render('dta-result', { value: fmt(r, 'pct'), label: 'Debt-to-Asset', note, status });
}

/* Times Interest Earned */
function calcTIE() {
    const ebit = $v('tie-ebit'), int = $v('tie-interest');
    if (!ebit || !int) return err('tie-result', 'Enter both values');
    if (int === 0) return err('tie-result', 'Interest expense cannot be zero');
    const r = ebit / int;
    const status = r >= 3 ? 'ok' : r >= 1.5 ? 'warn' : 'bad';
    const note = r >= 3 ? `Comfortable coverage. Low risk of default on interest payments.`
               : r >= 1.5 ? `Marginal. Any earnings drop could create payment difficulty.`
               : `Insufficient coverage. High risk of failing to service debt obligations.`;
    render('tie-result', { value: fmt(r, 'x'), label: 'Times Interest Earned', note, status });
}

/* Inventory Turnover */
function calcINV() {
    const cogs = $v('inv-cogs'), inv = $v('inv-avg');
    if (!cogs || !inv) return err('inv-result', 'Enter both values');
    if (inv === 0) return err('inv-result', 'Inventory cannot be zero');
    const r = cogs / inv;
    const days = (365 / r).toFixed(0);
    const status = r >= 6 ? 'ok' : r >= 3 ? 'warn' : 'bad';
    const note = `Inventory is replaced ${r.toFixed(1)}× per year (${days} days on hand). ${
        r >= 6 ? 'Efficient inventory management.' :
        r >= 3 ? 'Room to improve turns and reduce holding costs.' :
        'Slow movement — risk of obsolescence or weak demand.'}`;
    render('inv-result', { value: fmt(r, 'x'), label: 'Inventory Turnover', note, status });
}

/* AR Turnover */
function calcAR() {
    const s = $v('ar-sales'), ar = $v('ar-avg');
    if (!s || !ar) return err('ar-result', 'Enter both values');
    if (ar === 0) return err('ar-result', 'Receivables cannot be zero');
    const r = s / ar;
    const days = (365 / r).toFixed(0);
    const status = r >= 8 ? 'ok' : r >= 4 ? 'warn' : 'bad';
    const note = `Collects receivables ${r.toFixed(1)}× per year — average ${days} days to collect. ${
        r >= 8 ? 'Fast collection. Strong credit management.' :
        r >= 4 ? 'Average. Review credit terms to accelerate collections.' :
        'Slow collections. Credit policy or payment follow-up needs review.'}`;
    render('ar-result', { value: fmt(r, 'x'), label: 'AR Turnover', note, status });
}

/* Asset Turnover */
function calcAT() {
    const s = $v('at-sales'), a = $v('at-assets');
    if (!s || !a) return err('at-result', 'Enter both values');
    if (a === 0) return err('at-result', 'Assets cannot be zero');
    const r = s / a;
    const status = r >= 1 ? 'ok' : r >= 0.5 ? 'warn' : 'bad';
    const note = r >= 1 ? `Generates $${r.toFixed(2)} of revenue per $1 of assets. Efficient use.`
               : r >= 0.5 ? `Moderate efficiency. Consider optimizing asset deployment.`
               : `Low output per asset dollar. Underutilized assets drag performance.`;
    render('at-result', { value: fmt(r, 'x'), label: 'Asset Turnover', note, status });
}

/* Net Profit Margin */
function calcPM() {
    const ni = $v('pm-income'), ns = $v('pm-sales');
    if (ni === null || !ns) return err('pm-result', 'Enter both values');
    if (ns === 0) return err('pm-result', 'Sales cannot be zero');
    const r = (ni / ns) * 100;
    const status = r >= 10 ? 'ok' : r >= 0 ? 'warn' : 'bad';
    const note = r >= 20 ? `Excellent margin. Retains $${(r/100).toFixed(2)} per revenue dollar.`
               : r >= 10 ? `Healthy margin. Above-average cost control.`
               : r >= 0  ? `Thin margin. Focus on cost reduction or pricing power.`
               : `Negative margin — operating at a loss. Needs immediate review.`;
    render('pm-result', { value: fmt(r, 'pct'), label: 'Net Profit Margin', note, status });
}

/* ROA */
function calcROA() {
    const ni = $v('roa-income'), a = $v('roa-assets');
    if (ni === null || !a) return err('roa-result', 'Enter both values');
    if (a === 0) return err('roa-result', 'Assets cannot be zero');
    const r = (ni / a) * 100;
    const status = r >= 5 ? 'ok' : r >= 0 ? 'warn' : 'bad';
    const note = r >= 10 ? `Outstanding asset efficiency — top-tier performance.`
               : r >= 5  ? `Solid returns from asset base. Generally healthy.`
               : r >= 0  ? `Below-average returns. Evaluate underperforming assets.`
               : `Negative ROA — assets generating losses. Urgent review needed.`;
    render('roa-result', { value: fmt(r, 'pct'), label: 'Return on Assets', note, status });
}

/* ROE */
function calcROE() {
    const ni = $v('roe-income'), eq = $v('roe-equity');
    if (ni === null || !eq) return err('roe-result', 'Enter both values');
    if (eq === 0) return err('roe-result', 'Equity cannot be zero');
    const r = (ni / eq) * 100;
    const status = r >= 12 ? 'ok' : r >= 0 ? 'warn' : 'bad';
    const note = r >= 20 ? `Exceptional. Generating $${(r/100).toFixed(2)} per equity dollar.`
               : r >= 12 ? `Strong returns — exceeds typical cost of equity.`
               : r >= 0  ? `Below cost of equity. Shareholders may not be fully compensated.`
               : `Negative ROE — destroying shareholder value.`;
    render('roe-result', { value: fmt(r, 'pct'), label: 'Return on Equity', note, status });
}

/* EPS */
function calcEPS() {
    const ni = $v('eps-income'), pd = $v('eps-pref') ?? 0, sh = $v('eps-shares');
    if (ni === null || sh === null) return err('eps-result', 'Enter all values');
    if (sh === 0) return err('eps-result', 'Shares cannot be zero');
    const r = (ni - pd) / sh;
    const status = r > 0 ? 'ok' : r === 0 ? 'warn' : 'bad';
    const note = r > 0 ? `Each common share earned $${r.toFixed(2)}.${pd > 0 ? ` (Preferred dividends of $${pd.toLocaleString()} deducted.)` : ''}`
               : r === 0 ? `Break-even. No earnings available for common shareholders.`
               : `Negative EPS — the company is reporting a loss per share.`;
    render('eps-result', { value: '$' + r.toFixed(2), label: 'Earnings Per Share', note, status });
}

/* P/E */
function calcPE() {
    const p = $v('pe-price'), eps = $v('pe-eps');
    if (!p || !eps) return err('pe-result', 'Enter both values');
    if (eps <= 0) return err('pe-result', 'EPS must be positive for P/E');
    const r = p / eps;
    const status = r <= 25 ? 'ok' : r <= 40 ? 'warn' : 'bad';
    const note = r <= 15 ? `Low multiple — may be undervalued or slow-growth sector.`
               : r <= 25 ? `Moderate premium. Fair valuation for most companies.`
               : r <= 40 ? `High multiple. Growth expectations are baked in.`
               : `Very high P/E — extreme growth priced in, or potential overvaluation.`;
    render('pe-result', { value: fmt(r, 'x'), label: 'P/E Ratio', note, status });
}

/* NOPAT */
function calcNOPAT() {
    const ebit = $v('nopat-ebit'), t = $v('nopat-tax');
    if (ebit === null || t === null) return err('nopat-result', 'Enter both values');
    if (t < 0 || t > 100) return err('nopat-result', 'Tax rate must be 0–100');
    const r = ebit * (1 - t / 100);
    const status = r > 0 ? 'ok' : 'bad';
    render('nopat-result', { value: fmt(r, '$'), label: 'NOPAT', status,
        note: `Operating profit after ${t}% tax. This is the input to OCF.` });
}

/* OCF */
function calcOCF() {
    const ebit = $v('ocf-ebit'), t = $v('ocf-tax'), d = $v('ocf-depr');
    if (ebit === null || t === null || d === null) return err('ocf-result', 'Enter all values');
    if (t < 0 || t > 100) return err('ocf-result', 'Tax rate must be 0–100');
    const nopat = ebit * (1 - t / 100);
    const r = nopat + d;
    const status = r > 0 ? 'ok' : 'bad';
    const note = `NOPAT (${fmt(nopat,'$')}) + Depreciation (${fmt(d,'$')}) = ${fmt(r,'$')}. ${
        r > 0 ? 'Positive OCF — operations are self-sustaining.' :
        'Negative OCF — operations are consuming cash.'}`;
    render('ocf-result', { value: fmt(r, '$'), label: 'Operating Cash Flow', note, status });
}

/* FCF */
function calcFCF() {
    const ocf = $v('fcf-ocf'), nfai = $v('fcf-nfai'), ncai = $v('fcf-ncai');
    if (ocf === null || nfai === null || ncai === null) return err('fcf-result', 'Enter all values');
    const r = ocf - nfai - ncai;
    const status = r > 0 ? 'ok' : 'bad';
    const note = r > 0 ? `${fmt(r,'$')} available for investors and distributions after all investments.`
               : `Negative FCF of ${fmt(Math.abs(r),'$')}. Investments exceed cash generation — may need external financing.`;
    render('fcf-result', { value: fmt(r, '$'), label: 'Free Cash Flow', note, status });
}

/* Cash Budget */
function calcCB() {
    const beg  = $v('cb-begin') ?? 0;
    const rec  = $v('cb-receipts');
    const dis  = $v('cb-disbursements');
    const min  = $v('cb-min') ?? 0;
    if (rec === null || dis === null) return err('cb-result', 'Enter receipts and disbursements');
    const net    = rec - dis;
    const ending = beg + net;
    const diff   = ending - min;
    const status = diff >= 0 ? 'ok' : 'bad';
    const note   = `Net flow: ${fmt(net,'$')} → Ending: ${fmt(ending,'$')} → ${
        diff >= 0
            ? `Surplus of ${fmt(diff,'$')} above minimum. Available to invest short-term.`
            : `Shortage of ${fmt(Math.abs(diff),'$')} below minimum. Short-term financing required.`}`;
    render('cb-result', { value: fmt(ending, '$'), label: diff >= 0 ? 'Cash Surplus' : 'Cash Shortage', note, status });
}
