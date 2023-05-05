import styled from 'styled-components';
import { DropZoneContainerProps } from './type';

export const DropZoneContainer = styled.div<DropZoneContainerProps>`
    min-height: 80px;
    border: 2px dashed ${({ theme }) => theme.colors.primary};
    border-radius: 50px;
    padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.m}`};

    &:hover {
        border-style: solid;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding-right: calc(50px + ${({ theme }) => theme.spacing.m});
        border-top-right-radius: unset;
        border-bottom-right-radius: unset;
        border-right: unset;
    }
`;
