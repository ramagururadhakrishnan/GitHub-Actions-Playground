// screenshot.js
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' }); // Use the new headless mode
    const page = await browser.newPage();

    // Replace with your actual GitHub Pages URL
    const url = 'https://<username>.github.io/<repository>/';
    await page.goto(url, { waitUntil: 'networkidle2' }).catch(err => {
        console.error('Failed to navigate to the URL:', err);
        process.exit(1);
    });

    // Wait for the JavaScript to execute and the result to appear
    await page.waitForSelector('#result').catch(err => {
        console.error('Failed to find the result selector:', err);
        process.exit(1);
    });

    // Take a screenshot
    await page.screenshot({ path: 'result.png' });

    await browser.close();
})();
