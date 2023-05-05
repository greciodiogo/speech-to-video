import { useApp } from '@app-data';
import { DropZone, RecordButton } from '@components/audio';
import { getTranscript } from '@components/audio/get-transcript';
import { ShowProps } from '@components/audio/types';
import { useSnackbar } from '@hooks/use-snackbar';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

import { StepOneContainer, StepOneWrapper, TextContainer } from './styled';
import { StepOneProps } from './type';

const StepOne: FC<StepOneProps> = ({ setStep }) => {
    const { t } = useTranslation();
    const { openErrorSnackbar } = useSnackbar();
    const {
        audioFile,
        audioType,
        audioVersion,
        audioPublicId,
        setTranscript,
        transcript,
    } = useApp();
    const [show, setShow] = useState<ShowProps>('both');

    useEffect(() => {
        if (audioFile) {
            getTranscript({
                audioUrl: audioFile,
                audioType,
                audioPublicId,
                audioVersion,
                setTranscript,
                openErrorSnackbar,
            });
        }
    }, [audioFile]);

    useEffect(() => {
        if (transcript.length > 0) {
            setStep(2);
        }
    }, [transcript]);

    return (
        <StepOneWrapper>
            <TextContainer>
                <h2>{t`home:step-one.title`}</h2>
                <p>{t`home:step-one.message`}</p>
            </TextContainer>
            <StepOneContainer>
                {(show === 'both' || show === 'drag') && <DropZone />}
                {(show === 'both' || show === 'record') && (
                    <RecordButton setShow={setShow} show={show} />
                )}
            </StepOneContainer>
        </StepOneWrapper>
    );
};

export default StepOne;
