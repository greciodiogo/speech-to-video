import styled from 'styled-components';

export const VideoContainer = styled.div`
    /* background-color: ${({ theme }) => theme.colors.background}; */
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: ${({ theme }) => theme.spacing.s};
    }

    #loader {
        border: 16px solid ${({ theme }) => theme.colors.background};
        border-top: 16px solid ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }
    iframe {
        border-radius: ${({ theme }) => theme.borderRadius.s};
        border: unset;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
