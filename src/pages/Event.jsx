import React from "react";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import UpComingCard from "../components/UpcomingEventCard";

const Event = () => {
  return (
    <div className="h-full bg-[#011305]">
      <Navbar />
      <div className="flex flex-col space-y-3 items-center justify-center h-full p-[5rem_2rem_1rem] md:p-[5rem_5rem]">
        <div className="flex-1 flex flex-col items-center space-y-2">
          <h1 className=" text-3xl text-white font-abel">Up Coming Events</h1>
          <UpComingCard Name="Weekly Contest" Date="2023-03-30" />
        </div>
        <div className="flex-1 flex flex-col items-center space-y-3">
          <h1 className=" text-3xl text-white font-abel">Past Events</h1>
          <div className="flex justify-around flex-wrap">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
