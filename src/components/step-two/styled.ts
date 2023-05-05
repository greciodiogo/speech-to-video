import styled from 'styled-components';

export const StepTwoWrapper = styled.div`
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.m}`};
    flex: 1;

    div div div,
    div div:first-child,
    div div:last-child,
    textarea {
        border-radius: ${({ theme }) => theme.borderRadius.s};
        ${({ theme }) => theme.shadows.default}
    }
`;

export const StepTwoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;

    textarea {
        outline: none;
        resize: none;
        border: unset;
        margin-top: ${({ theme }) => theme.spacing.s};
        padding: ${({ theme }) => theme.spacing.s};
        width: 100%;
        height: calc(480px + ${({ theme }) => theme.spacing.m});
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
        textarea {
            height: 300px;
        }
    }
`;

export const StepTwoAsideLeft = styled.aside`
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex: 0.6;
        margin-right: ${({ theme }) => theme.spacing.m};
    }
`;

export const CurrentWordContainer = styled.div`
    display: flex;
    min-height: 40px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};

    span {
        color: ${({ theme }) => theme.colors.white};
        font-size: inherit;
        font-weight: bold;
        margin-left: ${({ theme }) => theme.spacing.s};
    }

    input {
        flex: 1;
        text-align: center;
        background-color: ${({ theme }) => theme.colors.white};
        border: unset;
        border-radius: ${({ theme }) => theme.borderRadius.s};
        margin: 0 ${({ theme }) => theme.spacing.s};
        padding: ${({ theme }) => theme.spacing.xs};
        outline: none;
    }
`;

export const PreviousNextWordBtn = styled.button`
    align-self: stretch;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.spacing.s};
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border: unset;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.p};
    &:disabled {
        background-color: gray;
        opacity: 0.8;
    }
    &:hover {
        opacity: 0.8;
    }

    &:first-child {
        border-top-left-radius: ${({ theme }) => theme.borderRadius.s};
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius.s};
    }

    &:last-child {
        border-top-right-radius: ${({ theme }) => theme.borderRadius.s};
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius.s};
    }
`;

export const TransformBtn = styled.button`
    position: fixed;
    bottom: ${({ theme }) => theme.spacing.m};
    right: ${({ theme }) => theme.spacing.m};
    padding: ${({ theme }) => theme.spacing.s};
    border: unset;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    &:hover {
        opacity: 0.8;
    }
`;
