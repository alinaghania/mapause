const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });
  
  await page.screenshot({ path: '/tmp/aura-01-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  
  await page.evaluate(() => window.scrollTo(0, 1400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/aura-02-problem.png' });

  await page.evaluate(() => window.scrollTo(0, 2500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/aura-03-product.png' });
  
  await page.evaluate(() => window.scrollTo(0, 3700));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/aura-04-science.png' });

  // Test add to cart
  await page.evaluate(() => document.getElementById('product')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.locator('button:has-text("Ajouter au panier")').first().click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/aura-05-added.png' });

  await browser.close();
  console.log('Done!');
})();
