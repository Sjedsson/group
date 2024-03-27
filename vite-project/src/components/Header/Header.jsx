import React from 'react';

function Header( { amount, placeOrder,}) {
  return (
    <header>
      <nav>
        <a href="#" onClick={placeOrder}>Cart ({amount})</a>
      </nav>
    </header>
  );
}

export default Header;