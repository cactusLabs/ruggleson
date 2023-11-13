require('xpath_cypress');
class homepage {

    elements = {
        header_text : () => cy.xpath("//*[@class='header-text']"),
        content_header_text : () => cy.xpath("//*[@class='content-header']"),
        content_text: () => cy.xpath("//*[@class='content-text']"),
        logo_image: () => cy.xpath("//img[@class='swede']"),
        sidebar_news : () => cy.xpath("//button[@id='button-news']"),
        sidebar_links : () => cy.xpath("//button[@id='button-links']"),
        sidebar_contact : () => cy.xpath("//button[@id='button-contact']"),
        footer_text : () => cy.xpath("//*[@class='footer-text']")
    }

    click_sidebar_news() {
        this.elements.sidebar_news().click()
    }

    click_sidebar_links() {
        this.elements.sidebar_links().click()
    }

    click_sidebar_contact() {
        this.elements.sidebar_contact().click()
    }
}

module.exports = new homepage();