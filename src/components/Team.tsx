import React from "react";
import Image from "next/image";
import singer1 from "../../public/image1.png";

function Team() {
  return (
    <div className="w-full relative h-screen flex flex-col mt-[18rem] items-center">
      <h1 className="text-5xl -mt-20">Meet Our Starclinch Squads</h1>
      <div className="absolute border-b-none border flex flex-col gap-8 justify-center items-center border-indigo-950 shadow-[inset_0_42px_52px_rgba(0,0,0,0.6)] shadow-gray-900 -z-10 left-0 right-0 w-full h-full max-h-[75%] mx-auto max-w-[80%] bottom-0 rounded-t-full ">
        <h3 className="rounded-full text-2xl bg-gradient-to-b p-2 px-4 from-cyan-800 to-gray-950">
          5 Members
        </h3>
        <h1 className="text-5xl">Design Dynamos</h1>
        <p className="text-gray-600 text-2xl">
          The artists behind the visuals. These design superheroes bring
          <br />
          ideas to life, painting our projects with creativity and imagination
        </p>
        <span className="text-cyan-700 flex text-xl">
          Our Design Team Is Growing. Apply Now{" "}
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.4033 13.6942C27.9472 14.0938 27.9472 14.9062 27.4033 15.3058L13.5921 25.4544C12.9317 25.9397 12 25.4681 12 24.6486L12 4.3514C12 3.53186 12.9317 3.06028 13.5921 3.54556L27.4033 13.6942Z"
              fill="url(#paint0_linear_3128_126)"
            />
            <path
              d="M21.4033 13.6942C21.9472 14.0938 21.9472 14.9062 21.4033 15.3058L7.59213 25.4544C6.93172 25.9397 6 25.4681 6 24.6486L6 4.3514C6 3.53186 6.93172 3.06028 7.59214 3.54556L21.4033 13.6942Z"
              fill="url(#paint1_linear_3128_126)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3128_126"
                x1="39.5"
                y1="14.5"
                x2="6.5"
                y2="14.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#92C17C" />
                <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3128_126"
                x1="33.5"
                y1="14.5"
                x2="0.499998"
                y2="14.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#92C17C" />
                <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>

      <svg
        className=" absolute cursor-pointer right-[42rem] top-[15rem]"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_3128_113)">
          <rect
            x="0.5"
            y="0.743164"
            width="55"
            height="55"
            rx="27.5"
            fill="#EDEDED"
            fill-opacity="0.1"
          />
          <path
            d="M29.6966 38.2432L28.1653 36.7318L34.4693 30.4278H18.1426V28.2403H34.4693L28.1653 21.9562L29.6966 20.425L38.6056 29.3341L29.6966 38.2432Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_3128_113"
            x="-58.5"
            y="-58.2568"
            width="173"
            height="173"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="29.5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_3128_113"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_3128_113"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className=" absolute left-[42rem] cursor-pointer rotate-180 top-[15rem]"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_3128_113)">
          <rect
            x="0.5"
            y="0.743164"
            width="55"
            height="55"
            rx="27.5"
            fill="#EDEDED"
            fill-opacity="0.1"
          />
          <path
            d="M29.6966 38.2432L28.1653 36.7318L34.4693 30.4278H18.1426V28.2403H34.4693L28.1653 21.9562L29.6966 20.425L38.6056 29.3341L29.6966 38.2432Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_3128_113"
            x="-58.5"
            y="-58.2568"
            width="173"
            height="173"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="29.5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_3128_113"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_3128_113"
              result="shape"
            />
          </filter>
        </defs>
      </svg>


      <Image
        src={singer1}
        className="absolute right-24 max-h-[17rem] max-w-[17rem] aspect-square bottom-0 rounded-full "
        alt="singers"
      />
      <Image
        src={singer1}
        className="absolute left-24 max-h-[17rem] max-w-[17rem] aspect-square bottom-0 rounded-full "
        alt="singers"
      />

      <Image
        src={singer1}
        className="absolute right-[18rem] max-h-[17rem] max-w-[17rem] aspect-square bottom-[18rem] rounded-full "
        alt="singers"
      />
      <Image
        src={singer1}
        className="absolute left-[18rem] max-h-[17rem] max-w-[17rem] aspect-square bottom-[18rem] rounded-full "
        alt="singers"
      />

      <Image
        src={singer1}
        className="absolute top-28 max-h-[17rem] max-w-[17rem] aspect-square rounded-2xl"
        alt="singers"
      />

      <div className="absolute w-full bottom-0 h-[40rem] bg-gradient-to-t from-gray-950 to-transparent" />
    </div>
  );
}

export default Team;
