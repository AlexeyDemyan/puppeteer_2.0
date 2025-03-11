import { testFunc } from "./mocks/test.js";
// import { puppeteerInit } from "./puppeteer-api/index.js";
// import { puppeteerScrapeAll } from "./puppeteer-api/scrape-all.js";
import { FileReader } from "./file-reader/file-reader.js";

testFunc();
// puppeteerScrapeAll();
// puppeteerInit();

const fileReader = new FileReader('logs/scraped_content.log');
fileReader.read();
console.log(fileReader.toString());