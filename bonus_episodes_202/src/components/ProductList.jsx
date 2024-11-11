import React, { useState } from "react";
import ProductModal from './ProductModal'; // Import ProductModal



const ProductList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
          id: 1,
          name: "Soft Plushy Cushion Chair",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!",
          price: "$29.99",
          frameSizes: ["8\"x10\"", "11\"x14\"", "16\"x20\""],
          bgColor: "bg-purple-50",
          image: "https://via.placeholder.com/150",
          features: ["Soft fabric", "Comfortable", "Stylish design"],
          thumbnails: [
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50"
          ]
        },
        {
          id: 2,
          name: "Comfortable Wooden Chair",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!",
          price: "$39.99",
          frameSizes: ["8\"x10\"", "11\"x14\"", "16\"x20\""],
          bgColor: "bg-green-50",
          image: "https://via.placeholder.com/150",
          features: ["Natural wood", "Durable", "Comfortable seating"],
          thumbnails: [
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50"
          ]
        },
        {
          id: 3,
          name: "Multipurpose Wooden Trolly",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!",
          price: "$19.99",
          frameSizes: ["8\"x10\"", "11\"x14\"", "16\"x20\""],
          bgColor: "bg-red-50",
          image: "https://via.placeholder.com/150",
          features: ["Multipurpose", "Portable", "Durable"],
          thumbnails: [
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50"
          ]
        },
        {
          id: 4,
          name: "Tool Set",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!",
          price: "$49.99",
          frameSizes: ["8\"x10\"", "11\"x14\"", "16\"x20\""],
          bgColor: "bg-blue-50",
          image: "https://via.placeholder.com/150",
          features: ["Comprehensive", "Durable", "Essential tools"],
          thumbnails: [
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50",
            "https://via.placeholder.com/50"
          ]
        },
      ];

  // Handle when a product is clicked to open the modal
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className={`p-5 py-10 ${product.bgColor} text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-lg shadow-lg`}
            onClick={() => handleProductClick(product)}
          >
            <div className="h-48 flex items-center justify-center mb-4">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full" />
            </div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <h2 className="text-lg font-semibold">{product.price}</h2>
          </div>
        ))}
      </section>


      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen} // Ensure isOpen is passed as true
        onClose={handleCloseModal}
        product={selectedProduct} // Pass the selected product to the modal
      />
    </section>
  );
};

export default ProductList;
