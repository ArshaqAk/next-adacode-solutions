"use client";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../adminsidebar/page";
import { db } from "../../Helpers/firebaseFirestore";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import List from "../list/page";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'

interface StudentDataProps {
  studentname: string;
  phonenumber: string;
  isCalled: boolean;
  createdAt: string | number;
}

function StudentList() {
  const router = useRouter();

  const handleSignout = () => {
    Cookies.set('userState', 'false');
    alert('SignOut Successful');
    router.push('/', { scroll: false });
  };

  const [studentList, setStudentList] = useState<StudentDataProps[] | undefined>(undefined);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const q = query(
          collection(db, "students"),
          orderBy("createdAt", "desc"),
        );
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
      } catch (e) {
        console.error("Error", e);
      }
    };
    fetchDocs();
  }, []);

  return (
    <div className="right_pane_container">
      <AdminSidebar />
      <div className="right_pane">
        {studentList && studentList.length > 0 ? <List studentList={studentList} /> : <p>Loading...</p>}
        {/* signout sec */}
        <div className="signout_div" >
          <button className="signout-btn" onClick={handleSignout}>SignOut</button>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
