import { Phone } from "lucide-react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function SocialButton() {
  return (
    <div className="flex items-center gap-4">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/princempiyas"
        className="text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare size={30} />
      </a>

      {/* Twitter */}
      <a
        href="https://www.twitter.com/pmppiyas"
        className="text-blue-400 p-2 rounded-full hover:bg-blue-50 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={30} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/pmppiyas"
        className="text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>

      {/* GitHub */}
      <a
        href="https://www.github.com/pmppiyas"
        className="text-white hover:text-black p-2 rounded-full hover:bg-gray-100 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/pmppiyas"
        className="text-pink-600 p-2 rounded-full hover:bg-pink-50 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
}

export default SocialButton;
