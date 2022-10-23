import React, { useState } from "react";
import { Alert, Divider } from "antd";
import Input from "../../record/Input";

import styles from "./register.module.css";

const Register = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    role: "secretary",
  });
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords Don't Match");
      setType("error");
      return;
    }
  };

  return (
    <section className={styles.body} onClick={closeModal}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Register New User</h2>
        <Divider />
        {type && (
          <Alert
            message={message}
            type={type}
            closable
            onClose={() => setType(null)}
          />
        )}
        <Input
          type={"text"}
          label={"Username"}
          name={"username"}
          required
          onChange={handleChange}
        />
        <Input
          type={"password"}
          label={"Password"}
          name={"password"}
          required
          onChange={handleChange}
        />
        <Input
          type={"password"}
          label={"Confirm Password"}
          name={"confirmPassword"}
          required
          onChange={handleChange}
        />
        <Input
          type={"email"}
          label={"Email"}
          name={"email"}
          required
          onChange={handleChange}
        />
        <label htmlFor="role">
          <h4>Role</h4>
          <select onChange={handleChange} name={"role"}>
            <option value={"secretary"}>Secretary</option>
            <option value={"admin"}>Admin</option>
          </select>
        </label>
        <button>Register</button>
      </form>
    </section>
  );
};

export default Register;
