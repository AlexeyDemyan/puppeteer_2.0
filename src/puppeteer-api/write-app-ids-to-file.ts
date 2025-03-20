import { FileReader } from '../file-reader/file-reader.js';
import { FileWriter } from '../file-writer/file-writer.js';

const WRITE_FILE_PATH = 'logs/appids_list.txt';

export const writeAppIdsToFile = () => {
  const fileReader = new FileReader('logs/appids.txt');
  const fileWriter = new FileWriter(WRITE_FILE_PATH); 
  fileReader.read();
  const logText = fileReader.toString();
  const pattern = /\\"appid\\":\d{1,100},/g;
  const numberPattern = /\d{1,100}/g;

  const foundItems = logText.match(pattern);

  const mySet: Set<Number> = new Set();

  if (foundItems) {
    for (let i = 0; i < foundItems.length; i++) {
      const appId = foundItems[i].match(numberPattern);
      if (appId) {
        mySet.add(Number(appId[0]));
      }
    }
    const result: Number[] = Array.from(mySet);
    console.log(result);
    fileWriter.write(result.toString());
  }
};
