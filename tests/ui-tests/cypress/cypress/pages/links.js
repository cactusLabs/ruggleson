require('xpath_cypress');
class links {

    elements = {
        link_youtube: () => cy.xpath("//*[@id='link-youtube']")
    }

    click_youtube_link() {
        this.elements.link_youtube().click();
    }
}

module.exports = new links();