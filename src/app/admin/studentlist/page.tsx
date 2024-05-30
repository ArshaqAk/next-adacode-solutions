"use client"
import React, { useEffect, useState } from "react";
import AdminSidebar from "../adminsidebar/page";
import { db } from "../../Helpers/firebaseFirestore";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import List from "../list/page";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { FaPhoneAlt, FaWhatsapp, FaTrash } from "react-icons/fa";

interface StudentDataProps {
  studentname: string;
  phonenumber: string;
  isCalled: boolean;
  createdAt: string | number;
}
// interface Props {
//   studentList: Student[] | undefined; 
// }

function StudentList() {
  const handleDelete = (index: number) => {
    console.log("Delete");
  };
  // const handleStatus = (item: Student) => {};

  const router = useRouter();

  const handleSignout = () => {
    Cookies.set('userState', 'false');
    alert('SignOut Successful');
    router.push('/', { scroll: false });
  };

  const [studentList, setStudentList] = useState<StudentDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        setLoading(false);
      } catch (e) {
        console.error("Error fetching documents: ", e);
        setError("Failed to load student data.");
        setLoading(false);
      }
    };
    fetchDocs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  return (
    <div className="right_pane_container">
      <AdminSidebar />
      <div className="right_pane">
        {/* <List studentList={studentList} /> */}
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
                    // onClick={() => handleStatus(item)}
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

        {/* signout sec */}
        <div className="signout_div" >
          <button className="signout-btn" onClick={handleSignout}>SignOut</button>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
