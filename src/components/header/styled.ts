import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 26px 112px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    a {
        border: unset;
        background: unset;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    h2 {
        margin-left: 16px;
        text-align: center;
        color: ${({ theme }) => theme.colors.primary};
    }
`;
