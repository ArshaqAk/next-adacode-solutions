"use client"
import React from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

const StudentTable = ({ studentList }) => {
  const [rowData, setRowData] = useState(studentList);
  const [colDefs, setColDefs] = useState([
    { field: "studentname" },
    { field: "phonenumber" },
    { field: "action" },
  ]);

  return (
    <div
      className={"ag-theme-quartz"}
      style={{ width: "100%", height: "100%" }}
    >
      <h3
        style={{
          color: "var(--primary-color)",
          fontSize: "2rem",
          paddingBottom: "2rem",
        }}
      >
        Student List
      </h3>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default StudentTable;
