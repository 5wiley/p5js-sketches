const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // We'll set up a simple server to serve the directory
    const express = require('express');
    const app = express();
    app.use(express.static('.'));
    const server = app.listen(3000, async () => {
        await page.goto('http://localhost:3000');
        await page.waitForTimeout(1000); // Wait for sound to load
        const result = await page.evaluate(() => {
            if (!sound) return 'sound not defined';
            const keys = [];
            for (let k in sound) keys.push(k);
            let bufferKeys = [];
            if (sound.node && sound.node.buffer) {
                for (let k in sound.node.buffer) bufferKeys.push(k);
            }
            return {
                soundKeys: keys,
                bufferKeys: bufferKeys,
                hasGetPeaks: typeof sound.getPeaks === 'function',
                hasNode: !!sound.node
            };
        });
        console.log(JSON.stringify(result, null, 2));
        server.close();
        await browser.close();
    });
})();
