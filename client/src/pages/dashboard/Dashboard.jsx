import React, { useEffect } from "react";

import styles from "./dash.module.css";

import Statistics from "../../components/dashboard/statistics/Statistics";
import Table from "../../components/dashboard/table/Table";
import { PlusOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import useUser from "./../../hooks/useUser";
import { Navigate, useNavigate } from "react-router-dom";

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
