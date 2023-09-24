import { useState } from "react";
import Button from "../components/Button";
import styles from "./ImageCarousell.module.css";
import image1 from "/images/image-1.jpeg";
import image2 from "/images/image-2.jpeg";
import image3 from "/images/image-3.jpeg";
import image4 from "/images/image-4.jpeg";
import image5 from "/images/image-5.jpeg";

const images = [image1, image2, image3, image4, image5];

function ImageCarousell() {
  const [activeImageId, setActiveImageId] = useState(0);

  function handleInc() {
    if (activeImageId < images.length - 1)
      setActiveImageId((prevId) => prevId + 1);
  }

  function handleDec() {
    if (activeImageId > 0) setActiveImageId((prevId) => prevId - 1);
  }
  return (
    <div className={styles.imageCarousell}>
      <h1>Image Carousell</h1>

      <div className={styles.imageContainer}>
        <Button type="primary" onClick={handleDec}>
          &#8592;
        </Button>
        <img src={images.at(activeImageId)} />
        <Button type="primary" onClick={handleInc}>
          &#8594;
        </Button>
      </div>
    </div>
  );
}

export default ImageCarousell;
