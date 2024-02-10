import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(60000); 

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: false, 
      slowMo: 250,
      devtools: true, 
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.input');
    const button = await page.$('.submit');
    await input.type('3530111333300000');
    await button.click();
    await page.waitForSelector('.input.valid');
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.input');
    const button = await page.$('.submit');
    await input.type('3530111333300');
    await button.click();
    await page.waitForSelector('.input.novalid');
  });
});
