import React from 'react';
import Product from './Product';
import blue from './blue.jpg';
import tomatoes from './tomatoes.jpg';
import grenade from './grenade.jpg';


const products = [
  { id: 1, name: "blueberry", price: 120, image:blue, description: "fresh blueberry." },
  { id: 2, name: "tomatoes", price: 10, image:tomatoes, description: "healthy tomatoes." },
  { id: 3, name: "grenade", price: 20, image:grenade, description: "red grenade." },
  { id: 4, name: "grenade", price: 20, image:grenade, description: "red grenade." },
  { id: 5, name: "grenade", price: 20, image:grenade, description: "red grenade." },
  { id: 6, name: "grenade", price: 20, image:grenade, description: "red grenade." },
  { id: 7, name: "grenade", price: 20, image:grenade, description: "red grenade." },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
