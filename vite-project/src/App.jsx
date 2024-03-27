import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Coffe from './components/Coffe/Coffe';

function App() {
  const [menu, setMenu] = useState([]);
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch('https://airbean-9pcyw.ondigitalocean.app/api/beans');
        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }
        const data = await response.json();
        console.log('API Response:', data);
        setMenu(data.menu);
      } catch (error) {
        console.error('Error fetching menu:', error);
        setError(error.message);
      }
    }

    fetchMenu();
  }, []);

  const coffeeComponents = menu.map(item => (
    <Coffe 
      title={item.title} 
      description={item.desc} 
      price={item.price} 
      key={item.id}
      setAmount={setAmount} 
    />
  ));

  const placeOrder = async () => {
    try {
      const response = await fetch('https://airbean-9pcyw.ondigitalocean.app/api/beans/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          details: {
            order: menu.map(item => ({
              name: item.title,
              price: item.price
            }))
          }
        })
      });
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
      const data = await response.json();
      console.log('Order placed:', data);
      setOrderSuccess(data);
    } catch (error) {
      console.error('Error placing order:', error);
      setError(error.message);
    }
  };

  return (
    <main>
      <Header amount={amount} placeOrder={placeOrder} />
      <section>
        {error ? (
          <p>Error: {error}</p>
        ) : orderSuccess ? (
          <div>
            <p>Order placed successfully! Order number: {orderSuccess.orderNr}</p>
            {/* Check if order details exist before rendering */}
            {orderSuccess.details && orderSuccess.details.order ? (
              <ul>
                {orderSuccess.details.order.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            ) : <p>No order details available</p>}
          </div>
        ) : (
          coffeeComponents.length > 0 ? coffeeComponents : <p>No products available</p>
        )}
      </section>
    </main>
  );
}

export default App;