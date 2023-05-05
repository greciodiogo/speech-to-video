import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createRef, FC, useEffect } from 'react';

import { ShowImageContainer } from './styled';

const ref = createRef<HTMLDivElement>();
const imgRef = createRef<HTMLImageElement>();

const closeImageRef = () => {
    if (ref) {
        ref.current.style.display = 'none';
    }
    if (imgRef) {
        imgRef.current.src = '';
    }
};

export const useDisplayImage = () => {
    const showImage = (src: string) => {
        if (ref.current) {
            ref.current.style.display = 'flex';
            imgRef.current.src = src;
        }
    };

    return {
        showImage,
        closeImage: closeImageRef,
    };
};

export const DisplayImage: FC = ({ children }) => {
    useEffect(() => {
        if (ref && imgRef) {
            closeImageRef();
        }
    }, []);

    return (
        <div>
            {children}
            <ShowImageContainer ref={ref}>
                <div id="pane" onClick={closeImageRef} />
                <div id="img">
                    <img ref={imgRef} />
                </div>
                <button onClick={closeImageRef}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </ShowImageContainer>
        </div>
    );
};
