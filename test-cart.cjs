const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });
  
  // Scroll to product
  await page.evaluate(() => document.getElementById('product')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  
  // Click add to cart
  const addBtn = page.locator('button:has-text("Ajouter au panier")').first();
  await addBtn.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/cart-01-after-add.png' });
  console.log('After add to cart');
  
  // Check cart badge
  const badge = await page.locator('span:has-text("1")').count();
  console.log('Cart badge visible: ' + (badge > 0));
  
  // Click cart icon to open sheet
  const cartIcon = page.locator('[aria-label="Ouvrir le panier"]');
  if (await cartIcon.isVisible()) {
    await cartIcon.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/cart-02-sheet.png' });
    console.log('Cart sheet opened');
  }
  
  // Go to cart page
  await page.goto('https://aurapause.com/cart', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/cart-03-page.png' });
  console.log('Cart page loaded');
  
  // Select 100ml and add
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 15000 });
  await page.evaluate(() => document.getElementById('product')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  
  const format100 = page.locator('button:has-text("100ml")');
  await format100.click();
  await page.waitForTimeout(300);
  await addBtn.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/cart-04-two-items.png' });
  console.log('Added 100ml too');

  // Go back to cart
  await page.goto('https://aurapause.com/cart', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/cart-05-full-cart.png' });
  console.log('Full cart page');

  await browser.close();
  console.log('Cart test done!');
})();
