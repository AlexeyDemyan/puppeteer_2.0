import { testFunc } from './mocks/test.js';
// import { puppeteerInit } from "./puppeteer-api/index.js";
// import { puppeteerScrapeAll } from "./puppeteer-api/scrape-all.js";
import { FileReader } from './file-reader/file-reader.js';

testFunc();
// puppeteerScrapeAll();
// puppeteerInit();

const fileReader = new FileReader('logs/appids.txt');
fileReader.read();
const logText = fileReader.toString();
const pattern = /\\"appid\\":\d{1,100},/g;
const numberPattern = /\d{1,100}/g;

const foundItems = logText.match(pattern);
console.log(foundItems?.length);

if (foundItems) {
  console.log(foundItems[0]);
  console.log(foundItems[1]);
  console.log(foundItems[2]);

  for (let i = 0; i < 10; i++) {
    console.log(foundItems[i].match(numberPattern));
  }
}
