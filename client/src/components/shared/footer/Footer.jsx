import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.body}>
      <p>
        Built By{" "}
        <a
          href="https://github.com/Blanco237"
          rel="noreferrer"
          target="_blank"
          className={styles.link}
        >
          Blanco237
        </a>{" "}
        for{" "}
        <a
          href="https://www.datatellers.info/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          DataTeller
        </a>
      </p>
    </footer>
  );
};

export default Footer;
