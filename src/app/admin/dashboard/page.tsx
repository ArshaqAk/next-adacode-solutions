"use client"
import React from "react";
import AdminSidebar from "../adminsidebar/page";
const DashBoardItem = () => (
  <div>
    <label>
      <DashBoardCard
        title="Total Number of Students Registered"
        description="223"
      />
    </label>
  </div>
);

interface DashBoardCardProps {
  title: string;
  description: string;
}

const DashBoardCard: React.FC<DashBoardCardProps> = ({
  title,
  description,
}) => {


  return (
    <div className="dashboard_container">
      <div className="dashboard_card">
        <h3>{title}</h3>
        <div>
          <p>
            Today:<span>+{description}</span>
          </p>
        </div>
        <div>
          <p>
            This Month:<span>+{description}</span>
          </p>
        </div>
        <div>
          <p>
            Total:<span>{description}</span>
          </p>
        </div>
      </div>


    </div>
  );
};

function Dashboard() {
  return (
    <div className="dashboard_container">
      <AdminSidebar />
      <div className="dashboard_right">
        <DashBoardItem />
      </div>
    </div>
  );
}

export default Dashboard;
