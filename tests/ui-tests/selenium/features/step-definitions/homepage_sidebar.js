var assert = require('assert');
var homepage = require("../../pages/homepage");
const { By } = require('selenium-webdriver');

module.exports = function () {
    this.Then('the home page sidebar behaves as expected', async function () {
        await this.driver.findElement(By.xpath(homepage.content_header_text)).then(async function (content_header) {
            await assert.equal(await content_header.getAttribute("innerHTML"), 'meanwhile, on windmill hill...');
        });
        await this.driver.findElement(By.xpath(homepage.sidebar_news)).then(async function(news_button) {
            await news_button.click();
        });
        await this.driver.findElement(By.xpath(homepage.content_header_text)).then(async function (content_header) {
            await assert.equal(await content_header.getAttribute("innerHTML"), 'news...');
        });
        await this.driver.findElement(By.xpath(homepage.sidebar_links)).then(async function (links_button) {
            await links_button.click();
        });
        await this.driver.findElement(By.xpath(homepage.content_header_text)).then(async function (content_header) {
            await assert.equal(await content_header.getAttribute("innerHTML"), 'links...');
        });
        await this.driver.findElement(By.xpath(homepage.sidebar_contact)).then(async function (contact_button) {
            await contact_button.click();
        });
        await this.driver.findElement(By.xpath(homepage.content_header_text)).then(async function (content_header) {
            await assert.equal(await content_header.getAttribute("innerHTML"), 'contact...');
        });
    });
};