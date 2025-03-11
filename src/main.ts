import { testFunc } from './mocks/test.js';
// import { puppeteerInit } from "./puppeteer-api/index.js";
// import { puppeteerScrapeAll } from "./puppeteer-api/scrape-all.js";
import { FileReader } from './file-reader/file-reader.js';

testFunc();
// puppeteerScrapeAll();
// puppeteerInit();

const fileReader = new FileReader('logs/scraped_content.log');
fileReader.read();
const logText = fileReader.toString();

const pattern = '\"appid\":';

const appIdMatcher = (index: number) => {
  console.log(index);
};

for (let i = 0; i < 3; i++) {
  appIdMatcher(i);
}


