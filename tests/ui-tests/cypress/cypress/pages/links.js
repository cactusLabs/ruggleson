require('xpath_cypress');
class links {

    elements = {
        link_github: () => cy.xpath("//*[@id='link-github']"),
        link_linkedin: () => cy.xpath("//*[@id='link-linkedin']"),
        link_youtube: () => cy.xpath("//*[@id='link-youtube']"),
    }

    click_github_link() {
        this.elements.link_github().click();
    }

    click_linkedin_link() {
        this.elements.link_linkedin().click();
    }

    click_youtube_link() {
        this.elements.link_youtube().click();
    }
}

module.exports = new links();