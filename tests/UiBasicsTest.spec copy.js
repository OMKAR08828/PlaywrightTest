const {test, expect}= require('@playwright/test');

//test('First Playwright Test', async function(){
test('Browser context  Playwright Test', async ({browser})=>
{
//playwright code --
//JS is asynchronous means every step will execute simultaneuously . 
// You neeed to wait for every step to be done

//Running test on chrome browser
const context= await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const text = await page.title();
console.log(text);
//xpath and css selectors
const username = page.locator("input#username");
const pass= page.locator("[name='password']");
const signIn=page.locator("input#signInBtn");


//await page.locator("input#username").fill("rahulshett");
//or user type methos to write
await page.locator("input#username").type("rahulshett");
await page.locator("[name='password']").type("learning");

await page.locator("input#signInBtn").click();
//login failed

await username.fill("rahulshettyacademy");
await pass.fill("learning")
await signIn.click()

console.log(await page.title())

console.log( await page.locator(".card-title").nth(0).textContent());


console.log("thamb jara..")
const allTitles=await page.locator(".card-title").allTextContents();
[]
console.log(allTitles)
await page.locator(".card-title").last().click();




})


test('page context  Playwright Test', async ({page})=>
{
 await page.goto("https://google.com/");
  await expect(page).toHaveTitle("Google");
console.log(await page.title()

 );
 })


















//Inside that directory, you can run several commands:

//   npx playwright test
//     Runs the end-to-end tests.

//   npx playwright test --ui
//     Starts the interactive UI mode.

//   npx playwright test --project=chromium
//     Runs the tests only on Desktop Chrome.

//   npx playwright test example
//     Runs the tests in a specific file.

//   npx playwright test --debug
//     Runs the tests in debug mode.

//   npx playwright codegen
//     Auto generate tests with Codegen.