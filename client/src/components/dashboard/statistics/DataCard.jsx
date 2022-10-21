import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getStatusCount } from "./../../../api/api";

import styles from "./datacard.module.css";

const DataCard = ({ title, value, theme, icon }) => {
  const { data, isLoading } = useQuery([title.toLowerCase()], () =>
    getStatusCount(title.toLowerCase())
  );

  const themeStyle = {
    backgroundColor: `var(--${theme}-accent)`,
    color: `var(--${theme})`,
  };

  return (
    <div style={themeStyle} className={styles.body}>
      <h4 className={styles.title}>{title}</h4>
      <h1>{isLoading ? value : data}</h1>
      <span>{icon}</span>
    </div>
  );
};

export default DataCard;
