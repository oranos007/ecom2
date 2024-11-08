import React from 'react';

function Cart({ cart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>cart</h1>
      {cart.length === 0 ? (
        <p>Votre cart est vide.</p>
      ) : (
        <>
        <div className="cartitems">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Quantité : <b>{item.quantity}</b></p>
              <p>Prix : <b>{item.price}Dh</b></p>
            </div>
          ))}
          <br/>
         
        </div>
         <h3 id='tt'>Total : {totalPrice}Dh</h3>
         </>
      )}
    </div>
  );
}

export default Cart;
