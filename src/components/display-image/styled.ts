import styled from 'styled-components';

export const ShowImageContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    #pane {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.2);
        height: 100vh;
        width: 100%;
    }
    #img {
        position: absolute;
        img {
            border-radius: 8px;
        }
    }
    button {
        cursor: pointer;
        border: unset;
        background: unset;
        position: absolute;
        font-size: 40px;
        right: 20px;
        top: 20px;

        &:hover {
            color: red;
            transform: rotate(-45deg);
        }
    }
`;
