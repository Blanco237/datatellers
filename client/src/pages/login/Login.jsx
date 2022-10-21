import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "antd";

import Input from "../../components/record/Input";
import useUser from "./../../hooks/useUser";
import { loginUser } from "./../../api/api";

import styles from "./login.module.css";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorState, setErrorState] = useState(false);

  const navigator = useNavigate();

  const { refresh } = useUser();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await loginUser(formData);
      if (res.error) {
        setErrorMessage(res.error);
        setErrorState(true);
      } else {
        localStorage.setItem("drH-user-token", res);
        refresh();
        setLoading(false);
        navigator("/dash", { replace: true });
      }
    } catch (e) {
      setErrorMessage(e.message);
      setErrorState(true);
    } finally {
      setLoading(false);
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
        <button disabled={loading}>
          {loading ? <LoadingOutlined /> : "Login"}
        </button>
      </form>
    </main>
  );
};

export default Login;
