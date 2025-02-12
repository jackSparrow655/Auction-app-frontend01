import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, title, startingBid, startTime, endTime, id }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const startDifference = new Date(startTime) - now;
    const endDifference = new Date(endTime) - now;
    let timeLeft = {};

    if (startDifference > 0) {
      timeLeft = {
        type: "Starts In:",
        days: Math.floor(startDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((startDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((startDifference / 1000 / 60) % 60),
        seconds: Math.floor((startDifference / 1000) % 60),
      };
    } else if (endDifference > 0) {
      timeLeft = {
        type: "Ends In:",
        days: Math.floor(endDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((endDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((endDifference / 1000 / 60) % 60),
        seconds: Math.floor((endDifference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeLeft = ({ days, hours, minutes, seconds }) => {
    const pad = (num) => String(num).padStart(2, "0");
    return `(${days} Days) ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <Link
      to={`/auction/item/${id}`}
      className="flex flex-col bg-richblue-100 border-2 shadow-lg rounded-xl p-2 overflow-hidden transition-all duration-200 transform hover:scale-105 hover:text-richblue-25 hover:bg-richblue-600"
    >
      <div className="w-full aspect-[4/3] bg-gray-200 flex justify-center items-center overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 rounded-xl"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h5 className="text-xl font-bold">
          {title}
        </h5>
        {startingBid && (
          <p className="text-gray-700 text-md">
            Starting Bid: <span className="text-red-500 font-bold">Rs.{startingBid}</span>
          </p>
        )}
        <p className="text-gray-600 font-medium">
          {timeLeft.type}{" "}
          {Object.keys(timeLeft).length > 1 ? (
            <span className="text-pink-300 bg-brown-5 px-2 rounded font-bold">{formatTimeLeft(timeLeft)}</span>
          ) : (
            <span className="text-red-500 font-bold ">Time's up!</span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default Card;

