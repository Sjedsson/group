import { useState, useEffect } from "react";

import "./Meny.css"
import Coffe from "../Coffe/Coffe";

export default function AllBeans() {
const [allCoffes, setAllCoffes] = useState([]);
  async function fetchAllBeans() {
    const response = await fetch(
      "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/"
    );
    const data = await response.json();
   
    console.log(data.menu);
  }

  const menyComponent = allCoffes.map((item) => {
    return <Coffe coffe={item} key={item.id} title= { item.title} desc= { item.desc} price= {item.price} />;
  });
 

  fetchAllBeans();

  return(
    <section className="meny-section">
     {menyComponent}
    </section>
   


  )
}