const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });
  
  await page.screenshot({ path: '/tmp/final-01-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/final-02-trust.png' });

  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/final-03-problem.png' });

  await page.evaluate(() => window.scrollTo(0, 2600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/final-04-product.png' });

  await page.evaluate(() => window.scrollTo(0, 3800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/final-05-science.png' });
  
  await page.evaluate(() => window.scrollTo(0, 5000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/final-06-ingredients.png' });

  await page.evaluate(() => window.scrollTo(0, 6000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/final-07-testimonials.png' });

  await page.evaluate(() => window.scrollTo(0, 99999));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/final-08-footer.png' });

  // Test CTA click
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  const btn = await page.locator('button:has-text("Je veux ma brume")').first();
  await btn.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/final-09-after-cta.png' });
  
  await browser.close();
  console.log('Final audit done!');
})();
