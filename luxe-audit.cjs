const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });
  
  await page.screenshot({ path: '/tmp/luxe-01-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/luxe-02-trust.png' });

  await page.evaluate(() => window.scrollTo(0, 2400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/luxe-03-product.png' });
  
  await page.evaluate(() => window.scrollTo(0, 3600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/luxe-04-science.png' });

  await page.evaluate(() => window.scrollTo(0, 5500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/luxe-05-testimonials.png' });
  
  await page.evaluate(() => window.scrollTo(0, 99999));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/luxe-06-footer.png' });

  await browser.close();
  console.log('Done!');
})();
