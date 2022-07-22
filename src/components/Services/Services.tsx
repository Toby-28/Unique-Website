import { BsBezier } from "react-icons/bs";
import { BiChevronsRight } from "react-icons/bi";
import { FaLaptopCode, FaSearchDollar } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <div className="w-full p-6 bg-blue-100">
      <div className="w-48 mx-auto pt-6 border-b-2 border-orange-700 text-center text-2xl text-blue-700">
        Our Services
      </div>
      <div className="p-2 text-center text-lg text-gray-700">
        We offer the best web development solutions
      </div>
      <div className="flex justify-center flex-wrap p-10">
        <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
          <div className="flex items-center w-48 h-20 bg-orange-400">
            <BsBezier className="text-white text-5xl mx-auto" />
          </div>
          <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
            Ui Design
          </p>
          <p className="p-2 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            acest massa.
          </p>
          <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
            <BiChevronsRight className="mt-2 text-orange-500 text-xl mx-auto" />
          </div>
        </div>
        <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
          <div className="flex items-center w-48 h-20 bg-green-400">
            <FaLaptopCode className="mx-auto text-white text-5xl" />
          </div>
          <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
            Web Dev
          </p>
          <p className="p-2 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            acest massa.
          </p>
          <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-green-300 text-center cursor-pointer">
            <BiChevronsRight className="mt-2 text-green-500 text-xl mx-auto" />
          </div>
        </div>
        <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
          <div className="flex items-center w-48 h-20 bg-yellow-400">
            <FaSearchDollar className="mx-auto text-white text-5xl" />
          </div>
          <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
            SEO
          </p>
          <p className="p-2 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            acest massa.
          </p>
          <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-yellow-300 text-center cursor-pointer">
            <BiChevronsRight className="mt-2 text-yellow-500 text-xl mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
