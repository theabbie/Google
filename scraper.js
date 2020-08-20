const puppeteer = require('puppeteer');
const axios = require("axios");

(async function() {
  var browser = await puppeteer.launch({args: ['--no-sandbox']});
  var page = await browser.newPage();
  await page.goto("https://www.google.com/search?q=hi");
  await page.waitFor(3500);
  var data = await page.evaluate(function() {
    return document.body.textContent.toString();
  });
console.log(data);
})();
