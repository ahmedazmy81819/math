const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:8765/index.html');
  await page.screenshot({ path: '/home/medo/Documents/new/6/screenshot-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: '/home/medo/Documents/new/6/screenshot-mobile.png', fullPage: true });
  await browser.close();
  console.log('Screenshots taken successfully.');
})();
