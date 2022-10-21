import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Tooltip } from "antd";

import Statistics from "../../components/dashboard/statistics/Statistics";
import Table from "../../components/dashboard/table/Table";
import useUser from "./../../hooks/useUser";

import styles from "./dash.module.css";
import { PlusOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const { user } = useUser();
  const navigator = useNavigate();

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <main className={styles.body}>
      <Statistics />
      <Table />
      <Tooltip title={<span>Add New Record</span>}>
        <button className={styles.addButton} onClick={() => navigator("/new")}>
          <PlusOutlined />
        </button>
      </Tooltip>
    </main>
  );
};

export default Dashboard;
