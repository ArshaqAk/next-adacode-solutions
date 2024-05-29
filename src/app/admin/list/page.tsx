"use client";
import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaTrash } from "react-icons/fa";

interface Student {
  studentname: string;
  phonenumber: string;
  isCalled: boolean;
}

interface Props {
  studentList: Student[];
}

const List: React.FC<Props> = ({ studentList }) => {
  console.log(studentList,'student data');

  const handleDelete = (index: number) => {
    console.log("Delete");
  };

  const handleStatus = (item: Student) => {};

  return (
    <div className="studentlist_container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Student Name</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.studentname}</td>
              <td>{item.phonenumber}</td>
              <td>{item.isCalled ? <>Called</> : <>Not Called</>}</td>
              <td className="table_icons_container">
                <a href={`tel:+91${item.phonenumber}`}>
                  <button
                    className="phone-icon"
                    onClick={() => handleStatus(item)}
                  >
                    <FaPhoneAlt />
                  </button>
                </a>
                <a href={`http://wa.me/91${item.phonenumber}`}>
                  <button className="whatsapp-icon">
                    <FaWhatsapp />
                  </button>
                </a>
                <button
                  onClick={() => handleDelete(index)}
                  className="delete-icon"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
