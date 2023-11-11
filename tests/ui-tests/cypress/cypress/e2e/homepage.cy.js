import homepage from "../pages/homepage";

describe('home page header loads as expected', () => {
    it('renders expected header text', () => {
        cy.visit('https://www.ruggleson.com');
        homepage.elements.header_text().should('have.text', 'ruggles online');
    });
});

describe('home page logo loads as expected', () => {
    it('renders image as expected', () => {
        cy.visit('https://www.ruggleson.com');
        homepage.elements.logo_image().should('be.visible')
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
                expect($img[0].naturalHeight).to.be.greaterThan(0);
            });
    });
});

describe('home page sidebar loads as expected', () => {
    it('renders all expected buttons', () => {
        cy.visit('https://www.ruggleson.com');
        homepage.elements.sidebar_news().should('have.text', 'news');
        homepage.elements.sidebar_links().should('have.text', 'links');
        homepage.elements.sidebar_contact().should('have.text', 'contact');
    });
});

describe('home page footer renders as expected', () => {
    it('home page footer contains the expected text', () => {
        cy.visit('https://www.ruggleson.com');
        homepage.elements.footer_text().should('have.text', 'copyright \xA9 2023 john ruggles, cactus labs. all rights reserved.');
    });
});

describe('home page sidebar behaves as expected', () => {
    it('clicking buttons renders expected content headers', () => {
        cy.visit('https://www.ruggleson.com');
        homepage.elements.header_text().should('have.text', 'ruggles online');
        homepage.elements.content_header_text().should('have.text', 'meanwhile, on windmill hill...');
        homepage.click_sidebar_news();
        homepage.elements.header_text().should('have.text', 'ruggles online');
        homepage.elements.content_header_text().should('have.text', 'news...');
        homepage.click_sidebar_links();
        homepage.elements.header_text().should('have.text', 'ruggles online');
        homepage.elements.content_header_text().should('have.text', 'links...');
        homepage.click_sidebar_contact();
        homepage.elements.header_text().should('have.text', 'ruggles online');
        homepage.elements.content_header_text().should('have.text', 'contact...');
    });
});