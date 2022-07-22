import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { BsCheck2Circle } from "react-icons/bs";

const Header: React.FC<any> = () =>{
  return (
    <div className="flex justify-between items-center py-4 bg-blue-800">
      <div className="flex-shrink-0 ml-10 cursor-pointer">
        <i className="text-orange-500"><BsCheck2Circle/></i>
        <span className="ml-1 text-3xl text-blue-200 font-semibold">
          POS System
        </span>
      </div>
      <i className="visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer">
        <AiOutlineMenuUnfold/>
      </i>
      <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
        <li className="mr-6 p-1 border-b-2  border-orange-500">
          <a className="text-blue-200 cursor-default" href="#">
            Home
          </a>
        </li>
        <li className="mr-6 p-1">
          <a className="text-white hover:text-blue-300" href="#">
            Services
          </a>
        </li>
        <li className="mr-6 p-1">
          <a className="text-white hover:text-blue-300" href="#">
            Projects
          </a>
        </li>
        <li className="mr-6 p-1">
          <a className="text-white hover:text-blue-300" href="#">
            About
          </a>
        </li>
        <li className="mr-6 p-1">
          <a className="text-white hover:text-blue-300" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header