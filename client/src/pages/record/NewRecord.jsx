import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Alert, Divider } from "antd";

import Address from "../../components/record/address/Address";
import Appointment from "../../components/record/appointment/Appointment";
import General from "../../components/record/general/General";
import Notes from "./../../components/record/notes/Notes";
import useUser from "./../../hooks/useUser";
import { saveRecord } from "./../../api/api";

import styles from "./record.module.css";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";

const NewRecord = () => {
  const [formData, setFormData] = useState({
    firstTime: "yes",
    status: "pending",
    gender: "male",
  });
  const [filled, setFilled] = useState(false);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  const navigator = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (!user) {
      navigator("/login");
    }
  }, []);

  if (!user) {
    <Navigate to={"/login"} />;
  }

  const handleChange = (e) => {
    if (!filled) {
      setFilled(true);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await saveRecord(formData);
      if (res.error) {
        setMessage(res.error);
        setType("error");
      } else {
        setFormData({
          firstTime: "yes",
          status: "pending",
          gender: "male",
        });
        setMessage("Record Saved");
        setType("success");
      }
      setLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (e) {
      setMessage(e.message);
      setType("error");
    } finally {
      setLoading(false);
      e.target.reset();
      setFilled(false);
    }
  };

  const goBack = () => {
    if (filled) {
      const res = window.confirm(
        "Are you sure you want to abandon current Record?"
      );
      if (res) {
        navigator(-1);
      }
      return;
    }

    navigator(-1);
  };

  return (
    <main className={styles.body}>
      <section className={styles.header}>
        <h1>New Record</h1>
        <div className={styles.divider}></div>
        {type && <Alert message={message} type={type} showIcon closable afterClose={() => {setType(null)}}  />}
      </section>
      <form className={styles.form} onSubmit={handleSubmit}>
        <General onChange={handleChange} />
        <Divider />
        <Appointment onChange={handleChange} />
        <Divider />
        <Address onChange={handleChange} />
        <Divider />
        <Notes onChange={handleChange} />
        <Divider />
        <section className={styles.save}>
          <button disabled={loading}>
            {loading ? <LoadingOutlined /> : "Save"}
          </button>
        </section>
      </form>
      <button className={styles.return} onClick={goBack}>
        <ArrowLeftOutlined />
      </button>
    </main>
  );
};

export default NewRecord;
