const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://mapause.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });

  // Product section ~3200px
  await page.evaluate(() => window.scrollTo(0, 3200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/mapause-product.png' });

  // Ingredients section ~5200px
  await page.evaluate(() => window.scrollTo(0, 5200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/mapause-ingredients.png' });

  // Comparison section ~5800px
  await page.evaluate(() => window.scrollTo(0, 5800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/mapause-comparison.png' });

  // FAQ ~8000px
  await page.evaluate(() => window.scrollTo(0, 8200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/mapause-faq.png' });

  await browser.close();
  console.log('Done!');
})();
