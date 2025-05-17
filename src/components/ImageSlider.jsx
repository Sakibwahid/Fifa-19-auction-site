import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/Messi.jpg",
  "/CR7.webp",
  "/Neymar.webp",
  "/Ramos.jpg",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        />
      ))}
    </>
  );
};

export default ImageSlider;