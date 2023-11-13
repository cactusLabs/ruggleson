var assert = require('assert');
const webdriver = require('selenium-webdriver');
const { By } = webdriver; 
var homepage = require("../../pages/homepage");

module.exports = function () {
    this.Given(/^I visit the home page$/, function () {
        return this.driver.get('http://www.ruggleson.com');
    });
    this.Then(/^the home page header loads as expected$/, function () {
        this.driver.findElement(By.xpath(homepage.header_text)).then(function (header) {
            assert.equal(header, "ruggles online");
        });
    });
};