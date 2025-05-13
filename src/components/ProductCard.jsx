import React from 'react';


const ProductCard = ({ product }) => (
  <div className="p-4 border rounded-md shadow-md">
    <img src={product.images} alt={product.title} className="h-50 w-full object-cover" />
    <h3 className="text-lg font-semibold">{product.title}</h3>
    <p className="text-gray-700">${product.price}</p>
    <button className="mt-2 p-2 bg-green-500 text-white rounded">Add to Cart</button>
  </div>
);
export default ProductCard;