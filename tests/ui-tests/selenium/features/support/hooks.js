module.exports = function () {
    this.After(async function () {
        await this.driver.quit();
        return this.driver = null;
    });
};