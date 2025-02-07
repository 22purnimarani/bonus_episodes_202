import React, { useState } from 'react'
import ProductModal from './ProductModal';

const FeaturedProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: 'Peace Lily',
      sku: 'PL123',
      price: '₹750.00',
      frameSizes: ["8\"x10\"", "11\"x14\"", "16\"x20\""],
      originalPrice: '₹999.00',
      image: 'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
      description: 'A beautiful indoor plant that purifies the air.',
      colors: ['#000000', '#d1d1d1', '#3498db'],
      features: ['Low maintenance', 'Purifies air', 'Beautiful foliage'],
      thumbnails: [
        'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
      ],
    },
    {
      name: 'African Lily',
      sku: 'AL456',
      price: '₹460.00',
      frameSizes: ["8\"x10\"", "11\"x14\"", "16\"x20\""],
      originalPrice: '₹600.00',
      image: 'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
      description: 'An elegant outdoor plant that blooms year-round.',
      colors: ['#000000', '#d1d1d1', '#f39c12'],
      features: ['Full sun', 'Year-round blooms', 'Low maintenance'],
      thumbnails: [
        'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
      ],
    },
    {
      name: 'Roses',
      sku: 'RS789',
      price: '₹300.00',
      frameSizes: ["8\"x10\"", "11\"x14\"", "16\"x20\""],
      originalPrice: '₹400.00',
      image: 'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
      description: 'Classic outdoor flowers that add color to your garden.',
      colors: ['#e74c3c', '#d1d1d1', '#2ecc71'],
      features: ['Fragrant', 'Low maintenance', 'Perfect for gardens'],
      thumbnails: [
        'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP._PAjAM0JPBGZrIOkruprrgAAAA?rs=1&pid=ImgDetMain',
      ],
    },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="promo">
      <div className="p-1 flex flex-wrap items-center justify-center mt-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 m-6 relative overflow-hidden bg-sage bg-opacity-40 rounded-lg max-w-xs shadow-lg group"
            onClick={() => handleCardClick(product)}
          >
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
                  background: 'radial-gradient(black, transparent 60%)',
                  transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                  opacity: 0.2,
                }}
              ></div>
              <img
                className="relative w-40"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6 font-fligen">
              <span className="opacity-75 -mb-1 font-playfair text-black">Indoor</span>
              <div className="flex justify-between">
                <span className="font-semibold text-xl font-playfair text-black">
                  {product.name}
                </span>
                <span className="bg-white rounded-full text-terracotta text-xs font-bold px-3 py-2 leading-none flex items-center">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default FeaturedProduct;
