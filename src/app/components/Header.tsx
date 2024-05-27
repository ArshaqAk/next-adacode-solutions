"use client"
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { CustomDrawer, MiniHeader } from ".";
import Link from "next/link";
import logolight from "../assets/logo-light.png";
import Image from "next/image";
function Header() {
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window && window.innerWidth < 1100,
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 960);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive ? (
        <CustomDrawer />
      ) : (
        <>
          {/* <MiniHeader /> */}
          <div className="header_contianer">
            <div className="logo_container">
                <Image
                src={logolight}
                alt="Adacode logo"
                width={70}
                height={70}
                />

              <h1>ADACODE</h1>
            </div>
            <div className="nav_link_container">
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
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="header_end">
              <button className="button_light">
                <Link href="/contact">Contact Us</Link>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
