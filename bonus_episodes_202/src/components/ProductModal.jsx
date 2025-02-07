import React, { useState, useEffect } from "react";

const ProductModal = ({ isOpen, onClose, product }) => {
  const [mainImage, setMainImage] = useState(product ? product.image : '');
  const [selectedFrameSize, setSelectedFrameSize] = useState("");  // Track selected frame size

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  // Handle frame size change
  const handleFrameSizeChange = (e) => {
    setSelectedFrameSize(e.target.value);
  };

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 font-bold text-xl"
        >
          &times;
        </button>
        <div className="flex flex-col lg:flex-row">
          {/* Main Product Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            {/* Thumbnails for product images */}
            <div className="flex gap-4 py-4 justify-center overflow-x-auto mt-4">
              {product.thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => handleThumbnailClick(thumbnail)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 pl-6">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.sku}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">{product.price}</span>
              <span className="text-gray-500 line-through">{product.originalPrice}</span>
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Frame Size Dropdown */}
            <div className="mb-6">
              <label htmlFor="frameSize" className="block text-sm font-medium text-gray-700 mb-1">
                Frame Size:
              </label>
              <select
                id="frameSize"
                name="frameSize"
                value={selectedFrameSize}
                onChange={handleFrameSizeChange}
                className="w-50 border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a frame size</option>
                {product.frameSizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value="1"
                className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Wishlist
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
