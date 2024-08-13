import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixtures";

setDefaultTimeout(60 * 1000 * 2);

Given("User navigates to the application", async function () {
  await pageFixture.page.goto("https://play1.automationcamp.ir/");
});

Given("User click on the login link", async function () {
  await pageFixture.page.locator("//a[@href='login.html']").click();
});

Given("User enter the username as {string}", async function (username) {
  await pageFixture.page.locator("//input[@id='user']").fill(username);
});

Given("User enter the password as {string}", async function (password) {
  await pageFixture.page.locator("//input[@id='password']").fill(password);
});

When("User click on the login button", async function () {
  await pageFixture.page.locator("//button[@id='login']").click();
});

Then("Login should be success", async function () {
  const textPage = pageFixture.page.locator(
    "div[class='card-header bg-info text-white'] h3"
  );
  await expect(textPage).toHaveText("Dinesh's Pizza House");
});

When("Login should fail", async function () {
  const faliureMessage = pageFixture.page.locator("//span[@id='message']");
  await expect(faliureMessage).toBeVisible;
});
