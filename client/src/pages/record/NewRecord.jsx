import { Divider } from "antd";
import React from "react";
import Address from "../../components/record/address/Address";
import Appointment from "../../components/record/appointment/Appointment";
import General from "../../components/record/general/General";

import styles from "./record.module.css";
import Notes from "./../../components/record/notes/Notes";
import { ArrowLeftOutlined } from "@ant-design/icons";

const NewRecord = () => {
  return (
    <main className={styles.body}>
      <section className={styles.header}>
        <h1>New Record</h1>
        <div className={styles.divider}></div>
      </section>
      <form className={styles.form}>
        <General />
        <Divider />
        <Appointment />
        <Divider />
        <Address />
        <Divider />
        <Notes />
        <Divider />
        <section className={styles.save}>
          <button>Save</button>
        </section>
      </form>
      <button className={styles.return}>
        <ArrowLeftOutlined />
      </button>
    </main>
  );
};

export default NewRecord;
