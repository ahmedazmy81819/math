const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));

  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'networkidle' });

  // Wait for MathJax
  await page.waitForTimeout(2000);

  await page.screenshot({ path: 'screenshot-desktop.png', fullPage: false });

  // Mobile viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'screenshot-mobile.png', fullPage: false });

  // Test a calculator
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.fill('#cr-assets', '200000');
  await page.fill('#cr-liabilities', '100000');
  await page.click('button[onclick="calculateCurrentRatio()"]');
  await page.waitForTimeout(500);
  const result = await page.$eval('#cr-result .result-number', el => el.textContent);
  console.log('Current Ratio result:', result);

  if (errors.length) {
    console.log('JS ERRORS:', errors);
  } else {
    console.log('No JS errors detected');
  }

  await browser.close();
  console.log('Screenshots saved: screenshot-desktop.png, screenshot-mobile.png');
})();
