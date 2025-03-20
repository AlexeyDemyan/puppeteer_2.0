import { FileReader } from '../file-reader/file-reader.js';

export const getAppIds = () => {
  const fileReader = new FileReader('logs/appids.txt');
  fileReader.read();
  const logText = fileReader.toString();
  const pattern = /\\"appid\\":\d{1,100},/g;
  const numberPattern = /\d{1,100}/g;

  const foundItems = logText.match(pattern);

  const mySet = new Set();

  if (foundItems) {
    for (let i = 0; i < foundItems.length; i++) {
      const appId = foundItems[i].match(numberPattern);
      if (appId) {
        mySet.add(appId[0]);
      }
    }
    const result = Array.from(mySet);
    console.log(result.length);
  }
};
