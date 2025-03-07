import puppeteer from 'puppeteer';

const TARGET_PAGE = 'https://pptr.dev/guides/what-is-puppeteer';

export const puppeteerScrapeAll = async (): Promise<any> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL.
  console.log(`Navigating to ${TARGET_PAGE}`);
  await page.goto(TARGET_PAGE, { waitUntil: 'networkidle0' });

  const html = await page.content();
  console.log(html);

  await browser.close();
};
