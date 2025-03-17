import { FileReader } from '../file-reader/file-reader.js';

export const getAppIds = () => {
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
};
