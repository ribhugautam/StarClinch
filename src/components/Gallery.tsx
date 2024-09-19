import React from "react";
import Image from "next/image";
import singer1 from "../../public/singer1.png";

function Gallery() {
  return (
    <div className="flex flex-col gap-24 overflow-hidden items-center py-24 px-36 w-full h-full rounded-t-full border border-t-indigo-950 border-r-indigo-900 border-l-indigo-900 border-b-transparent shadow-[inset_0_42px_52px_rgba(0,0,0,0.6)]">
      <div className="shadow-2xl flex flex-row gap-6 bg-[#0a0a14] rounded-full px-4 p-3">
        <h1 className="text-black cursor-pointer bg-zinc-300 py-1 text-3xl rounded-full px-4 ">Photos</h1>
        <h1 className="text-white cursor-pointer bg-zinc-900 py-1 text-3xl rounded-full px-4">Videos</h1>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 w-[65%] gap-4" >
        <Image className="border rounded-full rounded-br-none" src={singer1} alt="singers"/>
        <Image className="border rounded-md" src={singer1} alt="singers"/>
        <Image className="border rounded-full rounded-br-none" src={singer1} alt="singers"/>
        <Image className="border rounded-md" src={singer1} alt="singers"/>
        <Image className="border rounded-md" src={singer1} alt="singers"/>
        <Image className="border rounded-md" src={singer1} alt="singers"/>
        <Image className="border rounded-md" src={singer1} alt="singers"/>
        <Image className="border rounded-md" src={singer1} alt="singers"/>
      </div>

      <div className="flex flex-row gap-4" >
        <div className="w-32 h-2 cursor-pointer rounded-full bg-white" />
        <div className="w-16 h-2 cursor-pointer rounded-full bg-gray-700" />
        <div className="w-16 h-2 cursor-pointer rounded-full bg-gray-700" />
        <div className="w-16 h-2 cursor-pointer rounded-full bg-gray-700" />
      </div>
    </div>
  );
}

export default Gallery;
