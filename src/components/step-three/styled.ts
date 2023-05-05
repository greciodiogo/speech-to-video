import styled from 'styled-components';

export const StepThreeWrapper = styled.div`
    flex: 1;
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.m}`};
`;

export const StepThreeContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;

    & > aside,
    & > div {
        border-radius: ${({ theme }) => theme.borderRadius.s};
        ${({ theme }) => theme.shadows.default};
        height: 400px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
        aside {
            min-height: 300px;
            max-height: 300px;
        }
    }
`;

export const AsideLeft = styled.aside`
    padding: ${({ theme }) => theme.spacing.s};
    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex: 0.6;
        margin-right: ${({ theme }) => theme.spacing.m};
    }
`;
