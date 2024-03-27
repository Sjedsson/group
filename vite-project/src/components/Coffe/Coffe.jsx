import React from 'react';

function Coffe(props) {
  const handleClick = () => {
    // Call setAmount function with the updated amount
    props.setAmount(prevAmount => prevAmount + 1);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.price} kr</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default Coffe;