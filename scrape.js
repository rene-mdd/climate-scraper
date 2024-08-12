const puppeteer = require('puppeteer');

async function scrapeBusiness(url) {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        devtools: true,
        userDataDir: "/home/renerrr/development/web scraping app/coockies-data"
    });
    const page = await browser.newPage();
    // page.on('response', response => {
    //     console.log(response.url());
    //   });
    // Navigate the page to a URL
    await page.goto(url);
    // Set screen size
    try {
        await page.waitForSelector('#onetrust-accept-btn-handler');
        // await Promise.all([
        //     page.click('#onetrust-accept-btn-handler'),
        //     page.waitForNavigation({ waitUntil: 'networkidle2' }),
        //   ]);
        page.click('#onetrust-accept-btn-handler')
          console.log('Current URL:', page.url());
          await page.waitForSelector('#regional_selection__list_item_stay_on_global', { visible: true });
          const elementVisible = await page.$('#regional_selection__list_item_stay_on_global');
          console.log(elementVisible);
          if (elementVisible) {
            await page.click('#regional_selection__list_item_stay_on_global');
          } else {
            console.error('Element not found or not visible');
          }
    } catch (error) {
        console.log(error)
    }
    // await browser.close();
}

scrapeBusiness('https://www.cdp.net/en/responses?queries%5Bname%5D=');