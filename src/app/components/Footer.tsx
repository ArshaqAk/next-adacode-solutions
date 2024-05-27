import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer_container">
      <div>
        <h1>ADACODE</h1>
        <p>
          3rd Floor,4 Wings Building,Panniyankara
          Kozhikode
        </p>
        <h4 className="text-xl font-bold">Follow us on</h4>
        <span className="social_icon">
         <a href="https://www.facebook.com/profile.php?id=61555868858808"><FaFacebook /></a>
         <a href="https://www.instagram.com/adacodesolutions/"><FaInstagram /></a>
         <a href="https://www.youtube.com/@AdacodeSolutions"><FaYoutube /></a>
         <a href="#"><FaLinkedin /></a>
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold">Our Services</h3>
        <ul>
          <li> Web Developement </li>
          <li> Robotics </li>
          <li> Android Developement </li>
          <li> Web Developement </li>
          <li> Data Science</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Our Courses</h3>
        <ul>
          <li> Web Developement </li>
          <li> Robotics </li>
          <li> Android Developement </li>
          <li> Web Developement </li>
          <li> Full Stack Development</li>
          <li> Data Science</li>
          <li> Embedded Systems and IoT</li>
          <li> Ethical Hacking</li>
          <li> Cyber Security</li>
        </ul>
      </div>
      <div>
        <h3>Subscribe</h3>
        <input
          placeholder="Enter your email"
          className="email_input"
          type="email"
        />
        <button  className="button_dark">
          Subscribe Now <FaArrowRightLong />
        </button>

        <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.485207175698!2d75.78931287435667!3d11.22567355074802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659378f7f9911%3A0x62ff59d7aabdab76!2sAdacode%20solutions!5e0!3m2!1sen!2sin!4v1715861212689!5m2!1sen!2sin" width="300" height="100" ></iframe>
      </div>

      </div>
    </div>
  );
}

export default Footer;
