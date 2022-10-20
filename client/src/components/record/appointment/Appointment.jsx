import React from 'react'

import styles from '../general.module.css';
import Input from '../Input';

const Appointment = () => {
  return (
    <section className={styles.body}>
         <h3>Appointment Information</h3>
      <div className={styles.inputs}>
        <Input label={"Appointment Date"} type={"date"} name={"appt"} width={'20%'} />
        <label htmlFor="firstTime" style={{width: '20%'}}>
            <h4>First Time</h4>
        <select defaultValue={"yes"} style={{width: '100%'}} name="firstTime">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        </label>
        <Input label={"Request Date"} type={"date"} name={"record"} width={'20%'}/>
        <label htmlFor="status" style={{width: '20%'}}>
            <h4>Appointment Status</h4>
        <select defaultValue={"pending"} style={{width: '100%'}} name="status">
          <option value="pending">Pending</option>
          <option value="missed">Missed</option>
          <option value="passed">Passed</option>
          <option value="rescheduled">Rescheduled</option>
        </select>
        </label>
        <Input label={"Appointment Time"} type={"time"} name={"time"} width={'20%'}/>
      </div>
    </section>
  )
}

export default Appointment