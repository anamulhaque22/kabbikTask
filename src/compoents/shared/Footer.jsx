import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";

export default function Footer() {
  return (
    <div className="bg-[#51907D] py-[30px]">
      <div className="container font-archivo-narrow">
        <ul className="text-lg md:text-xl text-white flex justify-center mb-4">
          <li className="border-r-2 border-white pr-3">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="border-r-2 border-white px-3">
            <a href="#">Terms of service</a>
          </li>
          <li className="border-r-2 border-white px-3">
            <a href="#">Accessibility</a>
          </li>
        </ul>
        <div className="w-full h-[1px] bg-white my-2"></div>
        <div className="flex justify-center gap-x-4 mt-4">
          <img src={appStore} alt="" className="w-[172px] h-[40px]" />
          <img src={googlePlay} alt="" className="w-[172px] h-[40px]" />
        </div>

        <div className="flex flex-col items-center gap-y-2 mt-4">
          <p className="text-white">Follow Us</p>
          <ul className="flex gap-x-2 text-white">
            <li>
              <a
                href="#"
                className="flex items-center justify-center w-[25px] h-[25px] bg-yellow-300 rounded-full"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center w-[25px] h-[25px] bg-yellow-300 rounded-full"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center w-[25px] h-[25px] bg-yellow-300 rounded-full"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center w-[25px] h-[25px] bg-yellow-300 rounded-full"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
        <p className="text-center text-white mt-2">
          © 2022 Designed & Developed by Kabbik
        </p>
      </div>
    </div>
  );
}
