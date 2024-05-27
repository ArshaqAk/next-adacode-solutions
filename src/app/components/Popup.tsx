"use client"
import React from "react";
import { createPortal } from "react-dom";
import { useState } from "react";
import { Firestore, addDoc, collection } from "firebase/firestore";
import { db } from "../Helpers/firebaseFirestore.js";
import { serverTimestamp } from "firebase/firestore";

type OnCloseFunction = () => void;

function Popup({ onClose, downloadCourse }: { onClose: OnCloseFunction }) {
  return (
    <>
      {createPortal(
        <ModalContent onClose={onClose} downloadCourse={downloadCourse} />,
        document.body,
      )}
    </>
  );
}

export default Popup;

const ModalContent = ({
  onClose,
  downloadCourse,
}: {
  onClose: OnCloseFunction;
}) =>{
    const [formData, setFormData] = useState({
    studentname: "",
    phonenumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isFormDataEmpty =
    !formData.studentname.trim() || !formData.phonenumber.trim();
  const isValidPhoneNumber = /^[6-9]\d{9}$/.test(formData.phonenumber);

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "students"), {
        createdAt: serverTimestamp(),
        studentname: formData.studentname,
        phonenumber: formData.phonenumber,
        isCalled: false,
      });

      console.log("Student Data added successfully", docRef.id);
      setFormData({ studentname: "", phonenumber: "" });
      onClose();
      downloadCourse();
    } catch (error) {
      console.error("Error sending student data:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Fill this form to get Course Details</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            name="studentname"
            placeholder="Enter Your Name:"
            value={formData.studentname}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phonenumber"
            placeholder="10 Digit Phonenumber:"
            pattern="[6-9]\d{9}"
            onChange={handleChange}
            value={formData.phonenumber}
            required
          />
          <button
            onClick={handleSubmit}
            className="pdf_button"
            disabled={isFormDataEmpty || !isValidPhoneNumber}
          >
            Download Pdf
          </button>
        </div>
      </div>
    </div>
  );
};
