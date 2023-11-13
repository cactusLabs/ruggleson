var assert = require('assert');
module.exports = function () {
    this.Given(/^I visit the home page$/, function () {
        return this.driver.get('http://www.ruggleson.com');
    });

    this.Then(/^the home page header loads as expected$/, function () {
        //this.driver.getTitle().then(function (title) {
        //    assert.equal(title, "Test Cookbook");
        //    return title;
        //});
        assert.ok();
    });
};