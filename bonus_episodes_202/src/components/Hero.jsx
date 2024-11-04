import React, { useState, useEffect } from 'react';
import image1 from '../assets/1.jpg'; // First slide image
import image2 from '../assets/2.jpg'; // Second slide image
import image3 from '../assets/3.jpg'; // Third slide image
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Example headline",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, enim suscipit fuga voluptatum eveniet, facere et numquam nihil deserunt non nulla porro blanditiis perspiciatis? Suscipit, praesentium. Facilis deserunt ducimus accusantium!",
      buttonText: "Sign up today",
      img: image1, 
    },
    {
      id: 2,
      title: "Another example headline",
      description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, enim suscipit fuga voluptatum eveniet, facere et numquam nihil deserunt non nulla porro blanditiis perspiciatis? Suscipit, praesentium. Facilis deserunt ducimus accusantium!",
      buttonText: "Learn more",
      img: image2, 
    },
    {
      id: 3,
      title: "One more for good measure",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, enim suscipit fuga voluptatum eveniet, facere et numquam nihil deserunt non nulla porro blanditiis perspiciatis? Suscipit, praesentium. Facilis deserunt ducimus accusantium!",
      buttonText: "Browse gallery",
      img: image3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Automatically slide every 10 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero">
    <div className="mt-10 relative w-full overflow-hidden bg-ivory">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[500px] object-cover" // `object-cover` sets a constant height
            />
            <div className="absolute inset-0  bg-sage bg-opacity-50 flex flex-col justify-center items-baseline p-4 ml-8 mr-8">
              <h1 className="text-4xl font-bold font-fligen text-terracotta">{slide.title}</h1>
              <p className="text-lg text-black mt-4 ml-10 mr-10 font-yeseva ">{slide.description}</p>
              <Link to="/products" className="mt-4 inline-block bg-terracotta text-white font-bold px-4 py-2 rounded">{slide.buttonText}</Link>
             
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-sand p-2 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-sand p-2 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    </section>
  );
};

export default Hero;
