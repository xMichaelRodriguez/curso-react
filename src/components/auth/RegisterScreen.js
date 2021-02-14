import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
export const RegisterScreen = () => {
  const [formValue, handleInputChange] = useForm({
    displayName: "michael",
    email: "scott@gmail.com",
    password: "123456",
  });

  const { displayName, email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    isFormValid() && console.log("Form ok");
  };

  const isFormValid = () => {
    if (displayName.trim().length === 0) {
      console.log("name is required");
      return false;
    }
    if (!validator.isEmail(email)) {
      console.log("Email is not valid");
      return false;
    }

    if (password.length < 5) {
      console.log(
        "password should be at least 6  characters and match each other"
      );
      return false;
    }

    return true;
  };
  
  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="auth__alert-error ">hgola</div>
        <div className="auth__group">
          <input
            type="text"
            className="auth__input"
            name="displayName"
            placeholder="Your  First Name"
            autoComplete="false"
            value={displayName}
            onChange={handleInputChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>First Name</label>
        </div>
        <div className="auth__group">
          <input
            type="text"
            className="auth__input"
            name="lastName"
            placeholder="Your Last Name"
            autoComplete="false"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Last Name</label>
        </div>
        <div className="auth__group">
          <input
            type="email"
            className="auth__input"
            name="email"
            placeholder="Your Email"
            autoComplete="false"
            value={email}
            onChange={handleInputChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
        <div className="auth__group">
          <input
            type="Password"
            className="auth__input"
            name="password"
            placeholder="Your Password"
            value={password}
            onChange={handleInputChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Password</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Sign In
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
