import React from "react";

const Input = ({ value, title, name, checked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        name={name}
        value={value}
        className="mr-2"
        checked={checked}
        onChange={onChange}
      />
      <label>{title}</label>
    </div>
  );
};

export default Input;
