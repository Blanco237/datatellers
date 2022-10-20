import React from "react";

import styles from "../general.module.css";
import Input from "../Input";

const Address = () => {
  return (
    <section className={styles.body}>
      <h3>Address Information</h3>
      <div className={styles.inputs}>
        <Input
          label={"Address 1"}
          type={"text"}
          name={"address"}
          width={"25%"}
        />
        <Input
          label={"City"}
          type={"text"}
          name={"city"}
          width={"20%"}
        />
      </div>
    </section>
  );
};

export default Address;