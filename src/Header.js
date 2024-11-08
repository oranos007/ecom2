
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header>
      <h1>page e-commerce</h1>
      <nav>
        <Link to="/">products</Link> | <Link to="/cart">cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
