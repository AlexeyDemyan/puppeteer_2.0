import puppeteer from "puppeteer";
import { config } from "dotenv";

const puppeteerInit = async () => {
    console.log("running puppeteer");
    const parsedConfig = config();
    if (parsedConfig.error) {
        throw new Error("Can't read .env file. Perhaps the file does not exist.");
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('file:///C:/Users/ademyanov/Desktop/Codes_and_Repos/puppeteer_2.0/logs/scraped_page.html');

    //const appNameElement = await page.locator(`#${process.env.NAME_ID}`).waitHandle();
    //const appImageElement = await page.locator(`.${process.env.HEADER_IMAGE_CLASS}`).waitHandle();

    // const appName = await appNameElement?.evaluate((el) => el.textContent);
    // const appImage = await appImageElement?.evaluate((el) => el.getAttribute('src'));

    // const descriptionElement = await page.locator(`.${process.env.DESCRIPTION_CLASS}`).waitHandle();
    // const description = await descriptionElement?.evaluate((el) => el.textContent);
    // console.log(description.trim());

    //working solution, need to evaluate in real time how the texts will come out
    const tags = await page.evaluate(() => {
        let data = [];
        let elements = document.getElementsByClassName('app_tag');
        for (let element of elements) {
            console.log(element.textContent);
            data.push(element.textContent);
        }
        return data;
    })

    console.log(tags);

    await browser.close();
}

puppeteerInit();