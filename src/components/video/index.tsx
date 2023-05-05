import { useApp } from '@app-data';
import { KEYS } from '@constants';
import { useSnackbar } from '@hooks';
import React, { useEffect, useState } from 'react';
import { VideoContainer } from './styled';
import { UrlBuilder } from 'http-url-builder';

export const Video: React.FC = () => {
    const { selectedImages, audioFile, setVideoFile, videoFile } = useApp();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { openErrorSnackbar } = useSnackbar();

    const makeVideo = async () => {
        setIsLoading(true);
        try {
            const urls: string[] = [];

            selectedImages.map(({ images }) => {
                images.map(({ url }) => {
                    urls.push(url);
                });
            });

            const url = new UrlBuilder(KEYS.localhost)
                .addPath('make-video')
                .addQueryParam('images', urls)
                .addQueryParam('audio', audioFile)
                .build();

            const res = await (await fetch(url)).json();

            setVideoFile(res);
        } catch (error) {
            openErrorSnackbar(`common:errors.something-wrong`);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        makeVideo();
    }, []);

    return (
        <VideoContainer>
            {isLoading && <div id="loader" />}
            {!isLoading && videoFile && videoFile !== '' && (
                <iframe
                    src={videoFile}
                    width="100%"
                    height="100%"
                    allowFullScreen
                />
            )}
        </VideoContainer>
    );
};
