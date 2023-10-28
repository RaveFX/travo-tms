// src/components/PhotoGallery.js

import React, { useState } from 'react';

const PhotoGallery = ({ photos }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedPhotos = showAll ? photos : photos.slice(0, 3);

  return (
    <div className="grid grid-cols-3 gap-4">
      {displayedPhotos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          className="rounded-lg"
        />
      ))}
      {!showAll && photos.length > 3 && (
        <button
          onClick={() => setShowAll(true)}
          className="col-span-3 text-center py-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer"
        >
          View More Photos
        </button>
      )}
    </div>
  );
};

export default PhotoGallery;
