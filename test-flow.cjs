const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // 1. Homepage
  console.log('--- Testing Homepage ---');
  await page.goto('https://aurapause.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({ path: '/tmp/test-01-home.png' });
  console.log('Homepage: OK');

  // 2. Click "Je veux ma brume" -> should scroll to product
  const ctaBtn = page.locator('button:has-text("Je veux ma brume")').first();
  await ctaBtn.click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/test-02-after-cta.png' });
  console.log('CTA scroll: OK, URL=' + page.url());

  // 3. Click "Ajouter au panier"
  const addToCart = page.locator('button:has-text("Ajouter au panier")').first();
  if (await addToCart.isVisible()) {
    await addToCart.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/test-03-after-add.png' });
    console.log('Add to cart button clicked');
  } else {
    console.log('ERROR: Add to cart button NOT found');
  }

  // 4. Go to /cart
  await page.goto('https://aurapause.com/cart', { waitUntil: 'networkidle', timeout: 15000 });
  await page.screenshot({ path: '/tmp/test-04-cart.png' });
  console.log('Cart page: ' + (await page.title()));

  // 5. Test all nav pages
  const pages = [
    '/notre-histoire',
    '/ingredients', 
    '/temoignages',
    '/faq',
    '/contact',
    '/cgv',
    '/mentions-legales',
    '/politique-confidentialite',
    '/politique-cookies',
    '/checkout/success',
    '/checkout/cancel',
  ];
  
  for (const p of pages) {
    try {
      const resp = await page.goto('https://aurapause.com' + p, { waitUntil: 'networkidle', timeout: 15000 });
      const status = resp?.status() || 'unknown';
      const has404 = await page.locator('text=could not be found').count();
      if (has404 > 0 || status >= 400) {
        console.log(`${p}: ERROR (status=${status}, 404=${has404 > 0})`);
        await page.screenshot({ path: '/tmp/test-error-' + p.replace(/\//g, '_') + '.png' });
      } else {
        console.log(`${p}: OK (${status})`);
      }
    } catch (e) {
      console.log(`${p}: ERROR - ${e.message}`);
    }
  }

  await browser.close();
  console.log('\n--- All tests done ---');
})();
