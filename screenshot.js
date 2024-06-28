// screenshot.js
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(fs.readFileSync('index.html', 'utf8'), { waitUntil: 'domcontentloaded' });

    // Wait for the JavaScript to execute and the result to appear
    await page.waitForSelector('#result');

    // Take a screenshot
    await page.screenshot({ path: 'result.png' });

    await browser.close();
})();
