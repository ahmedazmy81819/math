# 📐 الدليل الشامل والمنظم لقوانين تمويل الشركات (Corporate Finance Formulas Reference Guide)

يقدم هذا الدليل حصرًا كاملاً ومُرتّبًا لجميع القوانين والمعادلات المالية المذكورة في المنهج، مُقسّمة حسب الفصول والموضوعات، مع شرح لكل قانون وبيان معاني الرموز والمصطلحات وكيفية استخدامها في الاختبارات والتحليل المالي.

---

## 📌 الفصل الأول: المفاهيم الأساسية واتخاذ القرارات الماليّة (Fundamental Concepts & Marginal Decision-Making)

### 1. التحليل الحدي (Marginal Cost-Benefit Analysis)
* **الاستخدام:** يُستخدم في علم التمويل والاقتصاد لاتخاذ قرارات الشراء، أو الاستبدال، أو التوسع، بتركيز القرار على التكاليف والمنافع الإضافية فقط.
* **القانون:**
  $$\text{Net Benefit (صافي الفائدة الحدية)} = \text{Marginal Benefits (المنافع الإضافية)} - \text{Marginal Costs (التكاليف الإضافية)}$$
* **قاعدة القرار:** يُقبل القرار إذا كان **$\text{Net Benefit} > 0$** (أي عندما تتجاوز المنافع الإضافية التكاليف الإضافية).

---

### 2. ربحية السهم الأساسية وتخفيف الملكية (Earnings Per Share - EPS)
* **الاستخدام:** يقيس حصة السهم العادي الواحد من صافي أرباح الشركة بعد سداد مستحقات الأسهم الممتازة.
* **القانون:**
  $$\text{EPS} = \frac{\text{Net Income (صافي الدخل)} - \text{Preferred Dividends (أرباح الأسهم الممتازة)}}{\text{Weighted-Average Common Shares Outstanding (المتوسط المرجح لعدد الأسهم العادية)}}$$
* **ملاحظة هامة:** إصدار أسهم عادية جديدة يُؤدي إلى زيادة عدد الأسهم، ومِن ثَمَّ تخفيف ربحية السهم (**EPS Dilution**)، ما لم تحقق الشركة أرباحًا إضافية تُعوض هذه الزيادة.

---

### 3. التدفق النقدي الفعلي مقابل صافي الربح المحاسبي (Cash Flow vs. Accrual Net Income)
* **الاستخدام:** التفريق بين أساس الاستحقاق المحاسبي (Accrual Basis) وأساس التدفق النقدي المالي (Cash Basis).
* **القانون:**
  $$\text{Net Cash Flow (صافي التدفق النقدي)} = \text{Cash Inflows (المقبوضات النقدية الفعاليّة)} - \text{Cash Outflows (المدفوعات النقدية الفعاليّة)}$$

---

## 📌 الفصل الثاني: أساليب تحليل القوائم المالية (Financial Statement Analysis Methods)

### 1. التحليل الأفقي / تحليل الاتجاه (Horizontal Analysis / Trend Analysis)
* **الاستخدام:** قياس نسبة التغير أو النمو في بند مالي معين عبر الزمن بين سنتين (سنة مقارنة حديثة وسنة أساس قديمة).
* **القانون:**
  $$\text{Horizontal Analysis \%} = \frac{\text{New Amount (قيمة السنة الحديثة)} - \text{Old Amount (قيمة سنة الأساس)}}{\text{Old Amount (قيمة سنة الأساس)}} \times 100$$

---

### 2. التحليل الرأسي / القوائم مشتركة الحجم (Vertical Analysis / Common-Size Statements)
* **الاستخدام:** قياس الحجم النسبي لكل بند داخل القائمة المالية كنسبة مئوية من إجمالي محوري (Base Amount).

#### أ. في قائمة الدخل (Income Statement):
* **القانون العام:**
  $$\text{Vertical Analysis \%} = \frac{\text{Item Amount (قيمة البند)}}{\text{Total Revenue / Net Sales (إجمالي الإيرادات أو المبيعات)}} \times 100$$
* **مثال نسبة تكلفة البضاعة المباعة (COGS %):**
  $$\text{COGS \%} = \frac{\text{COGS}}{\text{Total Revenue}} \times 100$$

#### ب. في الميزانية العمومية (Balance Sheet):
* **القانون العام:**
  $$\text{Vertical Analysis \%} = \frac{\text{Item Amount (قيمة البند)}}{\text{Total Assets (إجمالي الأصول)}} \times 100$$
* **مثال نسبة حقوق الملكية إلى الأصول (Equity to Assets %):**
  $$\text{Equity to Total Assets \%} = \frac{\text{Total Equity}}{\text{Total Assets}} \times 100$$

---

## 📌 الفصل الثالث: النسب المالية (Financial Ratios)

تُقسم النسب المالية إلى 5 مجموعات رئيسية لتقييم الصحة المالية للشركة:

```
                      ┌─────────────────────────────────────────┐
                      │    المجموعات الـ 5 للنسب المالية        │
                      └────────────────────┬────────────────────┘
                                           │
         ┌──────────────────┬──────────────┼──────────────┬──────────────────┐
         ▼                  ▼              ▼              ▼                  ▼
    1. السيولة         2. الكفاءة      3. الملاءة      4. الربحية          5. السوق
   (Liquidity)        (Activity)      (Solvency)    (Profitability)    (Market Ratios)
```

---

### 1️⃣ نسب السيولة قصيرة الأجل (Liquidity Ratios)
تقيس قدرة الشركة على سداد التزاماتها وديونها قصيرة الأجل عند استحقاقها.

* **أ. نسبة التداول (Current Ratio):**
  $$\text{Current Ratio} = \frac{\text{Current Assets (الأصول المتداولة)}}{\text{Current Liabilities (الالتزامات المتداولة)}}$$
  *(المعيار المستهدف عادةً = $1.0$ أو أعلى)*

* **ب. النسبة السريعة / نسبة الاختبار السريع (Quick Ratio / Acid-Test Ratio):**
  $$\text{Quick Ratio} = \frac{\text{Current Assets} - \text{Inventory}}{\text{Current Liabilities}}$$
  *الصيغة التفصيلية:*
  $$\text{Quick Ratio} = \frac{\text{Cash} + \text{Short-Term Marketable Securities} + \text{Accounts Receivable}}{\text{Current Liabilities}}$$

* **ج. نسبة النقدية (Cash Ratio):**
  $$\text{Cash Ratio} = \frac{\text{Cash or Cash Equivalents (النقدية وما يعادلها)}}{\text{Current Liabilities}}$$

---

### 2️⃣ نسب النشاط والكفاءة (Activity / Efficiency Ratios)
تقيس كفاءة الشركة وإدارتها في استخدام أصولها وإدارة مخزونها وحساباتها المدينة لتوليد المبيعات.

* **أ. معدل دوران المخزون (Inventory Turnover):**
  $$\text{Inventory Turnover} = \frac{\text{COGS (تكلفة البضاعة المباعة)}}{\text{Average Inventory (متوسط المخزون)}}$$

* **ب. معدل دوران الحسابات المدينة / العملاء (Accounts Receivable Turnover):**
  $$\text{AR Turnover} = \frac{\text{Net Credit Sales (صافي المبيعات الآجلة)}}{\text{Average Net Accounts Receivable (متوسط الحسابات المدينة)}}$$

* **ج. معدل دوران إجمالي الأصول (Total Asset Turnover):**
  $$\text{Asset Turnover} = \frac{\text{Net Sales (صافي المبيعات)}}{\text{Average Total Assets (متوسط إجمالي الأصول)}}$$

---

### 3️⃣ نسب الملاءة والمديونية (Solvency / Debt Ratios)
تقيس قدرة الشركة على البقاء والاستمرار على المدى الطويل وخدمة ديونها واستيعاب المخاطر المالية.

* **أ. نسبة الدين إلى الأصول (Debt to Asset Ratio):**
  $$\text{Debt to Asset Ratio} = \frac{\text{Total Debt / Total Liabilities (إجمالي الديون والالتزامات)}}{\text{Total Assets (إجمالي الأصول)}} \times 100$$

* **ب. نسبة تغطية الفوائد (Times Interest Earned - TIE):**
  $$\text{Times Interest Earned} = \frac{\text{EBIT (الأرباح قبل الفوائد والضرائب)}}{\text{Interest Expenses (مصاريف الفوائد)}}$$

---

### 4️⃣ نسب الربحية (Profitability Ratios)
تقيس مدى قدرة الشركة على توليد أرباح من مبيعاتها وأصولها واستثمارات المالكين.

* **أ. هامش صافي الربح (Net Profit Margin):**
  $$\text{Profit Margin} = \frac{\text{Net Income (صافي الدخل)}}{\text{Net Sales (صافي المبيعات)}} \times 100$$

* **ب. العائد على الأصول (Return on Assets - ROA):**
  $$\text{ROA} = \frac{\text{Net Income (صافي الدخل)}}{\text{Average Total Assets (متوسط إجمالي الأصول)}} \times 100$$

* **ج. العائد على حقوق الملكية (Return on Equity - ROE):**
  $$\text{ROE} = \frac{\text{Net Income (صافي الدخل)}}{\text{Average Equity (متوسط حقوق الملكية)}} \times 100$$

---

### 5️⃣ نسب السوق وتقييم الأسهم (Market Ratios)
تقيس نظرية وتقييم المستثمرين والسوق لسهم الشركة.

* **أ. ربحية السهم (Earnings Per Share - EPS):**
  $$\text{EPS} = \frac{\text{Net Income}}{\text{Weighted Average Common Shares Outstanding}}$$

* **ب. مضاعف الربحية / نسبة السعر إلى الربح (Price-to-Earnings Ratio - P/E):**
  $$\text{P/E Ratio} = \frac{\text{Market Price Per Share (السعر السوقي للسهم)}}{\text{EPS (ربحية السهم)}}$$

---

## 📌 الفصل الرابع: التدفقات النقدية والموازنة النقدية (Cash Flows & Cash Budgeting)

### 1. صافي الربح التشغيلي بعد الضريبة (NOPAT)
$$\text{NOPAT} = \text{EBIT} \times (1 - T)$$
*حيث $T$ هو معدل الضريبة (Tax Rate).*

---

### 2. التدفق النقدي التشغيلي (Operating Cash Flow - OCF)
$$\text{OCF} = \text{NOPAT} + \text{Depreciation (الإهلاك)}$$
*أو بالصيغة المجمعة:*
$$\text{OCF} = [\text{EBIT} \times (1 - T)] + \text{Depreciation}$$

---

### 3. التدفق النقدي الحر (Free Cash Flow - FCF / FCFF)

#### أ. الصيغة المباشرة للتدفق النقدي الحر (FCF):
$$\text{FCF} = \text{OCF} - \text{NFAI} - \text{NCAI}$$
* **NFAI (الاستثمار الصافي في الأصول الثابتة):**
  $$\text{NFAI} = \Delta \text{Net Fixed Assets (التغير في الأصول الثابتة)} + \text{Depreciation}$$
* **NCAI (الاستثمار الصافي في الأصول المتداولة / رأس المال العامل):**
  $$\text{NCAI} = \Delta \text{Current Assets} - (\Delta \text{Accounts Payable} + \Delta \text{Accruals})$$

#### ب. صيغة التدفق النقدي الحر للشركة الشاملة (FCFF):
$$\text{FCFF} = \text{Net Income} + \text{Depreciation} + [\text{Interest} \times (1 - T)] - \text{CAPEX (الإنفاق الراسمالي)} - \Delta \text{Working Capital}$$

---

### 4. معادلات الموازنة النقدية (Cash Budget Equations)

1. **صافي التدفق النقدي للفترة:**
   $$\text{Net Cash Flow} = \text{Total Cash Receipts (المقبوضات النقدية)} - \text{Total Cash Disbursements (المدفوعات النقدية)}$$

2. **رصيد النقدية النهائي:**
   $$\text{Ending Cash Balance} = \text{Beginning Cash Balance (رصيد أول الفترة)} + \text{Net Cash Flow}$$

3. **حساب الفائض أو العجز النقدي (Surplus / Shortage):**
   $$\text{Surplus / Shortage} = \text{Ending Cash Balance} - \text{Minimum Cash Balance Required (الحد الأدنى المطلوبة سيولته)}$$
   * إذا كان الناتج موجباً $\leftarrow$ يوجد **فائض (Surplus)** يُستثمر قصيراً.
   * إذا كان الناتج سالباً $\leftarrow$ يوجد **عجز (Shortage)** يتطلب تمويلاً قصيراً.

---

## 📊 جدول ملخص سريع للرموز والمصطلحات الإنجليزية (Glossary)

| المصطلح الإنجليزي | الاختصار | المعنى باللغة العربية |
| :--- | :---: | :--- |
| Earnings Per Share | **EPS** | ربحية السهم الواحد |
| Earnings Before Interest and Taxes | **EBIT** | الأرباح قبل الفوائد والضرائب |
| Cost of Goods Sold | **COGS** | تكلفة البضاعة المباعة |
| Operating Cash Flow | **OCF** | التدفق النقدي التشغيلي |
| Free Cash Flow | **FCF** | التدفق النقدي الحر |
| Return on Assets | **ROA** | العائد على الأصول |
| Return on Equity | **ROE** | العائد على حقوق الملكية |
| Price-to-Earnings Ratio | **P/E** | مضاعف الربحية / نسبة السعر إلى الربح |
| Accounts Receivable | **AR** | الحسابات المدينة / العملاء |
| Accounts Payable | **AP** | الحسابات الدائنة / الموردون |
| Times Interest Earned | **TIE** | نسبة تغطية الفوائد |
| Net Operating Profit After Tax | **NOPAT** | صافي الربح التشغيلي بعد الضريبة |
