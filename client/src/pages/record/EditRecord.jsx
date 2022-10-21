import { Alert, Divider, Skeleton } from "antd";
import React, { useState, useEffect, useRef } from "react";
import Address from "../../components/record/address/Address";
import Appointment from "../../components/record/appointment/Appointment";
import General from "../../components/record/general/General";

import styles from "./record.module.css";
import Notes from "./../../components/record/notes/Notes";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import useUser from './../../hooks/useUser';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { getRecord, updateRecord } from './../../api/api';

const EditRecord = () => {

  const { code } = useParams();
  const { data, isLoading } = useQuery(['record'], () => getRecord(code));

  const [formData, setFormData] = useState({});
  const [filled, setFilled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const formRef = useRef();

  const { user } = useUser();
  const navigator = useNavigate();

  useEffect(() => {
    if(isLoading){
      return;
    }
    setFormData(data);
    Object.keys(data).forEach((key) => {
      const elem = formRef.current.querySelector(`input[name="${key}"]`) || formRef.current.querySelector(`select[name="${key}"]`) || formRef.current.querySelector(`textarea[name="${key}"]`);
      if(!elem){
        return;
      }
      if(key === "firstTime"){
        elem.value = data[key]? 'yes' : 'no';
      }
      else{
        elem.value = data[key];
      }
    })
  }, [data, isLoading]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    if(!user) {
      navigator('/login');
    }
  }, []);

  const handleChange = (e) => {
    if(!filled){
      setFilled(true);
    }
    setFormData({
      ...formData,
      [e.target.name] : e.target.value.trim()
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const res = await updateRecord(formData);
      if(res.error){
        setMessage(res.error);
        setType('error');
      }else{
        setMessage("Record Updated");
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
      setFilled(false);
    }
  }

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


  if(!user) {
    return <Navigate to="/login" />
  }

  return (
    <main className={styles.body}>
      <section className={styles.header}>
        <h1>Edit Record</h1>
        <div className={styles.divider}></div>
        {type && <Alert message={message} type={type} showIcon closable  />}
      </section>
      <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
        { isLoading? <Skeleton active/> : <General onChange={handleChange}/>}
        <Divider />
        { isLoading? <Skeleton active/> : <Appointment onChange={handleChange}/>}
        <Divider />
        { isLoading? <Skeleton active/> : <Address onChange={handleChange}/>}
        <Divider />
        { isLoading? <Skeleton active/> : <Notes onChange={handleChange}/>}
        <Divider />
        <section className={styles.save}>
        <button disabled={loading}>{loading? <LoadingOutlined /> : "Update" }</button>
        </section>
      </form>
      <button className={styles.return} onClick={goBack}>
        <ArrowLeftOutlined />
      </button>
    </main>
  );
};

export default EditRecord;
