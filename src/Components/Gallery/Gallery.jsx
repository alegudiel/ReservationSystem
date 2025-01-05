import React, { useState } from 'react';
import './Gallery.css';

// Importar todas las imágenes de la carpeta
const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const imagesXetulul = importAll(require.context('../../Assets/Images/Xetulul', false, /\.(webp|png|jpe?g|svg)$/));
const imagesXocomil = importAll(require.context('../../Assets/Images/Xocomil', false, /\.(webp|png|jpe?g|svg)$/));
const imagesPetapa = importAll(require.context('../../Assets/Images/Petapa', false, /\.(webp|png|jpe?g|svg)$/));

const Gallery = () => {
    const [selectedGallery, setSelectedGallery] = useState('Xetulul');

    const galleries = {
        Xetulul: imagesXetulul,
        Xocomil: imagesXocomil,
        Petapa: imagesPetapa,
    };

    return (
        <div>
            <div className="button-container">
                {Object.keys(galleries).map((galleryName) => (
                    <button key={galleryName} onClick={() => setSelectedGallery(galleryName)}>
                        {galleryName}
                    </button>
                ))}
            </div>
            <div className="gallery">
                {Object.keys(galleries[selectedGallery]).map((key, index) => (
                    <div className="image-container" key={index}>
                        <img src={galleries[selectedGallery][key]} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;