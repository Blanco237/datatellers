import { Alert, Divider } from "antd";
import React, { useState } from "react";
import Address from "../../components/record/address/Address";
import Appointment from "../../components/record/appointment/Appointment";
import General from "../../components/record/general/General";

import styles from "./record.module.css";
import Notes from "./../../components/record/notes/Notes";
import { ArrowLeftOutlined, EyeTwoTone, LoadingOutlined } from "@ant-design/icons";
import useUser from "./../../hooks/useUser";
import { Navigate, useNavigate } from "react-router-dom";
import { saveRecord } from './../../api/api';

const NewRecord = () => {
  const [formData, setFormData] = useState({
    firstTime: "yes",
    status: "pending",
    gender: "male"
  });
  const [filled, setFilled] = useState(false);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);
  const [loading, setLoading]= useState(false);

  const { user } = useUser();
  const navigator = useNavigate();

  if (!user) {
    <Navigate to={"/login"} />;
  }

  const handleChange = (e) => {
    if(!filled){
      setFilled(true);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const res = await saveRecord(formData);
      if(res.error){
        setMessage(res.error);
        setType('error');
      }else{
        setFormData({
          firstTime: "yes",
          status: "pending",
          gender: "male"
        });
        setMessage("Record Saved");
        setType('success');
      }
      setLoading(false);
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      })
    }catch(e) {
      setMessage(e.message);
      setType('error');
    }
    finally{
      setLoading(false);
      e.target.reset();
      setFilled(false);
    }
  };

  const goBack = () => {
    if(filled){
      const res = window.confirm("Are you sure you want to abandon current Record?");
      if(res){
        navigator(-1);
      }
      return;
    }

    navigator(-1);
  }

  return (
    <main className={styles.body}>
      <section className={styles.header}>
        <h1>New Record</h1>
        <div className={styles.divider}></div>
        {type && <Alert message={message} type={type} showIcon closable  />}
      </section>
      <form className={styles.form} onSubmit={handleSubmit}>
        <General onChange={handleChange} {...formData} code={formData.code} name={formData.name} />
        <Divider />
        <Appointment onChange={handleChange} {...formData} />
        <Divider />
        <Address onChange={handleChange} {...formData} />
        <Divider />
        <Notes onChange={handleChange} {...formData} />
        <Divider />
        <section className={styles.save}>
          <button disabled={loading}>{loading? <LoadingOutlined /> : "Save" }</button>
        </section>
      </form>
      <button className={styles.return} onClick={goBack}>
        <ArrowLeftOutlined />
      </button>
    </main>
  );
};

export default NewRecord;
