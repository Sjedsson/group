import { useState, useEffect } from "react";

import "./Meny.css";
import Coffe from "../Coffe/Coffe";
import Footer from "../Footer/Footer";

export default function Meny() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchAllBeans() {
      const response = await fetch(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/"
      );
      const data = await response.json();
      console.log(data.menu);
      setMenu(data.menu);
    }

    fetchAllBeans();
  }, []);

  const menyComponent = menu.map((item, i) => {
    return (
      <Coffe
        key={i}
        title={item.title}
        desc={item.desc}
        price={item.price}
      />
    );
  });

  return (
    <section className="meny-container">
      

      <div className="meny">{menyComponent}</div>
      <Footer/>
    </section>
  );
}
