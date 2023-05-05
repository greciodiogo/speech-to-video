const VideoConverter = require('./video');

const videoMaker = (images, contentType, publicId, cb) => {
    const videoConverter = new VideoConverter({}, {});

    videoConverter.downloadImages(images, async () => {
        await videoConverter.makeVideo(contentType, publicId, cb);
    });
};

// videoMaker(mockImages);

module.exports = videoMaker;

// const mockImages = [
//     'https://placekitten.com/450/300',
//     'https://placekitten.com/550/500',
//     'https://s1.cdn.autoevolution.com/images/news/arctic-trucks-gigantic-ford-f-150-lariat-is-the-hulk-of-pickups-150464_1.jpg',
// ];
