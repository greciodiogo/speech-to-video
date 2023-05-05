const sharp = require('sharp');
const sizeOfImage = require('image-size');
const videoshow = require('videoshow');
const downloadImage = require('image-downloader').image;
const path = require('path');
const fs = require('fs');
const cloudinary = require('./cloudnary');
const downloadAudio = require('../audio/download-audio');

class VideoConverter {
    constructor(
        imagesParams = {},
        audioParams = {
            fade: true,
            delay: 2,
        },
        videoName = 'video-file-converted',
    ) {
        this.audio = undefined;
        this.images = [];
        this.video = undefined;
        this.imagesParams = imagesParams;
        this.audioParams = audioParams;
        this.videoName = videoName;
        this.imageDim = [];
    }

    async downloadImages(images, callback) {
        if (!Array.isArray(images)) throw new Error('Invalid set of images');
        const dest = path.normalize(`${__dirname}/files/images`);

        const recursiveDownload = (index = 0) => {
            if (index === images.length) {
                this.resizeImages();
                if (callback) return callback();
                return;
            }

            downloadImage({ url: images[index], dest })
                .then(async ({ filename: oldName }) => {
                    const extname = !path.extname(oldName)
                        ? '.png'
                        : path.extname(oldName);
                    const newPath = path.normalize(
                        `${__dirname}/files/images/image_${index}${extname}`,
                    );
                    fs.renameSync(oldName, newPath);
                    this.images.push(newPath);
                    const dim = sizeOfImage(newPath);
                    if (this.imageDim.length === 0 || !this.imageDim) {
                        this.imageDim.push(dim.width);
                        this.imageDim.push(dim.height);
                    } else {
                        if (dim.width < this.imageDim.width)
                            this.imageDim[0] = dim.width;
                        if (dim.height < this.imageDim.height)
                            this.imageDim[1] = dim.height;
                    }

                    await recursiveDownload(index + 1);
                })
                .catch((err) => console.log(err));
        };

        recursiveDownload();
    }

    unlinkImages() {
        const imagesFolder = path.normalize(`${__dirname}/files/images/`);

        this.images = [];
        const imagesFiles = fs.readdirSync(imagesFolder);

        imagesFiles.map((img) => {
            const dir = `${__dirname}/files/images/${img}`;
            fs.unlinkSync(dir);
        });
    }

    unlinkVideo() {
        fs.unlinkSync(this.video);
    }

    async uploadVideo(cb) {
        try {
            const result = await cloudinary.uploader.upload(this.video, {
                resource_type: 'video',
                overwrite: true,
            });
            this.videoUrl = await result.url;
            cb(this.videoUrl);
            this.unlinkVideo();
        } catch (error) {
            throw new Error(error);
        }
    }

    async resizeImages() {
        if (this.images.length === 0 || !this.images) {
            throw new Error('Invalid set of images');
        }

        if (this.imageDim.length === 0 || !this.imageDim) {
            throw new Error('invalid dimensions');
        }

        const tmpImgs = [];
        const w = this.imageDim[0];
        const h = this.imageDim[1];

        this.images.map((url, index) => {
            const newPath = path.normalize(
                `${__dirname}/files/images/image_${index}.png`,
            );

            tmpImgs.push(newPath);
            sharp(url)
                .rotate()
                .resize(w, h)
                .png()
                .toBuffer()
                .then((data) => {
                    fs.writeFileSync(newPath, data);
                })
                .catch((err) => {
                    console.log(err);
                });
        });

        this.images = tmpImgs;
    }

    async makeVideo(contentType, publicId, cb) {
        if (this.images.length === 0 || !this.images)
            throw new Error('Invalid set of images');

        const pathToSave = path.normalize(
            `${__dirname}/files/${this.videoName}.mp4`,
        );
        try {
            downloadAudio(contentType, publicId, (audioPath) => {
                videoshow(this.images)
                    .audio(audioPath, this.audioParams)
                    .save(pathToSave)
                    .on('error', (err) => {
                        throw new Error(err);
                    })
                    .on('end', async () => {
                        this.video = pathToSave;
                        await this.uploadVideo(cb);
                        this.unlinkImages();
                        fs.unlinkSync(audioPath);
                    });
            });
        } catch (error) {
            try {
                videoshow(this.images)
                    .save(pathToSave)
                    .on('error', (err) => {
                        throw new Error(err);
                    })
                    .on('end', async () => {
                        this.video = pathToSave;
                        await this.uploadVideo(cb);
                        this.unlinkImages();
                    });
            } catch (er) {
                console.log(er);
            }
        }
    }
}

module.exports = VideoConverter;
