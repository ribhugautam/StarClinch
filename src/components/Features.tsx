import React from "react";
import Image from "next/image";
import art from "../../public/singer1.png";

function Features() {
  return (
    <div className=" relative h-full flex flex-col gap-24 justify-center items-center">
      <svg
        className="absolute -z-10 left-0 mx-auto right-0 top-0"
        width="1108"
        height="2427"
        viewBox="0 0 1108 2427"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.7126 0C15.6808 168.047 98.1117 729.875 657.771 729.875C1112.95 729.875 1156.99 1115.88 1001.97 1337.84C813.476 1566.85 202.207 1191.63 156.406 1637.31C114.446 2045.61 913.752 1862.22 1010.78 2040.72C1114.54 2231.62 566.855 2324.33 566.855 2426.5"
          stroke="url(#paint0_linear_1_598)"
          stroke-opacity="0.02"
          stroke-width="49"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_598"
            x1="553.865"
            y1="0"
            x2="553.866"
            y2="2426.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="0.0445283" stop-color="white" />
            <stop offset="0.958333" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-row ml-[-38rem] pt-48 items-end gap-24" >
        <h3 className="text-5xl mb-8 " >Late Night Maggie<br/>Party for the boost</h3>
        <div className="aspect-square max-h-[20rem]" >
        <Image
          className="aspect-square hover:rotate-0 transition-all duration-500 ease-linear border-2 border-gray-600 rounded-2xl rotate-12 object-fill "
          src={art}
          alt="singer"
        />
        </div>
      </div>

      <div className="flex flex-row pt-48 items-end gap-24" >
        <h3 className="text-5xl mb-8 " >Late Night Maggie<br/>Party for the boost</h3>
        <div className="aspect-square max-h-[20rem]" >
        <Image
          className="aspect-square hover:rotate-0 transition-all duration-500 ease-linear border-2 border-gray-600 rounded-2xl rotate-12 object-fill "
          src={art}
          alt="singer"
        />
        </div>
      </div>

      <div className="flex flex-row ml-[-38rem] pt-48  items-end gap-24" >
        <h3 className="text-5xl mb-8 " >Late Night Maggie<br/>Party for the boost</h3>
        <div className="aspect-square max-h-[20rem]" >
        <Image
          className="aspect-square hover:rotate-0 transition-all duration-500 ease-linear border-2 border-gray-600 rounded-2xl rotate-12 object-fill "
          src={art}
          alt="singer"
        />
        </div>
      </div>

      <div className="flex flex-row pt-48  items-end gap-24" >
        <h3 className="text-5xl mb-8 " >Late Night Maggie<br/>Party for the boost</h3>
        <div className="aspect-square max-h-[20rem]" >
        <Image
          className="aspect-square hover:rotate-0 transition-all duration-500 ease-linear border-2 border-gray-600 rounded-2xl rotate-12 object-fill "
          src={art}
          alt="singer"
        />
        </div>
      </div>

    </div>
  );
}

export default Features;
