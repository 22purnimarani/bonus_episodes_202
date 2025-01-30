import React, { useState } from "react";
import ShoppingCartSidebar from './ShoppingCartSidebar'; // Import the ShoppingCartSidebar component

const ProductList = () => {
  const [cart, setCart] = useState([]); // State to manage cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility

  const products = [
    {
      id: 1, // Added a unique id for this product
      name: 'Peace Lily',
      sku: 'PL123',
      price: '₹750.00',
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
      id: 2, // Added a unique id for this product
      name: 'African Lily',
      sku: 'AL456',
      price: '₹460.00',
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
      id: 3, // Added a unique id for this product
      name: 'Roses',
      sku: 'RS789',
      price: '₹300.00',
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
    {
      id: 4, // Ensure this product also has an ID
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

  // Add product to cart
  const parsePrice = (priceString) => {
    // Remove the currency symbol (₹ or $) and parse the number
    return parseFloat(priceString.replace(/[^\d.-]/g, ''));
  };

  const handleAddToCart = (product) => {
    const price = parsePrice(product.price); // Convert price to number
    setCart((prevCart) => [...prevCart, { ...product, price, quantity: 1 }]); // Add product to cart with quantity 1
    setIsCartOpen(true); // Open the cart sidebar
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId); // Remove item based on ID
      // Close the cart if it is empty
      if (updatedCart.length === 0) {
        setIsCartOpen(false);
      }
      return updatedCart;
    });
  };

  const handleCloseCart = () => {
    setIsCartOpen(false); // Close the cart sidebar
  };

  return (
    <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className={`p-5 py-10 ${product.bgColor} text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-lg shadow-lg`}
          >
            <div className="h-48 flex items-center justify-center mb-4">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full" />
            </div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <h2 className="text-lg font-semibold">{product.price}</h2>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <ShoppingCartSidebar
        cart={cart}
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        onRemove={handleRemoveFromCart} // Pass the remove handler
      />
    </section>
  );
};

export default ProductList;
