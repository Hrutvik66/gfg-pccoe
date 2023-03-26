import React from "react";

const EventCard = () => {
  return (
    <div className="mt-4 p-4 flex flex-col justify-evenly items-center space-y-3 bg-[#94ff98] w-[90%] sm:w-[25rem] sm:h-[15rem] rounded-lg">
      <div className="text-black flex flex-col justify-center items-center">
        <h2 className="font-iceberg text-lg font-bold">Weekly contest</h2>
        <p className="font-semibold font-iceberg text-center">15-3-2023</p>
        <p className="font-abel text-lg">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-black text-white  w-[6rem] md:w-[10rem] rounded-lg p-[0.5rem_1rem] ">
          About
        </button>
        <button className="bg-black text-white  w-[6rem] md:w-[10rem] rounded-lg p-[0.5rem_1rem]">
          Feedback
        </button>
      </div>
    </div>
  );
};
export default EventCard;
