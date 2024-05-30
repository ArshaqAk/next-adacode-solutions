import React from "react";

function Contact() {
  return (
    <>
    <div className="contact_container">
      <h1>
        Contact <span>Us Now</span>
      </h1>
      <div className="contact_content_container">
        {/* map */}
        <div className="map_container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.485207175698!2d75.78931287435667!3d11.22567355074802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659378f7f9911%3A0x62ff59d7aabdab76!2sAdacode%20solutions!5e0!3m2!1sen!2sin!4v1715861212689!5m2!1sen!2sin"  ></iframe>
        </div>
      <form
        target="_blank"
        action="https://formsubmit.co/adacodesolutions@gmail.com"
        method="POST"
      >
        <input type="text" placeholder="Your Name :" name="name" />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number:"
          required
        />
        <input type="email" name="email" placeholder="Your Email:" required />
        <textarea placeholder="Message:" name="content" />
        <input type="submit" value="Send" />
        <p>* Please fill this form and we will contact you shortly</p>
      </form>


      </div>
    </div>
    </>
  );
}

export default Contact;
