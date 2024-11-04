import React from 'react';

const Promo = () => {
  return (
    <section id="promo">
    <div className="p-1 flex flex-wrap items-center justify-center mt-10">
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-sage bg-opacity-40 rounded-lg max-w-xs shadow-lg group">
        <svg
          className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
          viewBox="0 0 375 283"
          fill="none"
          style={{ opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div
            className="absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img
            className="relative w-40"
            src="https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6 font-fligen">
          <span className="opacity-75 -mb-1 font-playfair text-black">Indoor</span>
          <div className="flex justify-between">
            <span className=" font-semibold text-xl font-playfair text-black">Peace Lily</span>
            <span className=" bg-white rounded-full text-terracotta text-xs font-bold px-3 py-2 leading-none flex items-center">
            ₹750.00
            </span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-burntOrange bg-opacity-40 rounded-lg max-w-xs shadow-lg group">
        <svg
          className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
          viewBox="0 0 375 283"
          fill="none"
          style={{ opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div
            className="absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img
            className="relative w-40"
            src="https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6 font-fligen">
          <span className="opacity-75 -mb-1 font-playfair text-black">Indoor</span>
          <div className="flex justify-between">
            <span className=" font-semibold text-xl font-playfair text-black">African Lily</span>
            <span className=" bg-white rounded-full text-terracotta text-xs font-bold px-3 py-2 leading-none flex items-center">
            ₹460.00
            </span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-oliveGreen bg-opacity-40 rounded-lg max-w-xs shadow-lg group">
        <svg
          className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
          viewBox="0 0 375 283"
          fill="none"
          style={{ opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div
            className="absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img
            className="relative w-40"
            src="https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6 font-fligen">
          <span className="opacity-75 -mb-1 font-playfair text-black">Outdoor</span>
          <div className="flex justify-between">
            <span className=" font-semibold text-xl font-playfair text-black">Roses</span>
            <span className=" bg-white rounded-full text-terracotta text-xs font-bold px-3 py-2 leading-none flex items-center">
            ₹300.00
            </span>
          </div>
        </div>
      </div>
      </div>
      </section>
  );
};

export default Promo;
