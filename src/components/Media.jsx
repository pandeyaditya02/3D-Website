import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
function Media() {
  return (
    <div className="text-white flex flex-col justify-center h-screen fixed left-0 z-10">
      <ul>
        <li className="flex w-[160px]  justify-between items-center">
          <a
            href="#"
            className="flex h-[40px] pl-2 justify-between items-center w-full bg-blue-500 ml-[-120px] hover:ml-[0] duration-500"
          >
            Facebook <AiFillFacebook size="35px" />
          </a>
        </li>
        <li className="flex w-[160px] justify-between items-center">
          <a
            href="#"
            className="flex h-[40px] pl-2 justify-between items-center w-full bg-blue-900 ml-[-120px] hover:ml-[0] duration-500"
          >
            LinkedIn <AiFillLinkedin size="35px" />
          </a>
        </li>
        <li className="flex w-[160px] justify-between items-center">
          <a
            href="#"
            className="flex h-[40px] pl-2 justify-between items-center w-full bg-gray-900 ml-[-120px] hover:ml-[0] duration-500"
          >
            GitHub <AiFillGithub size="35px" />
          </a>
        </li>
        <li className="flex w-[160px] justify-between items-center">
          <a
            href="#"
            className="flex h-[40px] pl-2 justify-between items-center w-full bg-blue-400 ml-[-120px] hover:ml-[0] duration-500"
          >
            Twitter <AiFillTwitterCircle size="35px" />
          </a>
        </li>
        <li className="flex w-[160px] justify-between items-center">
          <a
            href="#"
            className="flex h-[40px] pl-2 justify-between items-center w-full bg-red-600 ml-[-120px] hover:ml-[0] duration-500"
          >
            Google <AiFillGoogleCircle size="35px" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Media;
