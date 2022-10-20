import React from 'react'

import styles from './dash.module.css';


import Statistics from '../../components/dashboard/statistics/Statistics'
import Table from '../../components/dashboard/table/Table'
import { PlusOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const Dashboard = () => {
  return (
    <main className={styles.body}>
      <Statistics />
      <Table />
      <Tooltip title={<span>Add New Record</span>}>
      <button className={styles.addButton}>
        <PlusOutlined />
      </button>
      </Tooltip>
    </main>
  )
}

export default Dashboard