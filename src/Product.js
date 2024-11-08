import React from 'react';

function Product({ product, addToCart }) {
  return (
    
    <div className="product">
      <img src={product.image} alt={product.name} width={200} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}Dh</p>
      <button onClick={() => addToCart(product)}>Ajouter au cart</button>
    </div>
  );
}

export default Product;
