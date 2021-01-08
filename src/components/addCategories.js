import React, { useState } from "react";

const AddCategories = () => {
  const [inputValue, setInputValue] = useState("Hola Mundo");
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue)
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{inputValue}</h2>
      <input type="text" value={inputValue} onChange={inputChange} />
    </form>
  );
};

export default AddCategories;
