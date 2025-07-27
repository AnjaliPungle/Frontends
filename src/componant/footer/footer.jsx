import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import logo from "../../assets/logo.png"; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <img src={logo} alt="Logo" className="w-24 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              We breathe life into imagination. Founded with a passion for creativity and innovation, 
              we specialize in delivering cutting-edge 3D art, rendering, and immersive solutions for 
              a wide range of industries.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h2 className="text-lg font-bold mb-4">Our Services</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> 3D Assets Development for Game/AR/VR/MR/XR Metaverse
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> E-Learning Content Development
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> Ed-Tech Platform Development
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> VR Simulation Development
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> Digital Twin Simulation
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> Interactive Architectural Experiences
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> Home
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> About Company
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> Our Services
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> Portfolio
              </li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <FaArrowRight size={12} /> Contact Us
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-bold mb-4">Connect with us</h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +91 8928130109
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> info@srujontechnology.com
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt /> Arihanth Anshul Flat No. D3/101, Ghot Camp Taloja, Navi Mumbai Maharashtra, India – 410208
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt /> 12-2-709/24, Navodaya Colony Mehdipatnam, Hyderabad Telangana, India – 500028
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-sky-500 p-3 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-800 p-3 rounded-full">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          © copyright 2025 Srujon Intelligent Solutions | Developed by 
          <span className="text-blue-500 hover:underline"> VM3 Tech Solutions</span>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Privacy & Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
