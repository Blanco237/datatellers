import React from 'react'

import styles from './dash.module.css';


import Statistics from '../../components/dashboard/statistics/Statistics'
import Table from '../../components/dashboard/table/Table'
import { PlusOutlined } from '@ant-design/icons';

const Dashboard = () => {
  return (
    <main className={styles.body}>
      <Statistics />
      <Table />
      <button className={styles.addButton}>
        <PlusOutlined />
      </button>
    </main>
  )
}

export default Dashboard