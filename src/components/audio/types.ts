export type ShowProps = 'both' | 'record' | 'drag';

export type AudioProps = {
    setShow: (show: ShowProps) => void;
    show: ShowProps;
};

export type GetTranscriptType = {
    audioType: string;
    audioPublicId: string;
    openErrorSnackbar: (path: string) => void;
    setTranscript: (transcript: string) => void;
};
