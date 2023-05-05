const cloudinary = require('../video/cloudnary'),
    fs = require('fs'),
    http = require('http'),
    path = require('path');

function download(url, dest, callback) {
    const file = fs.createWriteStream(dest);

    http.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            console.log('Downloaded');

            if (callback) {
                callback(dest);
            }
        });
        file.once('finish', () => {
            console.log('finishes');
        });
        file.once('ready', () => {
            console.log('ready');
        });
    }).on('error', function (err) {
        fs.unlink(dest);
    });
}

const downloadAudio = async (contentType, publicId, callback) => {
    const audioExt =
        `${contentType}`.toString() === 'audio/mpeg' ||
        `${contentType}`.toString() === 'audio/mp3'
            ? '.mp3'
            : '.ogg';
    const audioPath = path.normalize(
        `${__dirname}/download/audio-file${audioExt}`,
    );

    try {
        const options =
            audioExt === '.mp3'
                ? {
                      //   audio_codec: 'mp3',
                      //   format: 'mp3',
                  }
                : {};
        const generatedUrl = cloudinary.utils.video_url(publicId, options);

        download(generatedUrl, audioPath, callback);
        console.log(generatedUrl);
    } catch (error) {
        console.log(error);
    }
};

module.exports = downloadAudio;
