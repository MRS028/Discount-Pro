import React, { useEffect, useState } from "react";
import "animate.css";
import slide1 from "../assets/handoffer.jpg";
import slide2 from "../assets/whiteshop.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/darazs.jpg";
import slide5 from "../assets/slider5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");

  const slides = [slide5,slide7,slide6,slide1, slide2, slide3, slide4];

  
  const handleNext = () => {
    setAnimationClass("animate__fadeOut"); 
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); 
      setAnimationClass("animate__fadeIn"); 
    }, 500); 
  };

 
  const handlePrev = () => {
    setAnimationClass("animate__fadeOut");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimationClass("animate__fadeIn");
    }, 500);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to the next slide
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      <div
        className={`flex transition-transform duration-700 ease-in-out animate__animated ${animationClass}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          
            <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="md:w-full h-[420px] rounded-xl  object-cover flex-shrink-0"
          />
          
        ))}
      </div>

     
      <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
        <button
          onClick={handlePrev}
          className="btn btn-circle bg-gray-800 hover:bg-gray-700 text-white"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle bg-gray-800 hover:bg-gray-700 text-white"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slider;
