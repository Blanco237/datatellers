import React from 'react'


import DataCard from './DataCard'

import styles from './statistics.module.css'
import { ExclamationCircleOutlined, ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'

const Statistics = () => {

    const data = [
        {
            title: "Missed",
            value: 15,
            theme: "danger",
            icon: <ExclamationCircleOutlined />,
        },
        {
            title: "Rescheduled",
            value: 21,
            theme: "warning",
            icon: <ClockCircleOutlined />
        },
        {
            title: "Passed",
            value: "05",
            theme: "success",
            icon: <CheckCircleOutlined />
        }
    ]



  return (
    <section className={styles.body}>
        <h2 className={styles.heading}>Appointments</h2>
        <div className={styles.stats}>
            {
                data.map((item) => {
                    return <DataCard {...item} key={item.title} />
                })
            }
        </div>
    </section>
  )
}

export default Statistics