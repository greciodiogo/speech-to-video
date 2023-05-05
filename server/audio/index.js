const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const { createReadStream, unlinkSync } = require('fs');
// const path = require('path');

const downloadAudio = require('./download-audio');
const { RecognizeConstants } = require('ibm-watson/speech-to-text/v1');

const ibmSpeechToText = async (contentType, publicId, callback) => {
    downloadAudio(contentType, publicId, (audioPath) => {
        console.log(audioPath);
        // const audioPath = path.normalize(
        //     `${__dirname}/download/audio-file.mp3`,
        // );
        const speechToText = new SpeechToTextV1({
            authenticator: new IamAuthenticator({
                apikey: process.env.SPEECH_TO_TEXT_IAM_API_KEY,
            }),
            serviceUrl: process.env.SPEECH_TO_TEXT_URL,
        });

        const params = {
            audio: createReadStream(audioPath),
            contentType:
                contentType === 'audio/mp3' || contentType === 'audio/mpeg'
                    ? RecognizeConstants.ContentType.AUDIO_MP3
                    : RecognizeConstants.ContentType.AUDIO_OGG_CODECS_OPUS,
        };
        speechToText
            .recognize(params)
            .then((response) => {
                if (response) {
                    const alternatives =
                        response.result.results[0].alternatives;
                    const bestAlternative = alternatives.sort(
                        ({ confidence }, { confidence: _confidence }) =>
                            _confidence - confidence,
                    );

                    if (callback) {
                        unlinkSync(audioPath);
                        callback(bestAlternative[0].transcript);
                    }
                }
            })
            .catch(console.error);
    });
};

module.exports = ibmSpeechToText;
