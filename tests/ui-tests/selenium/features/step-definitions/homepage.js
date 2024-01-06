var assert = require('assert');
var homepage = require("../../pages/homepage");
const { By } = require('selenium-webdriver');

module.exports = function () {
    this.Then('the home page footer loads as expected', async function () {
        await this.driver.findElement(By.xpath(homepage.footer_text)).then(async function (footer_text) {
            await assert.equal(await footer_text.getAttribute("innerHTML"), 'copyright \xA9 2023 john ruggles, cactus labs. all rights reserved.');
        });
    });
    this.Then('the home page header loads as expected', async function () {
        await this.driver.findElement(By.xpath(homepage.header_text)).then(async function (header) {
            await assert.equal(await header.getAttribute("innerHTML"), "ruggles online");
        });
    });
    this.Then('the home page logo image loads as expected', async function () {
        await this.driver.findElement(By.xpath(homepage.logo_image)).then(async function (logo) {
            await assert.notEqual(await logo.getAttribute("naturalHeight"), 0);
            await assert.notEqual(await logo.getAttribute("naturalWidth"), 0);
        });
    });
    this.Then('the home page sidebar loads as expected', async function () {
        await this.driver.findElement(By.xpath(homepage.sidebar_news)).then(async function (button_news) {
            await assert.equal(await button_news.getAttribute("innerHTML"), 'news');
        });
        await this.driver.findElement(By.xpath(homepage.sidebar_links)).then(async function (button_links) {
            await assert.equal(await button_links.getAttribute("innerHTML"), 'links');
        });
        await this.driver.findElement(By.xpath(homepage.sidebar_contact)).then(async function (button_contact) {
            await assert.equal(await button_contact.getAttribute("innerHTML"), 'contact');
        });
    });
};