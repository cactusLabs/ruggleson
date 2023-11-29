var assert = require('assert');
var homepage = require("../../pages/homepage");
const { By } = require('selenium-webdriver');

module.exports = function () {
    this.Given('I visit the home page', async function () {
        this.driver.get('http://www.ruggleson.com');
    });
};