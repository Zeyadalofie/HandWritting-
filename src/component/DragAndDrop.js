import React, { useState } from 'react';

const DragAndDrop = ({ processImage }) => {
  const [image, setImage] = useState(null);

  // Function to handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      setImage(URL.createObjectURL(file)); // Show preview
      processImage(file); // Call the function to process the image
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: '2px dashed #aaa',
        padding: '20px',
        width: '300px',
        height: '200px',
        textAlign: 'center',
        margin: '20px auto',
      }}
    >
      {image ? (
        <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      ) : (
        <p>Drag & drop an image here</p>
      )}
    </div>
  );
};

export default DragAndDrop;
