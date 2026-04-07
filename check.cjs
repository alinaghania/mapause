const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });
  
  // Problem section
  await page.evaluate(() => window.scrollTo(0, 1100));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/fix-01-problem.png' });

  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/fix-02-cards.png' });

  // CTA section
  await page.evaluate(() => window.scrollTo(0, 99999));
  await page.waitForTimeout(500);
  // Scroll up a bit to see CTA
  await page.evaluate(() => window.scrollBy(0, -900));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/fix-03-cta.png' });

  await browser.close();
  console.log('Done!');
})();
