import React, { FC, useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useApp } from '@app-data';

import { AudioProps } from '../types';
import { RecordContainer } from './styled';
import { useSnackbar } from '@hooks/use-snackbar';

export const RecordButton: FC<AudioProps> = ({ setShow, show }) => {
    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ video: false, audio: true, onStop });
    const { openErrorSnackbar, openSuccessSnackbar } = useSnackbar();

    const { setAudioFile } = useApp();

    function start() {
        setShow('record');
        startRecording();
    }

    function onStop(blobUrl: string, blob: Blob) {
        stopRecording();
        if (blob) {
            // setStep(2);
        } else {
            return openErrorSnackbar(`common:record.${status}`);
        }
    }

    useEffect(
        function () {
            if (status !== 'idle') {
                if (
                    status === 'recording' ||
                    status === 'stopped' ||
                    status === 'stopping' ||
                    status === 'acquiring_media'
                )
                    return openSuccessSnackbar(`common:record.${status}`);
                return openErrorSnackbar(`common:record.${status}`);
            }
        },
        [status],
    );

    useEffect(
        function () {
            if (mediaBlobUrl) {
                // Make upload here
                console.log(mediaBlobUrl);
            }
        },
        [mediaBlobUrl],
    );

    return (
        <>
            <RecordContainer
                onClick={(show === 'record' && stop) || start}
                show={show === 'record'}
                status={status}
            >
                <FontAwesomeIcon icon={faMicrophone} id="text" />
            </RecordContainer>
            {/* {!mediaBlobUrl && <audio src={mediaBlobUrl} controls />} */}
        </>
    );
};
