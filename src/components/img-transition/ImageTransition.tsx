import React, { useState, useEffect } from "react";
import "./ImageTransition.css";
import { getImgUrl } from "@/data/functions";

interface ImageTransitionProps {
  images: string[];
}

const ImageTransition: React.FC<ImageTransitionProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-container h-94 ml-4 w-[540px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image ${currentImageIndex === index ? "active" : ""}`}
          style={{
            backgroundImage: `url(${getImgUrl(image)})`,
          }}
        />
      ))}
    </div>
  );
};

export default ImageTransition;
