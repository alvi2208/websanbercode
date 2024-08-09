import React from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input/Input";

const FormRegist = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);

    // Use navigate for routing
    navigate("/Login");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="text-slate-900 mt-2 text-sm font-bold"
    >
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="Insert your fullname"
      />

      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />

      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="****"
      />

      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="****"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white font-bold w-full text-xl rounded-lg px-4 py-2 mt-4"
      >
        Register
      </button>
    </form>
  );
};

export default FormRegist;
