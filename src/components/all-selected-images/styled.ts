import styled from 'styled-components';

export const AllSelectedContainer = styled.div`
    height: 150px;
    white-space: nowrap;
    overflow: auto hidden;
    ${({ theme }) => theme.shadows.default}
    margin-top: ${({ theme }) => theme.spacing.s};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    background-color: ${({ theme }) => theme.colors.primary};

    span {
        img {
            max-width: 140px !important;
        }

        &:first-child {
            button {
                border-bottom-right-radius: 0;
            }
        }
    }
`;
