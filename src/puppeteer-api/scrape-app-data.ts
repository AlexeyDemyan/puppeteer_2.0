import puppeteer from 'puppeteer';
import { config } from 'dotenv';

export const puppeteerScrapeAppData = async (): Promise<any> => {
  const parsedConfig = config();
  if (parsedConfig.error) {
    throw new Error("Can't read .env file. Perhaps the file does not exist.");
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    'file:///C:/Users/ademyanov/Desktop/Codes_and_Repos/puppeteer_2.0/logs/scraped_page.html'
  );

  const appNameElement = await page.locator(`#${process.env.NAME_ID}`).waitHandle();
  const appImageElement = await page.locator(`.${process.env.HEADER_IMAGE_CLASS}`).waitHandle();

  const appName = await appNameElement?.evaluate((el) => el.textContent);
  const appImage = await appImageElement?.evaluate((el) => el.getAttribute('src'));

  const descriptionElement = await page.locator(`.${process.env.DESCRIPTION_CLASS}`).waitHandle();
  const description = await descriptionElement?.evaluate((el) => el.textContent);

  //working solution, need to evaluate in real time how the texts will come out
  const tags = await page.evaluate(() => {
    let data: String[] = [];
    let elements: HTMLCollection = document.getElementsByClassName('app_tag');
    for (let element of elements) {
      if (element.textContent) {
        data.push(element.textContent);
      }
    }
    return data;
  });

  console.log(appName);
  console.log(appImage);
  console.log(description?.trim());
  console.log(tags);

  await browser.close();
};
