import React from "react";

import styles from './datacard.module.css'

const DataCard = ({ title, value, theme, icon }) => {
  const themeStyle = {
    backgroundColor: `var(--${theme}-accent)`,
    color: `var(--${theme})`,
  };

  return (
    <div style={themeStyle} className={styles.body}>
      <h6>{title}</h6>
      <h4>{value}</h4>
      <span>{icon}</span>
    </div>
  );
};

export default DataCard;
