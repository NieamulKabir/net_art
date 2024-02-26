import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-red-500 lg:flex items-center justify-evenly text-white pt-10 pb-16 space-y-2">
      <div className="flex  text-xl items-center justify-center">
        <FaPhoneAlt className="text-3xl mr-2" />
        <p>Toll free 1800 200 1234</p>
      </div>
      <div className="flex text-xl items-center justify-center">
        <FaFacebook className="text-3xl mr-2" />
        <p>www.facebook.com/cripumps</p>
      </div>
      <div className="flex text-xl items-center justify-center">
        <TbWorld className="text-3xl mr-2" />
        <p>www.crigroups.com</p>
      </div>
    </div>
  );
};

export default Footer;
