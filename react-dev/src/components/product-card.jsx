import React from 'react';

const ProductCard = () => {
  const product = {
    name: 'Awesome Product',
    price: '$20',
    description: 'This is a short description of the product.',
    imageUrl:
      'https://via.placeholder.com/150', // Add a product image URL here
    rating: 4.5,
    reviews: 45,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="mt-2 text-lg font-bold text-gray-900">{product.price}</div>
        <div className="mt-2 flex items-center">
          <div className="text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <p className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</p>
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;