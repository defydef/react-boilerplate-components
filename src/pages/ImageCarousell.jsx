import { useState } from "react";
import Button from "../components/Button";

const images = [
  "https://images.pexels.com/photos/1151282/pexels-photo-1151282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

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
    <>
      <Button type="primary" onClick={handleDec}>
        &#8592;
      </Button>
      <img src={images.at(activeImageId)} />
      <Button type="primary" onClick={handleInc}>
        &#8594;
      </Button>
    </>
  );
}

export default ImageCarousell;
