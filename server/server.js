const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const imageScraper = require('./image-scraper');
const videoMaker = require('./video-maker');
const ibmSpeechToText = require('./audio');

app.use(cors());

app.get('/:image&:length', async (req, res) => {
    const image = req.params.image;
    const length = req.params.length ? req.params.length : 20;

    const imageJson = await imageScraper(image, length);
    return res.json(imageJson);
});

app.get('/make-video', async (req, res) => {
    const images = JSON.parse(req.query.images);
    const contentType = req.query['content-type'];
    const publicId = req.query['audio-public-id'];

    return videoMaker(images, contentType, publicId, (url) => {
        return res.json(url);
    });
});

app.get('/speech-to-text', async (req, res) => {
    const contentType = req.query['content-type'];
    const publicId = req.query['audio-public-id'];

    return ibmSpeechToText(contentType, publicId, (transcript) => {
        return res.json(transcript);
    });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('a api está rodando na porta', port);
});
