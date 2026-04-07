const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('https://mapause.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });

  await page.screenshot({ path: '/tmp/mapause-fullpage.png', fullPage: true });
  await page.screenshot({ path: '/tmp/mapause-hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });

  await page.evaluate(() => window.scrollTo(0, 2200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/mapause-middle.png' });

  await page.evaluate(() => window.scrollTo(0, 4200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/mapause-science.png' });

  await page.evaluate(() => window.scrollTo(0, 6500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/mapause-testimonials.png' });

  await page.evaluate(() => window.scrollTo(0, 99999));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/mapause-footer.png' });

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/mapause-mobile-hero.png' });

  await browser.close();
  console.log('Screenshots done!');
})();
