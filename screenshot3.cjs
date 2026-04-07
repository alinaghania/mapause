const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });
  
  await page.screenshot({ path: '/tmp/v3-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  
  await page.evaluate(() => window.scrollTo(0, 2200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/v3-problem.png' });
  
  await page.evaluate(() => window.scrollTo(0, 3500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/v3-product.png' });
  
  await page.evaluate(() => window.scrollTo(0, 4800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/v3-science.png' });
  
  await page.evaluate(() => window.scrollTo(0, 7000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/v3-testimonials.png' });
  
  await browser.close();
  console.log('Done!');
})();
