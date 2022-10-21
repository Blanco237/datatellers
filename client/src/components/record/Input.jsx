import React from "react";

const Input = ({
  name,
  type,
  width,
  label,
  required,
  onChange,
  disabled,
  value,
  maxLength,
}) => {
  const inputStyles = {
    width: width,
  };

  return (
    <label htmlFor={name} style={inputStyles}>
      <h4>{label}</h4>
      <input
        type={type}
        name={name}
        style={{ width: "100%" }}
        required={required}
        onChange={onChange}
        disabled={disabled}
        value={value}
        maxLength={maxLength}
      />
    </label>
  );
};

export default Input;
