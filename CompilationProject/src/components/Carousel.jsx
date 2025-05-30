import { useEffect, useState, useRef } from "react";
import "./Carousel.css"; 
const DATA_LENGTH = 10; // Number of images

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const ref = useRef(null);

  // Generate image URLs using seed
  useEffect(() => {
    const newImages = Array.from({ length: DATA_LENGTH }, (_, i) => ({
      id: i,
      url: `https://picsum.photos/seed/${i + 1}/800/400`,
    }));
    setImages(newImages);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev === DATA_LENGTH - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? DATA_LENGTH - 1 : prev - 1));
  };

  // Fixed interval with functional setState to avoid stale closure
  useEffect(() => {
    ref.current = setInterval(() => {
      setIndex((prev) => (prev === DATA_LENGTH - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(ref.current);
  }, []);

  if (images.length === 0) return <div className="loading">Loading...</div>;

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => {
        ref.current = setInterval(() => {
          setIndex((prev) => (prev === DATA_LENGTH - 1 ? 0 : prev + 1));
        }, 3000);
      }}
    >
      <div className="btn left-btn" onClick={handlePrev}>
        &#10094;
      </div>

      <img src={images[index].url} alt={`Slide ${index}`} />

      <div className="btn right-btn" onClick={handleNext}>
        &#10095;
      </div>

      <div className="dots-container">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
