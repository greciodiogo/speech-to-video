import { useApp } from '@app-data';
import Img from '@components/images/img';
import React from 'react';
import { AllSelectedContainer } from './styled';

export const AllSelectedImages: React.FC = () => {
    const { selectedImages, removeImage, remove } = useApp();
    // const [dragId, setDragId] = useState<string>();
    // https://dev.to/colinmcd01/drag-drop-re-ordering-using-html-and-react-974
    // const handleDrag = (e: DragEvent<HTMLImageElement>) => {
    //     // setDragId(e.currentTarget.accessKey);
    //     // console.log(e.currentTarget.accessKey);
    // };
    //https://react-dnd.github.io/react-dnd/examples/sortable/simple
    // const handleDrop = (ev: DragEvent<HTMLImageElement>) => {
    //     // const dragBox = selectedImages.find(({images}, ) => box.id === dragId);
    //     // const dropBox = selectedImages.find(
    //     //     (box) => box.id === ev.currentTarget.id,
    //     // );
    //     // const dragBoxOrder = dragBox.order;
    //     // const dropBoxOrder = dropBox.order;
    //     // const newBoxState = selectedImages.map((box) => {
    //     //     if (box.id === dragId) {
    //     //         box.order = dropBoxOrder;
    //     //     }
    //     //     if (box.id === ev.currentTarget.id) {
    //     //         box.order = dragBoxOrder;
    //     //     }
    //     //     return box;
    //     // });
    //     // setselectedImages(newBoxState);
    // };

    return (
        <AllSelectedContainer>
            {selectedImages.map(({ images, word }) =>
                images.map(({ alt, url }, index) => (
                    <Img
                        // accessKey={`${index}`}
                        // draggable={true}
                        // onDragOver={(ev) => ev.preventDefault()}
                        // onDragStart={handleDrag}
                        // onDrop={handleDrop}
                        url={url}
                        alt={alt}
                        isSelected={true}
                        key={`${word}-${index}`}
                        remove={() => {
                            remove(url);
                            removeImage(word, url);
                        }}
                    />
                )),
            )}
        </AllSelectedContainer>
    );
};
