import { useApp } from '@app-data';
import { useSnackbar } from '@hooks/use-snackbar';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useCallback } from 'react';
import { useDropzone as useDropZone } from 'react-dropzone';

import { uploadFile } from '../upload';

import { DropZoneContainer } from './styled';

export const DropZone: FC = () => {
    const { t } = useTranslation();
    const { openErrorSnackbar } = useSnackbar();
    const { setAudioPublicId, setAudioFile, setAudioType, setAudioVersion } =
        useApp();

    const successUpload = (data) => {
        // console.log(data);
        setAudioVersion(data.version);
        setAudioFile(data.url);
        setAudioPublicId(data['public_id']);
    };

    const onDrop = useCallback((acceptedFile) => {
        const { type } = acceptedFile[0];
        setAudioType(type);
        uploadFile(acceptedFile[0], successUpload, openErrorSnackbar);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropZone({
        onDrop,
        maxFiles: 1,
        accept: '.mp3',
    });

    return (
        <DropZoneContainer {...getRootProps()} isDragActive={isDragActive}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>{t`home:step-one.drag-n-drop.active`}</p>
            ) : (
                <p>{t`home:step-one.drag-n-drop.inactive`}</p>
            )}
        </DropZoneContainer>
    );
};
