import React from "react";

import styles from './datacard.module.css'

const DataCard = ({ title, value, theme, icon }) => {
  const themeStyle = {
    backgroundColor: `var(--${theme}-accent)`,
    color: `var(--${theme})`,
  };

  return (
    <div style={themeStyle} className={styles.body}>
      <h4 className={styles.title}>{title}</h4>
      <h1>{value}</h1>
      <span>{icon}</span>
    </div>
  );
};

export default DataCard;
