"use client"
import AdminSidebar from "../adminsidebar/page"
import {useState} from 'react'
import CourseTable from '../coursetable/page'


function ManageCourse() {
  const [isModalOpen,setisModalOpen] = useState(false);

  return (
    <div className="right_pane_container">
      <AdminSidebar />
      <div className="manage_course_wrapper">
      <h2>Course Management</h2>
      <button onClick={()=>setisModalOpen(!isModalOpen)}>Add New Course</button> 
      <div className="course_list">
          <CourseTable />
          </div>
      </div>
      {isModalOpen ? <AddNewCourseModal/>:null}
    </div>
  )
}

export default ManageCourse

const AddNewCourseModal = () =>{
  const handleSubmit = () =>{
    window.alert('Course Added Successfully')
  } 
  return(
  <div className="addcourse_modal">
      <form onSubmit={(e)=>e.preventDefault()}>
        <label>Course Name</label>
        <input type="text" placeholder="Data Science.." required/>
        <label>Course Context</label>
        <textarea  placeholder="Data science is the study of data ..." required/>
        <label>Upload Document</label>
        <input type="file" placeholder="upload document" />
        <button type="submit" onClick={handleSubmit}>Save</button>
      </form>
  </div>
  )
}
