import { testFunc } from './mocks/test.js';
// import { puppeteerInit } from "./puppeteer-api/index.js";
// import { puppeteerScrapeAll } from "./puppeteer-api/scrape-all.js";
// import { getAppIds } from './puppeteer-api/get-app-ids.js';
import { puppeteerScrapeAppData } from './puppeteer-api/scrape-app-data.js';

testFunc();
puppeteerScrapeAppData();
// getAppIds();
// puppeteerScrapeAll();
// puppeteerInit();