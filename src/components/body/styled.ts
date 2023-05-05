import styled from 'styled-components';

export const BodyContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: ${({ theme }) => theme.spacing.xl};
`;
