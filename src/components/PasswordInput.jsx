// Code PasswordInput Component Here
import React from "react";

function PasswordInput() {
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
      />
    </div>
  );
}

export default PasswordInput;