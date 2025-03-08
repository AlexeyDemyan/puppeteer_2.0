import puppeteer from 'puppeteer';
import { config } from 'dotenv';
import { logPageContent } from './log-page-content.js';

const TARGET_PAGE =
  'https://store.steampowered.com/login/?snr=1_4_4__more-content-login';

const WISHLIST_PAGE = 'https://steamcommunity.com/my/wishlist/';

export const puppeteerScrapeAll = async (): Promise<any> => {
  const parsedConfig = config();
  if (parsedConfig.error) {
    throw new Error("Can't read .env file. Perhaps the file does not exist.");
  }

  console.log(process.env.STEAM_LOGIN);
  console.log(process.env.STEAM_PASS);

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  console.log(`Navigating to ${TARGET_PAGE}`);
  await page.goto(TARGET_PAGE, { waitUntil: 'networkidle0' });

  // if (process.env.STEAM_LOGIN) {
  //   await page
  //     .locator('._2GBWeup5cttgbTw8FM3tfx')
  //     .filter((input) => input.type === 'text')
  //     .fill(process.env.STEAM_LOGIN);
  // }

  if (process.env.STEAM_LOGIN && process.env.STEAM_PASS) {
    await page.type('input[type=text]', process.env.STEAM_LOGIN);
    await page.type('input[type=password]', process.env.STEAM_PASS);
    await page.click('button[type=submit]');
  }

  setTimeout(() => {
    console.log('10 seconds passed');
  }, 10000);

  setTimeout(() => {
    console.log('20 seconds passed, trying to click on Wishlist');
    page.goto(WISHLIST_PAGE, { waitUntil: 'networkidle0' })
  }, 20000);
  
  setTimeout(() => {
    console.log('30 seconds passed, maybe clisk on Wishlist yourself');
  }, 30000);

  setTimeout(() => {
    console.log('40 seconds passed, trying to log the page');
    logPageContent(page);
  }, 40000);

  // if (process.env.STEAM_PASS) {
  //   await page
  //     .locator('._2GBWeup5cttgbTw8FM3tfx')
  //     .filter((input) => input.type === 'password')
  //     .fill('process.env.STEAM_PASS');
  // }

  // await browser.close();
};
