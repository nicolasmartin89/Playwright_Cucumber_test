import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";
import { pageFixture } from "./pageFixtures";

let browser: Browser;
let page: Page;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  pageFixture.page = page;
});

AfterAll(async () => {
  await pageFixture.page.close();
  await browser.close();
});
