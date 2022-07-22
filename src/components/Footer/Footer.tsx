import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import InputEmail from "../Input/InputEmail";
import InputText from "../Input/InputText";
import TextArea from "../Input/TextArea";

const Footer: React.FC<any> = () => {
  return (
    <div className="w-full bg-blue-900">
      <div className="flex flex-wrap text-center text-white">
        {/* About Section */}
        <div className="w-full md:w-1/3 p-5 border-r border-blue-700 md:text-left">
          <div className="my-6 ml-3 text-xl font-semibold">About Us</div>
          <p className="p-3 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            est massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras
            sodales id ipsum at convallis.
          </p>
          <p className="p-3 text-gray-400">
            Morbi tristique massa nec massa auctor, at scelerisque felis
            consectetur. Morbi tempus et odio sit amet feugiat. Maecenas
            dignissim a turpis in molestie. Fusce tincidunt vestibulum iaculis.
          </p>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/3 p-5 border-r border-blue-700">
          <div className="my-6 text-xl font-semibold">Contact Us</div>
          <p className="mt-8 text-gray-400">
            744000, Turkmenistan, Ashgabat,
            <br /> 10 ýyl Abadançylyk şaýoly,
            <br /> 148, 1st floor. <br />
            <strong>Phone: </strong>+993 65 05 11 26 <br />
            <strong>Email: </strong>info@turkmenportal.com
          </p>
          <div className="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
            <div className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer">
              <FaFacebookF className="text-blue-300 -rotate-45" />
            </div>
            <div className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer">
              <FaTwitter className="text-blue-300 -rotate-45" />
            </div>
            <div className="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer">
              <FaLinkedinIn className="text-blue-300 -rotate-45" />
            </div>
            <div className="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer">
              <FaGooglePlusG className="text-blue-300 -rotate-45" />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/3 p-5">
          <div className="my-6 text-xl font-semibold md:text-right">
            Say Hello!
          </div>
          <form className="w-4/5 mx-auto mt-2 p-6 rounded">
            <div className="flex items-center justify-between">
              <InputText />
            </div>
            <div className="flex items-center justify-between">
              <InputEmail />
            </div>
            <div className="flex items-center justify-between">
              <TextArea />
            </div>
            <div className="flex justify-between items-center">
              <button
                className="w-full p-2 rounded bg-orange-700 hover:bg-orange-600 text-white font-bold"
                type="submit"
              >
                <FiSend className="w-full text-3xl" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
