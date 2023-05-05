import styled from 'styled-components';

export const WordRelatedImagesContainer = styled.div`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: ${({ theme }) => `0 0 ${theme.spacing.s} ${theme.spacing.s}`};
    justify-content: space-evenly;
    height: 560px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: ${({ theme }) => theme.spacing.m};
        height: 300px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
        align-self: stretch;
    }

    span {
        margin: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.s} 0 0`};
    }

    img {
        height: 150px;
        border-radius: ${({ theme }) => theme.borderRadius.s};
        width: 150px;
    }

    #img-remove {
        border: 5px solid ${({ theme }) => theme.colors.primary};
    }

    #load-more,
    #add-images {
        cursor: pointer;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.success};
        color: ${({ theme }) => theme.colors.white};
        border: unset;
        padding: ${({ theme }) => theme.spacing.s};
        text-align: center;
        font-size: 15px;
        ${({ theme }) => theme.shadows.default};
        margin: ${({ theme }) => `${theme.spacing.s} 0 0 0`};
        border-radius: ${({ theme }) => theme.borderRadius.s};
        &:hover {
            opacity: 0.8;
        }
    }
    #load-more {
        right: ${({ theme }) => theme.spacing.xl};
        span {
            color: red;
        }
    }
`;

export const ImgContainer = styled.span`
    position: relative;
    height: 150px;

    img {
        height: 150px;
        width: 100%;
    }
    button {
        display: none;
        cursor: pointer;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        border: unset;
        background-color: ${({ theme }) => theme.colors.primary};
        opacity: 0.8;
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius.s};
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius.s};
        font-size: inherit;
        padding: ${({ theme }) => theme.spacing.s};
        color: inherit;

        &:hover {
            opacity: 0.6;
        }
    }

    img:hover {
        cursor: pointer;
        opacity: 0.8;
    }
    &:hover {
        button {
            display: block;
            /* transition: ; */
        }
    }
`;
