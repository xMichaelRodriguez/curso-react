import React, { useState } from "react";
import { AddCategories } from "./components/addCategories";
import { GiftGrid } from "./components/gift-Grid";
const GiftExpertApp = () => {
  /* const category = ["Naruto", "Akame Ga Kill", "Shingeky no kyojin"]; */
  const [categories, setCategories] = useState(["Naruto Shippuden"]);

  /* const handleAdd = (e) => {
    
    //primer forma de agregar algo al estado
     //setCategories([...categories, agregar]);
    //segunda forma de agregar algo al estado
    setCategories((cat) => [...categories, e.target.value]);
  }; */
  return (
    <>
      <h2>Gift Expert App</h2>
      <AddCategories setCategories={setCategories} />
     
      <ul>
        {categories.map((item) => (
          <GiftGrid key={item} categories={item}/>
        ))}
      </ul>
    </>
  );
};

export default GiftExpertApp;
