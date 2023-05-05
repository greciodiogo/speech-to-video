import { useApp } from '@app-data';
import { AllSelectedImages } from '@components/all-selected-images';
import { Video } from '@components/video';
import React, { FC } from 'react';
import { AsideLeft, StepThreeContainer, StepThreeWrapper } from './styled';
import { StepThreeProps } from './type';

const StepThree: FC<StepThreeProps> = ({ setStep }) => {
    const { transcript } = useApp();

    return (
        <StepThreeWrapper>
            <StepThreeContainer>
                <AsideLeft>{transcript} lef</AsideLeft>
                <Video />
            </StepThreeContainer>
            <AllSelectedImages />
        </StepThreeWrapper>
    );
};

export default StepThree;
