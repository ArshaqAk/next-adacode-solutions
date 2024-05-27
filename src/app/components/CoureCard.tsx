"use client"

import { FaArrowRightLong } from "react-icons/fa6";

import { useState } from "react";
import { Popup } from ".";

interface CourseCardProps {
  title: string;
  desc: string;
  downloadCourse:React.FC;
  imgUrl:string;
}

function CourseCard({ title, desc ,downloadCourse,imgUrl}: CourseCardProps) {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="course_card_contianer">
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="button_dark" onClick={handleClick}>
        View Details
        <FaArrowRightLong />
      </button>
      {showModal ? <Popup downloadCourse={downloadCourse} onClose={() => setShowModal(false)} /> : null}
    </div>
  );
}

export default CourseCard;
