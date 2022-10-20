import React, { useState } from "react";
import { Alert } from "antd";

import Input from "../../components/record/Input";

import styles from "./login.module.css";
import { loginUser } from "./../../api/api";
import useUser from './../../hooks/useUser';

const Login = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorState, setErrorState] = useState(false);

  const { handleUser } = useUser();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      if (res.error) {
        setErrorMessage(res.error);
        setErrorState(true);
      }
      else{
        handleUser(res);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setErrorState(true);
    }
  };

  return (
    <main className={styles.body}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.headline}>
          <h2>Welcome Back</h2>
          <p>Please Log In</p>
        </div>
        {errorState && <Alert message={errorMessage} type={"error"} showIcon />}
        <div className={styles.inputs}>
          <Input
            label={"Username"}
            type={"text"}
            width={"100%"}
            name={"username"}
            required
            onChange={handleChange}
          />
          <Input
            label={"Password"}
            type={"password"}
            width={"100%"}
            name={"password"}
            required
            onChange={handleChange}
          />
        </div>
        <button>Login</button>
      </form>
    </main>
  );
};

export default Login;
