import React from "react";

import styles from "../general.module.css";

const Notes = ({ onChange }) => {
  return (
    <section className={styles.body}>
      <h3>Notes</h3>
      <div className={`${styles.inputs} ${styles.break}`}>
        <label htmlFor="before" style={{ width: "40%" }}>
          <h4>Before Appointment</h4>
          <textarea
            style={{ width: "100%" }}
            name="before"
            onChange={onChange}
          />
        </label>
        <label htmlFor="after" style={{ width: "40%" }}>
          <h4>After Appointment</h4>
          <textarea
            style={{ width: "100%" }}
            name="after"
            onChange={onChange}
          />
        </label>
      </div>
    </section>
  );
};

export default Notes;
