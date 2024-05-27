"use client"
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';

const CourseTable = () => {
  const [rowData, setRowData] = useState([
    { id: 1, CourseName: 'Data Science', Description:'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.' , Actions: true },
    { id: 2, CourseName: 'Flutter App Dvelopment ', Description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.', Actions: false },
    { id: 3, CourseName: 'Java Full Stack', Description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.', Actions: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: 'id' },
    { field: 'CourseName' },
    { field: 'Description' },
    { field: 'Actions' },
  ]);

  return (
    <div
      className={
        "ag-theme-quartz"
      }
      style={{ width: '100%', height: '100%' }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default CourseTable;
