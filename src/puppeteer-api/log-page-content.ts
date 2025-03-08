import { FileWriter } from '../file-writer/file-writer.js';
const WRITE_FILE_PATH = 'logs/scraped_content.log';

export const logPageContent = async (page: any): Promise<any> => {
  const fileWriter = new FileWriter(WRITE_FILE_PATH);

  const html = await page.content();
  console.log(html.length);
  await fileWriter.write(html);
};
