import { ExtendDescribeThis } from 'nightwatch';
var homepage = require("../nightwatch/pages/homepage");

let header_text;
let url;

describe('homepage tests', function() {
    url = 'https://www.ruggleson.com';
    header_text = homepage.elements.header_text;

  beforeEach(function(browser) {
    browser.navigateTo(url);
  });

  it('Validate homepage title', (browser) => {
          browser.useXpath().waitForElementVisible(header_text)
          .assert.visible(header_text)
          .assert.textContains(header_text, 'ruggles online');
  });
});
