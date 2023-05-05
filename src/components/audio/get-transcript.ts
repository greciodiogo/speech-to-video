import { KEYS } from '@constants';
import { UrlBuilder } from 'http-url-builder';
import { GetTranscriptType } from './types';

export const getTranscript = async ({
    audioType,
    audioPublicId,
    setTranscript,
    openErrorSnackbar,
}: GetTranscriptType) => {
    try {
        const url = new UrlBuilder(KEYS.localhost)
            .addPath('speech-to-text')
            .addQueryParam('audio-public-id', audioPublicId)
            .addQueryParam('content-type', audioType)
            .build();
        console.log(url);

        const response = await (await fetch(url)).json();

        if (response) {
            if (setTranscript) {
                setTranscript(response);
            }
        }
    } catch (error) {
        openErrorSnackbar(`common:errors.something-wrong-general`);
    }
};
