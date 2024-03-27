import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Coffe from './components/Coffe/Coffe';

function App() {
  const [menu, setMenu] = useState([]);
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);

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
      amount={amount}
    />
  ));

  return (
    <main>
      <Header amount={amount} />
      <section>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          coffeeComponents.length > 0 ? coffeeComponents : <p>No products available</p>
        )}
      </section>
    </main>
  );
}

export default App;
