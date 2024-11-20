'use client';

import styles from './ImagePicker.module.css';
import {useRef, useState} from 'react';
import Image from 'next/image';

const ImagePicker = ({label, name}) => {
  const [pickedImage, setPickedImage] = useState(null);
  const inputRef = useRef();

  const handlePickClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <div className={styles.picker}>
        <label htmlFor="image">{label}</label>
        <div className={styles.controls}>
          <div className={styles.preview}>
            {!pickedImage && <p>No image picked yet</p>}
            {pickedImage && <Image src={pickedImage} alt="the image selected by the user" fill/> }
          </div>

          <input
            className={styles.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={inputRef}
            onChange={handleImageChange}
            required
          />

          <button
            className={styles.button}
            type="button"
            onClick={handlePickClick}
          >
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
};

export default ImagePicker;
