const puppeteer = require('puppeteer');

(async () => {
    // Launch browser with new headless mode
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Replace this URL with your actual GitHub Pages URL
    const url = 'https://<username>.github.io/<repository>/';
    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Ensure the element is available before taking a screenshot
        await page.waitForSelector('#result', { timeout: 10000 });

        // Take a screenshot
        await page.screenshot({ path: 'result.png' });
        console.log("Screenshot taken successfully.");
    } catch (error) {
        console.error("Error taking screenshot:", error);
    } finally {
        await browser.close();
    }
})();
