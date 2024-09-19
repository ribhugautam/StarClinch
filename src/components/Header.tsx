import React from "react";
import Image from "next/image";
import singer1 from "../../public/singer1.png";

function Header() {
  return (
    <header className="flex px-32 justify-evenly items-center w-full h-screen py-12 mx-auto">
      <div className="relative ml-40 flex items-center justify-between gap-8 h-full">
        <h1 className="text-8xl tracking-wide z-10 absolute left-[-17rem] text-white">
          Singers
        </h1>
        <div className="flex flex-col items-center gap-8">
          <div className="aspect-square p-3 relative bg-gradient-to-br from-orange-500 to-pink-600 max-h-[40rem] min-h-[20rem] rounded-full ">
            <Image
              src={singer1}
              className="rounded-full object-cover aspect-square"
              alt="singers"
            />
            {/* <svg
              className="absolute right-[-4rem] aspect-square max-h-[100%] bottom-0"
              width="236"
              height="505"
              viewBox="0 0 236 505"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.581659 495.866C0.231294 497.201 1.02991 498.568 2.36543 498.918L24.129 504.628C25.4645 504.978 26.8312 504.18 27.1815 502.844C27.5319 501.509 26.7333 500.142 25.3977 499.791L6.05239 494.716L11.1275 475.371C11.4779 474.035 10.6793 472.669 9.34377 472.318C8.00826 471.968 6.64158 472.767 6.29121 474.102L0.581659 495.866ZM213.182 2.43707C234.239 54.5088 239.312 143.674 210.065 236.825C180.847 329.881 117.428 426.738 1.73851 494.342L4.26115 498.659C121.138 430.361 185.286 332.433 214.835 238.323C244.354 144.306 239.395 53.9214 217.818 0.562662L213.182 2.43707Z"
                fill="url(#paint0_linear_3001_147)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3001_147"
                  x1="269.94"
                  y1="31.2349"
                  x2="297.508"
                  y2="48.8324"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#727272" stop-opacity="0" />
                  <stop offset="0.742053" stop-color="#FF8DB9" />
                  <stop offset="1" stop-color="#F86E42" />
                </linearGradient>
              </defs>
            </svg> */}
          </div>
          <span className="text-slate-600 text-lg ">
            Click here to view more
          </span>
        </div>
      </div>
      <div className="flex flex-col  gap-8">
        <h1 className="text-slate-400 text-6xl leading-tight ">
          Choose
          <br />
          from{" "}
          <span className="text-white">
            100+ <br /> Categories
          </span>
        </h1>
        <h4 className="text-pink-300/80 flex flex-row gap-4 items-center truncate text-3xl">
          Explore all categories
          <svg
            width="44"
            height="15"
            viewBox="0 0 44 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.7071 8.20711C45.0976 7.81658 45.0976 7.18342 44.7071 6.79289L38.3431 0.428932C37.9526 0.0384078 37.3195 0.0384078 36.9289 0.428932C36.5384 0.819457 36.5384 1.45262 36.9289 1.84315L42.5858 7.5L36.9289 13.1569C36.5384 13.5474 36.5384 14.1805 36.9289 14.5711C37.3195 14.9616 37.9526 14.9616 38.3431 14.5711L44.7071 8.20711ZM0 8.5H44V6.5H0V8.5Z"
              fill="url(#paint0_linear_3001_144)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3001_144"
                x1="-0.66653"
                y1="7.50166"
                x2="51.401"
                y2="-3.13405"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#727272" stop-opacity="0" />
                <stop offset="0.742053" stop-color="#FF8DB9" />
                <stop offset="1" stop-color="#F86E42" />
              </linearGradient>
            </defs>
          </svg>
        </h4>
      </div>
    </header>
  );
}

export default Header;
