export type AppContextProps = {
    audioFile: string;
    selectedImages: SelectedImageProps[];
    videoFile: string;
    transcript: string;
    transcripts: string[];
    currentWord: string;
    newImagesToBeAdded: ImgProps[];
    transcriptsIndex: number;
    imagesToAdd: ImgProps[];
    imagesLength: number;
    audioType: string;
    audioPublicId: string;
    audioVersion: string;
    setAudioType: (type: string) => void;
    setAudioVersion: (version: string) => void;
    setAudioPublicId: (publicId: string) => void;
    setImagesToAdd: (img: ImgProps[]) => void;
    imgExist: (imgUrl: string) => boolean;
    addImages: () => void;
    previousWord: () => void;
    nextWord: () => void;
    loadMoreImages: () => void;
    removeImage: (relatedWord: string, imgUrl: string) => void;
    setAudioFile: (url: string) => void;
    setVideoFile: (url: string) => void;
    setTranscript: (transcript: string) => void;
    setTranscripts: (transcript: string[]) => void;
    handleCurrentWord: (currentWord: string) => void;
    remove: (imgUrl: string) => void;
    setNewImagesToBeAdded: (img: ImgProps[]) => void;
};

export type SelectedImageProps = {
    word: string;
    images: ImgProps[];
};

export type ImgProps = {
    url: string;
    alt: string;
    isSelected?: boolean;
};
