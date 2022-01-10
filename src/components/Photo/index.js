import { useState } from 'react';
import uuid from 'react-uuid';

import PhotoInputForm from './PhotoInputForm';
import PhotoPreviewBlock from './PhotoPreviewBlock';

import './main.css';


const Photo = () => {

    // PHOTOS - массив загруженных файлов:
    // { id: uuid,
    //   name: имя файла
    //   url: ссылка на фото (или само содержимое)
    // }
    const [photos, setPhotos] = useState([]);

    // PARAMS: массив URL-ов загруженных файлов
    function addPhoto(items) {
        let newPhotos = [];
        items.forEach((v) => newPhotos.push({
            id: uuid(),
            ...v
        }));

        //console.log(newPhotos);
        setPhotos((prev) => [...prev, ...newPhotos]);
    }

    function delPhoto(photoID) {
        //console.log("del - " + photoID);
        setPhotos((prev) => prev.filter((v) => v.id !== photoID));
    }


    return (
        <div>
            <h1>Менеджер фото</h1>
            <h3>Компонент Photo</h3>
            <div className="photo-container">
                <PhotoInputForm
                    handleSubmit={addPhoto}
                />
            </div>
            <PhotoPreviewBlock
                items={photos}
                handleDel={delPhoto}
            />
        </div>
    )
};


export default Photo;