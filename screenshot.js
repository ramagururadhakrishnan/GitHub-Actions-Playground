// screenshot.js
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Update this URL to your GitHub Pages URL
    const url = 'https://<username>.github.io/<repository>/';
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Wait for the JavaScript to execute and the result to appear
    await page.waitForSelector('#result');

    // Take a screenshot
    await page.screenshot({ path: 'result.png' });

    await browser.close();
})();
