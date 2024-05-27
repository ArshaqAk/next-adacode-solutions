"use client"
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";

const CustomDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="mobile_nav">
        <h1>ADACODE</h1>
        <button onClick={toggleDrawer} className="drawer_button">
          <RxHamburgerMenu />
        </button>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <div className="mobile_dawer">
          <h1>ADACODE</h1>
          <div >
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/gallary">Gallary</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="">
              Contact Us
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
