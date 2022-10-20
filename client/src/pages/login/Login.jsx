import React from "react";
import Input from "../../components/record/Input";

import styles from "./login.module.css";

const Login = () => {
  return (
    <main className={styles.body}>
      <form className={styles.form}>
        <div className={styles.headline}>
          <h2>Welcome Back</h2>
          <p>Please Log In</p>
        </div>
        <div className={styles.inputs}>
          <Input
            label={"Username"}
            type={"text"}
            width={"100%"}
            name={"username"}
            required
          />
          <Input
            label={"Password"}
            type={"password"}
            width={"100%"}
            name={"password"}
            required
          />
        </div>
        <button>Login</button>
      </form>
    </main>
  );
};

export default Login;
