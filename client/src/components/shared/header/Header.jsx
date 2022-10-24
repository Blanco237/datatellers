import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "./../../../hooks/useUser";

import styles from "./header.module.css";
import { LogoutOutlined, UserAddOutlined } from "@ant-design/icons";
import Register from "../modals/Register";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, handleUser } = useUser();
  const navigator = useNavigate();

  const logOut = async () => {
    localStorage.removeItem("drH-user-token");
    handleUser(null);
    navigator("/login");
  };

  return (
    <>
      <header className={styles.body}>
        <section className={styles.headline}>DrNG | PATIENTS</section>
        {user && (
          <>
            <button onClick={logOut} className={styles.logOut}>
              <span>Logout</span>
              <span>
                <LogoutOutlined />
              </span>
            </button>
            {user.role === "admin" && (
              <button className={styles.add} onClick={() => setShowModal(true)}>
                <UserAddOutlined />
              </button>
            )}
          </>
        )}
      </header>
      {showModal && <Register closeModal={() => setShowModal(false)} />}
    </>
  );
};

export default Header;
