import React from "react";

import Input from "../Input";
import styles from "../general.module.css";

const General = ({ onChange }) => {
  return (
    <section className={styles.body}>
      <h3>General Information</h3>
      <div className={styles.inputs}>
        <Input
          label={"Unique Code"}
          type={"text"}
          name={"code"}
          width={"10%"}
          disabled
        />
        <Input
          label={"Name"}
          type={"text"}
          name={"name"}
          width={"20%"}
          onChange={onChange}
          required
        />
        <label htmlFor="gender" style={{ width: "20%" }}>
          <h4>Sex</h4>
          <select
            defaultValue={"male"}
            style={{ width: "100%" }}
            name="gender"
            onChange={onChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <Input
          label={"Phone"}
          type={"tel"}
          name={"phone"}
          width={"20%"}
          onChange={onChange}
          maxLength={9}
        />
        <Input
          label={"Email"}
          type={"email"}
          name={"email"}
          width={"20%"}
          onChange={onChange}
        />
      </div>
    </section>
  );
};

export default General;
