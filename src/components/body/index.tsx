import StepOne from '@components/step-one';
import StepThree from '@components/step-three';
import StepTwo from '@components/step-two';
import React, { FC, useState } from 'react';

import { BodyContainer } from './styled';

export const Body: FC = () => {
    const [step, setStep] = useState<number>(1);

    return (
        <BodyContainer>
            {(step === 1 && <StepOne setStep={setStep} />) ||
                (step === 2 && <StepTwo setStep={setStep} />) ||
                (step === 3 && <StepThree setStep={setStep} />)}
        </BodyContainer>
    );
};
