import React from "react";

function Contact() {
  return (
    <>
    <div className="contact_container">
      <h1>
        Contact <span>Us Now</span>
      </h1>
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
    </>
  );
}

export default Contact;
