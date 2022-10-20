import { Divider, Skeleton } from "antd";
import React, { useEffect, useRef } from "react";
import Address from "../../components/record/address/Address";
import Appointment from "../../components/record/appointment/Appointment";
import General from "../../components/record/general/General";

import styles from "./record.module.css";
import Notes from "./../../components/record/notes/Notes";
import { ArrowLeftOutlined } from "@ant-design/icons";
import useUser from './../../hooks/useUser';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { getRecord } from './../../api/api';

const EditRecord = () => {

  const { code } = useParams();
  const { data, isLoading } = useQuery(['record'], () => getRecord(code));
  const formRef = useRef();

  const { user } = useUser();
  const navigator = useNavigate();

  useEffect(() => {
    if(isLoading){
      return;
    }
    console.log(data);
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

  if(!user) {
    return <Navigate to="/login" />
  }

  return (
    <main className={styles.body}>
      <section className={styles.header}>
        <h1>Edit Record</h1>
        <div className={styles.divider}></div>
      </section>
      <form className={styles.form} ref={formRef}>
        { isLoading? <Skeleton active/> : <General />}
        <Divider />
        { isLoading? <Skeleton active/> : <Appointment />}
        <Divider />
        { isLoading? <Skeleton active/> : <Address />}
        <Divider />
        { isLoading? <Skeleton active/> : <Notes />}
        <Divider />
        <section className={styles.save}>
          <button>Update</button>
        </section>
      </form>
      <button className={styles.return} onClick={() => navigator(-1)}>
        <ArrowLeftOutlined />
      </button>
    </main>
  );
};

export default EditRecord;
