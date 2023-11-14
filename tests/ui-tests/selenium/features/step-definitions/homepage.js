var assert = require('assert');
var homepage = require("../../pages/homepage");
const { By } = require('selenium-webdriver');

module.exports = function () {
    this.Given('I visit the home page', async function () {
        this.driver.get('http://www.ruggleson.com');
    });
    this.Then('the home page header loads as expected', async function () {
        await this.driver.findElement(By.xpath(homepage.header_text)).then(async function (header) {
            await assert.equal(await header.getAttribute("innerHTML"), "ruggles online");
        });
    });
};