const Scraper = require('./scraper/index.js');

const google = new Scraper({
    puppeteer: {
        headless: false,
    },
});

const imageScraper = async (image, length) => {
    try {
        const results = await google.scrape(image, length);
        return results;
    } catch (error) {
        return [];
    }
};

module.exports = imageScraper;
