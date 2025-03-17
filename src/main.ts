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
// const pattern = /\\"appid\\":/g;
const pattern = /\\"appid\\":\d{1,100},/g;

const foundItems = logText.match(pattern);
// console.log(logText)
// console.log(foundItems);
console.log(foundItems?.length);
