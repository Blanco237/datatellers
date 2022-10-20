import React, { useState, useRef } from "react";
import { Table as T, Button, Input, Space } from "antd";
import { useQuery } from '@tanstack/react-query';

import { SearchOutlined } from "@ant-design/icons";

import "./table.css";
import styles from "./table.module.css";

import dataSource, { columns } from "./data";
import { useNavigate } from 'react-router-dom';
import { getRecords } from "../../../api/api";

const Table = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const navigator = useNavigate();

  const { data, isLoading } = useQuery(['records'], getRecords);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
          size="small"
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? <p>{text}</p> : text),
  });

  const scroll = (pagination, filters, sorter, extra) => {
    if (extra.action === "paginate") {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      ...getColumnSearchProps("code"),
      responsive: ['lg']
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      responsive: ['lg']
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      onFilter: (value, record) => record.gender === value,
      responsive: ['lg']
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps("phone"),
      responsive: ['lg']
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Pending", value: "pending" },
        { text: "Missed", value: "missed" },
        { text: "Passed", value: "passed" },
        { text: "Rescheduled", value: "rescheduled" },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        const statusObj = {
          missed: "danger",
          passed: "success",
          rescheduled: "warning",
          pending: "warning",
        };

        const theme = statusObj[status];

        const styles = {
          background: `var(--${theme}-accent)`,
          color: `var(--${theme})`,
          padding: "0.1rem 0.15rem",
          fontWeight: "500",
          fontSize: "0.8rem",
          borderRadius: "10px",
          textAlign: "center",
        };

        return <p style={styles}>{status}</p>;
      },
    },
    { title: "Appointment Date", dataIndex: "appt", key: "appt", sorter: (a, b) =>  new Date(b.appt) - new Date(a.appt), },
    { title: "Record Date", dataIndex: "record", key: "record", sorter: (a, b) =>  new Date(b.record) - new Date(a.record), responsive: ['lg'] },
  ];

  

  return (
    <section className={styles.body}>
      <T
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log(record);
              console.log(rowIndex);
              navigator(`/edit/${record.code}`);
            }, // click row
          };
        }}
        onChange={scroll}
        dataSource={data? data : dataSource}
        loading={isLoading}
        columns={columns}
        pagination={{
          position: ["bottomCenter"],
          size: "small",
          showSizeChanger: false,
          showTotal: (total) => `${total} Patients`,
          hideOnSinglePage: true
        }}
      />
    </section>
  );
};

export default Table;
