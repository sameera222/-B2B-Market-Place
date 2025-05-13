import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setImages(data.products.slice(0, 5)))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 flex items-center justify-center">
      {images.length > 0 ? (
        <div className="w-[50%] h-auto flex justify-center items-center">
          <img
            src={images[currentIndex].thumbnail}
            alt={images[currentIndex].title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      ) : (
        <p className="text-white">Loading images...</p>
      )}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 rounded-full shadow-lg"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 rounded-full shadow-lg"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
