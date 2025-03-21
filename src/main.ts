import { testFunc } from './mocks/test.js';
// import { puppeteerInit } from "./puppeteer-api/index.js";
// import { puppeteerScrapeAll } from "./puppeteer-api/scrape-all.js";
import { getAppIds } from './puppeteer-api/get-app-ids.js';
// import { puppeteerScrapeAppData } from './puppeteer-api/scrape-app-data.js';
// import { writeAppIdsToFile } from './puppeteer-api/write-app-ids-to-file.js';
import { createAppId } from './backend-api/write-apids-to-db.js';

testFunc();
// writeAppIdsToFile();
// puppeteerScrapeAppData();
// puppeteerScrapeAll();
// puppeteerInit();

const result = getAppIds();
console.log(result);
for (let i = 0; i < result.length; i++) {
//   createAppId(result[i],);
}

console.log('DONE!');
