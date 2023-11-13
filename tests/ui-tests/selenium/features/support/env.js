var seleniumWebdriver = require('selenium-webdriver');
function Init() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();
}
module.exports = function () {
    this.World = Init;

    // sets a default timeout to 30 seconds.  Time is in ms.
    this.setDefaultTimeout(30 * 1000);
};