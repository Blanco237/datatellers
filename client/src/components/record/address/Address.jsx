import React from "react";

import Input from "../Input";

import styles from "../general.module.css";

const Address = ({ onChange }) => {
  return (
    <section className={styles.body}>
      <h3>Address Information</h3>
      <div className={styles.inputs}>
        <Input
          label={"Address 1"}
          type={"text"}
          name={"address"}
          width={"25%"}
          onChange={onChange}
        />
        <Input
          label={"City"}
          type={"text"}
          name={"city"}
          width={"20%"}
          onChange={onChange}
        />
      </div>
    </section>
  );
};

export default Address;
