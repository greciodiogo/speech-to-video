import styled from 'styled-components';

export const StepOneWrapper = styled.div`
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.m}`};
    text-align: center;
`;

export const StepOneContainer = styled.div`
    margin-top: ${({ theme }) => theme.spacing.xl};
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;

export const TextContainer = styled.div``;
