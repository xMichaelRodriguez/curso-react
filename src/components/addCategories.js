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
      setCategories((cat) => [inputValue, ...cat]);
      e.target.reset()
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <input type="text"  onChange={inputChange} />
          <label forof="text">Name of gift</label>
        </div>
      </div>
    </form>
  );
};

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
