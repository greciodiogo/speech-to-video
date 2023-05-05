import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 80px 0;
`;

export const MainContainer = styled.div`
    text-align: center;
    display: flex;
    padding: 0 40px;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding: 0 10px;
        flex-direction: row;
        justify-content: space-evenly;
        img {
            flex: 1;
        }
        div {
            flex: 0.4;
        }
    }
`;

export const TextContainer = styled.div`
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding-right: 16px;
        text-align: left;
    }
    h1 {
        padding-bottom: 0.75rem;
        line-height: 1.2;
        margin-bottom: 0.5em;
        margin-top: 0;

        span {
            color: ${({ theme }) => theme.colors.primary};
            font-weight: bold;
        }
    }
    p {
        font-weight: 300;
    }
`;
