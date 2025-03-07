import puppeteer from 'puppeteer';

export const puppeteerInit = async (): Promise<any> => {
  console.log('running puppeteer yopta');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL.
  console.log('navigating to page');
  await page.goto('https://developer.chrome.com/');

  // Set screen size.
  console.log('setting screen size');
  await page.setViewport({ width: 1080, height: 1024 });

  // Type into search box.
  console.log('locating search box to insert text');
  await page.locator('.devsite-search-field').fill('automate beyond recorder');

  // Wait and click on first result.
  console.log('looking for first result and clicking');
  await page.locator('.devsite-result-item-link').click();

  // Locate the full title with a unique string.
  console.log('looking for full title with unique string');
  const textSelector = await page
    .locator('text/Customize and automate')
    .waitHandle();

  console.log('evaluating the title');
  const fullTitle = await textSelector?.evaluate((el: any) => el.textContent);

  // Print the full title.
  console.log(`The title of this blog post is ${fullTitle}.`);

  await browser.close();
};
