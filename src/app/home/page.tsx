"use client"
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import QuickForm from "../components/QuickForm";

function Home() {
  const downloadBrochure = () => {
    const fileUrl = "/brochure.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "adacode-solutions-brochure.pdf";
    link.click();
  };
  return (
    <>
      <div className="hero_contianer">
        <section className="home_section_left">
          <h1>
            ADACODE
            <span>
              <Typewriter
                options={{
                  strings: [
                    "EMPOWERING TOMORROW",
                    "IEEE PROJECTS",
                    "INDUSTRIAL EXPERTS",
                    "LIFE TIME PLACEMENT ASSISTANCE",
                    "EDUCATION LOAN",
                    "SCHOLARSHIP",
                    "COURSE CERTIFICATE",
                  ],
                  autoStart: true,
                  loop: true,
                  changeDeleteSpeed: 1,
                }}
              />
            </span>
          </h1>
          <p>
            At ADACODE, we are not just a software company; we are passionate
            educators dedicated to shaping the future of tech. Unlock your
            potential with our cutting-edge software education solutions and
            embark on a journey of knowledge and skill mastery.
          </p>
          <a href="https://register.adacodesolutions.com">
            <div className="button_enroll">
              Master Class Just ₹ 1000/-
            </div>
          </a>
          <div className="home_button_wrapper">
            <button className="button_light">
              <Link className="btn_find_course" href="/courses">Find The Course</Link>
              <FaArrowRightLong />
            </button>
            <button className="button_light" onClick={downloadBrochure}>
              Download Brochure
              <FaArrowRightLong />
            </button>
          </div>
        </section>
        <section className="home_section_right">
            <QuickForm/>
        </section>
      </div>
      <section className="animated_details">
        <div>
          <h1>10+</h1>Courses
        </div>
        <div className="section_divider">|</div>
        <div>
          <h1>30+</h1>Instructors
        </div>
        <div className="section_divider">|</div>
        <div>
          <h1>200+ </h1>Students
        </div>
      </section>
    </>
  );
}

export default Home;
