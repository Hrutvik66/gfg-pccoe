import React from "react";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="flex flex-col items-center bg-green-500 sm:p-[0.5rem_1rem] p-[0.5rem_0.6rem] shadow-[0px_2px_4px_0px_rgba(0,2,0,0.3)] rounded-xl min-w-[3rem] max-w-[4.5rem] ">
      <h2 className="text-xl font-bold">{value}</h2>
      <p>{type}</p>
    </div>
  );
};

export default DateTimeDisplay;
