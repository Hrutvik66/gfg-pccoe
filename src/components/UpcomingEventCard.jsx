import useCountdown from "../Hooks/useCountDown";
import DateTimeDisplay from "../lib/DateTimeDisplay";

export default function UpComingCard(props) {
  const [days, hours, minutes, seconds] = useCountdown(props.Date);
  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex space-x-3 items-center ">
        <DateTimeDisplay value={days} type={"Days"} />
        <DateTimeDisplay value={hours} type={"Hours"} />
        <DateTimeDisplay value={minutes} type={"Mins"} />
        <DateTimeDisplay value={seconds} type={"Secs"} />
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center bg-green-700 text-white w-[90%] sm:w-[22rem] p-6 space-y-4 rounded-lg ">
      <h2 className="text-center font-iceberg text-lg font-bold">
        {props.Name}
      </h2>
      <div className="flex justify-evenly items-center">
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </div>
  );
}
