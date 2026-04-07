const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });
  
  // Full page
  await page.screenshot({ path: '/tmp/audit-full.png', fullPage: true });
  
  // Hero
  await page.screenshot({ path: '/tmp/audit-01-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
  
  // Trust banner
  await page.evaluate(() => window.scrollTo(0, 950));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-02-trust.png' });
  
  // Problem section
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-03-problem.png' });

  // Product section 
  await page.evaluate(() => window.scrollTo(0, 2800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-04-product-top.png' });
  
  await page.evaluate(() => window.scrollTo(0, 3600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-05-product-bottom.png' });
  
  // Science
  await page.evaluate(() => window.scrollTo(0, 4400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-06-science.png' });
  
  // Ingredients
  await page.evaluate(() => window.scrollTo(0, 5400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-07-ingredients.png' });
  
  // Comparison
  await page.evaluate(() => window.scrollTo(0, 6200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-08-comparison.png' });
  
  // Testimonials
  await page.evaluate(() => window.scrollTo(0, 7200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-09-testimonials.png' });
  
  // FAQ
  await page.evaluate(() => window.scrollTo(0, 8400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-10-faq.png' });
  
  // CTA + Footer
  await page.evaluate(() => window.scrollTo(0, 99999));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/audit-11-footer.png' });
  
  // Test CTA button click
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  const btn = await page.$('text=Je veux ma brume');
  if (btn) {
    await btn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/audit-12-cta-result.png' });
    console.log('CTA navigated to: ' + page.url());
  }
  
  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({ path: '/tmp/audit-13-mobile.png' });
  
  await browser.close();
  console.log('Audit done!');
})();
