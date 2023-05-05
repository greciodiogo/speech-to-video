import { StatusMessages } from 'react-media-recorder';
import styled from 'styled-components';

type RecordContainerProps = {
    show: boolean;
    status: StatusMessages;
};

export const RecordContainer = styled.button<RecordContainerProps>`
    cursor: pointer;
    width: 96px;
    height: 96px;
    border: none;
    border-radius: 100%;
    background-color: red;
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    text-align: center;

    &:hover {
        opacity: 0.8;
    }

    ${({ show }) => {
        if (show) {
            return `animation: move-rl 1s;`;
        }
    }}

    ${({ status }) => {
        if (status === 'recording') {
            return `animation: recording 1.2s infinite;`;
        }
    }}

    @keyframes move-rl {
        0% {
            margin-left: calc(50% - 48px);
        }
    }

    @keyframes recording {
        0% {
            border: 10px solid black;
        }
        25% {
            border: 20px solid black;
        }
        50% {
            border: 30px solid black;
        }
        75% {
            border: 40px solid black;
        }
        100% {
            border: 50px solid black;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: 20px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 100px;
        height: 100px;
        margin-left: -50px;
    }
`;
