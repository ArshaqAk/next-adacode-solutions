import React from "react";
import { MdDashboard } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";


const AdminSidebar = () => {
  return (
    <div className="dashboard_container">
      <NavList />
    </div>
  );
};

export default AdminSidebar;

const NavList = () => {
  return (
    <div className="sidebard_container">
      <Link href="/admin/dashboard">
        <div className="sidebar_item">
          <MdDashboard />
          <p>DashBoard</p>{" "}
        </div>
      </Link>
      <Link href="/admin/studentlist">
        <div className="sidebar_item">
          <PiStudentBold />
          <p>StudentList</p>{" "}
        </div>
      </Link>
      <Link href="/admin/managecourse">
        <div className="sidebar_item">
          <FaSearch />
          <p>Course Management</p>
        </div>
      </Link>
      <Link href="/admin/managegallery">
        <div className="sidebar_item">
          <GrGallery />
          <p>Gallery Management</p>
        </div>
      </Link>
    </div>
  );
};
