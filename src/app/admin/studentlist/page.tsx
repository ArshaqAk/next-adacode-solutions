"use client";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../adminsidebar/page";
import { db } from "../../Helpers/firebaseFirestore";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import List from "../list/page";

interface StudentDataProps {
  studentname: string;
  phonenumber: string;
  isCalled: boolean;
  createdAt: string | number;
}

function StudentList() {
  const [studentList, setStudentList] = useState<StudentDataProps[]>([]);
  
  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const q = query(
          collection(db, "students"),
          orderBy("createdAt", "desc"),
        );
        console.log(q)
        const querySnapshot = await getDocs(q);
        const newStudentData: StudentDataProps[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          newStudentData.push({
            studentname: data.studentname,
            phonenumber: data.phonenumber,
            isCalled: data.isCalled,
            createdAt: data.createdAt,
          });
        });
        setStudentList(newStudentData);
        console.log(studentList)
      } catch (e) {
        console.error("Error", e);
      }
    };
    fetchDocs();
  }, []);

  // Logging studentList outside of useEffect

  return (
    <div className="right_pane_container">
      <AdminSidebar />
      <div className="right_pane">
        {studentList.length > 0 ? <List studentList={studentList} /> : null}
      </div>
    </div>
  );
}
export default StudentList;
