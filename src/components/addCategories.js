import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategories = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState("");
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [...cat, inputValue]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={inputChange} />
    </form>
  );
};

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
