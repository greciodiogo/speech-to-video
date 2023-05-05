import { DragEvent } from 'react';
import { ImgProps } from '@app-data/type';

export type ExtendedImgProps = ImgProps & {
    add?: () => void;
    remove: () => void;
    accessKey?: string;
    draggable?: boolean;
    onDragOver?: (event: DragEvent<HTMLImageElement>) => void;
    onDragStart?: (event?: DragEvent<HTMLImageElement>) => void;
    onDrop?: (event: DragEvent<HTMLImageElement>) => void;
};
