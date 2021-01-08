import React, { useState } from "react";
import AddCategories from "./components/addCategories";
const GiftExpertApp = () => {
  /* const category = ["Naruto", "Akame Ga Kill", "Shingeky no kyojin"]; */
  const [categories, setCategories] = useState([
    "Naruto Shippuden",
    "Akame Ga Kill",
    "Shingeky no kyojin",
  ]);

  /* const handleAdd = (e) => {
    const agregar = "Kimentsu no Yaiba";
    //primer forma de agregar algo al estado
     //setCategories([...categories, agregar]);
    //segunda forma de agregar algo al estado
    setCategories((cat) => [...categories, agregar]);
  }; */
  return (
    <>
      <h2>Gift Expert App</h2>
      <hr />
      <AddCategories />
      <ul>
        {categories.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default GiftExpertApp;
