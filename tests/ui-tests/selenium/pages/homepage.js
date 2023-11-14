let header_text,
    content_header_text,
    content_text,
    logo_image,
    sidebar_news,
    sidebar_links,
    sidebar_contact,
    footer_text;

class homepage {
    header_text = "//*[@class='header-text']";
    content_header_text = "//*[@class='content-header']";
    content_text = "//*[@class='content-text']";
    logo_image = "//img[@class='swede']";
    sidebar_news = "//button[@id='button-news']";
    sidebar_links = "//button[@id='button-links']";
    sidebar_contact = "//button[@id='button-contact']";
    footer_text = "//*[@class='footer-text']";

};
module.exports = new homepage();