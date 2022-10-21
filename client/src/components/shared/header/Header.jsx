import { LogoutOutlined } from "@ant-design/icons";
import React from "react";

import styles from "./header.module.css";
import useUser from "./../../../hooks/useUser";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, handleUser } = useUser();
  const navigator = useNavigate();

  const logOut = async () => {
    localStorage.removeItem('drH-user-token');
    handleUser(null);
    navigator('/login');
  }

  return (
    <header className={styles.body}>
      <section className={styles.headline}>DrNG | PATIENTS</section>
      {user && (
        <button onClick={logOut}>
          <span>Logout</span>
          <span>
            <LogoutOutlined />
          </span>
        </button>
      )}
    </header>
  );
};

export default Header;
