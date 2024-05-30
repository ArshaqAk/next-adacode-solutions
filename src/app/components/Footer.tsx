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
      </div>

      </div>
    </div>
  );
}

export default Footer;
