"use client"
import { CourseCard } from "../components";
import React from "react";
import coursesData from "../../../public/courses.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Courses() {
  
  const [ref, inView] = useInView({
    triggerOnce: true, // ensures the animation triggers only once
  });
  const CourseDownloader = (filename: string) => {
    const fileUrlRegex = /^[a-zA-Z0-9-]+$/;
    if (!fileUrlRegex.test(filename)) {
      console.error("Invalid filename format");
      return;
    }
    const fullFilename = `/${filename}.pdf`;
    const fileUrl = fullFilename;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "coursedetails.pdf";
    link.click();
  };
  return (
    <div className="course_container" ref={ref}>
      <div className="course_header">
        <h1>
          Check Out Our Latest <span>Courses</span>
        </h1>
      </div>
      <div className="course_card_wrapper">
        {coursesData.courses.map((course, index) => (
          <motion.div
            key={index}
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 2,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <CourseCard
              key={index}
              title={course.title}
              desc={course.description}
              imgUrl={course.imgUrl}
              downloadCourse={() => CourseDownloader(course.filename)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
