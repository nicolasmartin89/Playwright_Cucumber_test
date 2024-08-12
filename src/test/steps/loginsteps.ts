import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";

import { Browser, chromium, Page, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    await page.goto("https://play1.automationcamp.ir/")
  });

Given('User click on the login link', async function () {
    await page.locator("//a[@href='login.html']").click();
  });

Given('User enter the username as {string}', async function (username) {
    await page.locator("//input[@id='user']").fill(username);
  });

Given('User enter the password as {string}', async function (password) {
    await page.locator("//input[@id='password']").fill(password);
  });

When('User click on the login button', async function () {
    await page.locator("//button[@id='login']").click();
  });

Then('Login should be success', async function () {
    await expect(page.locator("div[class='card-header bg-info text-white'] h3")).toHaveText("Dinesh's Pizza House");
    await browser.close()
  });

When('Login should fail', async function () {
    await expect(page.locator("//span[@id='message']")).toBeVisible();;
    await browser.close()

  });