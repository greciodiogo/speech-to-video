import { useApp } from '@app-data';
import { ImgProps } from '@app-data/type';
import { KEYS } from '@constants';
import {
    faChevronLeft,
    faChevronRight,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSnackbar } from '@hooks/use-snackbar';
import useTranslation from 'next-translate/useTranslation';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { CurrentWordContainer, PreviousNextWordBtn } from './styled';

const CurrentWord: FC = () => {
    const {
        currentWord,
        previousWord,
        nextWord,
        imgExist,
        setImagesToAdd,
        setNewImagesToBeAdded,
        transcriptsIndex,
        transcripts,
        imagesLength,
    } = useApp();
    const { openErrorSnackbar } = useSnackbar();
    const { t } = useTranslation();
    const [wordToSearch, setWordToSearch] = useState<string>('');

    const getImages = async () => {
        setNewImagesToBeAdded([]);
        try {
            const res = await fetch(
                `${KEYS.localhost}${wordToSearch}&${imagesLength}`,
            );
            const images = await res.json();
            if (images) {
                const aux: ImgProps[] = [];
                images.map((img) => {
                    aux.push({
                        alt: img?.title,
                        url: img?.url,
                        isSelected: imgExist(img.url),
                    });
                });
                setImagesToAdd([...aux]);
            }
        } catch (error) {
            openErrorSnackbar(t`common:errors.something-wrong`);
        }
    };

    useEffect(() => {
        setWordToSearch(currentWord);
    }, [currentWord]);

    const handleWordToSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setWordToSearch(event.target.value);
    };

    return (
        <CurrentWordContainer>
            <PreviousNextWordBtn
                onClick={previousWord}
                disabled={transcriptsIndex === 0 || transcripts.length === 0}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </PreviousNextWordBtn>
            {currentWord.toLowerCase() !== wordToSearch.toLowerCase() &&
                wordToSearch !== '' && <span>{currentWord} : </span>}
            <input value={wordToSearch} onChange={handleWordToSearch} />
            <PreviousNextWordBtn
                onClick={getImages}
                disabled={currentWord === '' || currentWord === undefined}
            >
                <FontAwesomeIcon icon={faSearch} />
            </PreviousNextWordBtn>
            <PreviousNextWordBtn
                onClick={nextWord}
                disabled={
                    transcriptsIndex === transcripts.length - 1 ||
                    transcripts.length <= 1
                }
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </PreviousNextWordBtn>
        </CurrentWordContainer>
    );
};

export default CurrentWord;
