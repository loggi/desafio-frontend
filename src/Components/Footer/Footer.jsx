import { FaHome, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="iconsContainer">
        <div className="icon">
          <FaHome />
        </div>
        <div className="icon">
          <FaPhone />
        </div>
        <div className="icon">
          <FaEnvelope />
        </div>
        <div className="icon">
          <FaFacebook />
        </div>
        <div className="icon">
          <FaTwitter />
        </div>
        <div className="icon">
          <FaInstagram />
        </div>
        <div className="icon">
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
