import React from "react";

const whatweprovide = [
  { id: "01", text: "Industrial Experts" },
  { id: "02", text: "Course Certificates" },
  { id: "03", text: "IEEE Projects" },
  { id: "04", text: "Scholarships" },
  { id: "05", text: "Education Loan" },
];

function WhyUs() {
  return (
    <div className="whyus_container">
      <section className="whyus_left">
        <img
          src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="User Image"
        />
      </section>
      <section className="whyus_right">
        <h1>
          Why
          <span> We are Best?</span>{" "}
        </h1>
        <p className="whyus_desc">
          Experience a superior education with us, guided by industry experts,
          earning recognized certificates, participating in hands-on IEEE
          projects, and accessing scholarships and flexible education loans for
          a well-rounded learning journey.
        </p>
        <div className="whyus_card_wrapper">
          {whatweprovide.map((item, index) => (
            <div key={index} className="whyus_card">
              <p >
                {item.id} | {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default WhyUs;
