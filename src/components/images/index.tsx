import { useApp } from '@app-data';
import { ImgProps } from '@app-data/type';
import { faSpinner, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import Img from './img';

import { WordRelatedImagesContainer } from './styled';

export const HandleImages: FC = () => {
    const {
        currentWord,
        newImagesToBeAdded,
        imgExist,
        setNewImagesToBeAdded,
        addImages,
        remove,
        imagesToAdd,
        loadMoreImages,
    } = useApp();
    const { t } = useTranslation();

    const select = (img: ImgProps) => {
        const tmpArr: ImgProps[] = [...newImagesToBeAdded];
        tmpArr.push(img);
        setNewImagesToBeAdded([...tmpArr]);
    };

    return (
        <WordRelatedImagesContainer id="word-related-images">
            {imagesToAdd.map(({ url, alt }, index) => (
                <Img
                    url={url}
                    alt={alt}
                    isSelected={imgExist(url)}
                    key={`${currentWord}-${index}`}
                    remove={() => remove(url)}
                    add={() => select({ alt, url, isSelected: true })}
                />
            ))}
            {imagesToAdd.length > 0 && (
                <>
                    <button
                        onClick={addImages}
                        id="add-images"
                    >{t`home:step-two.labels.add-images`}</button>

                    <button onClick={loadMoreImages} id="load-more">
                        <FontAwesomeIcon icon={faSync} /> Load more images
                    </button>
                </>
            )}
        </WordRelatedImagesContainer>
    );
};
