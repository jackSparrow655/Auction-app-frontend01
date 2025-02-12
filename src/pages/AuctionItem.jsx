import Spinner from "@/custom-components/Spinner";
import { getAuctionDetail } from "@/store/slices/auctionSlice";
import { placeBid } from "@/store/slices/bidSlice";
import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const AuctionItem = () => {
  const { id } = useParams();
  const { loading, auctionDetail, auctionBidders } = useSelector(
    (state) => state.auction
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const handleBid = () => {
    const formData = new FormData();
    formData.append("amount", amount);
    dispatch(placeBid(id, formData));
    dispatch(getAuctionDetail(id));
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
    if (id) {
      dispatch(getAuctionDetail(id));
    }
  }, [isAuthenticated]);

  return (
    <section className="w-full min-h-screen bg-gray-50 px-5 pt-20 lg:pl-[320px]">
      <div className="text-sm flex flex-wrap gap-2 items-center text-gray-600">
        <Link
          to="/"
          className="font-semibold hover:text-[#D6482B] transition duration-300"
        >
          Home
        </Link>
        <FaGreaterThan className="text-gray-400" />
        <Link
          to="/auctions"
          className="font-semibold hover:text-[#D6482B] transition duration-300"
        >
          Auctions
        </Link>
        <FaGreaterThan className="text-gray-400" />
        <p className="text-gray-800">{auctionDetail.title}</p>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-48 h-48 flex justify-center items-center bg-gray-100 rounded-lg p-4">
                <img
                  src={auctionDetail.image?.url}
                  alt={auctionDetail.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {auctionDetail.title}
                </h1>
                <p className="text-xl font-semibold text-gray-700">
                  Condition:{" "}
                  <span className="text-[#D6482B]">
                    {auctionDetail.condition}
                  </span>
                </p>
                <p className="text-xl font-semibold text-gray-700">
                  Minimum Bid:{" "}
                  <span className="text-[#D6482B]">
                    Rs. {auctionDetail.startingBit}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Auction Item Description
              </h2>
              <hr className="mb-4 border-t border-gray-200" />
              <ul className="space-y-2">
                {auctionDetail.description &&
                  auctionDetail.description.split(". ").map((element, index) => (
                    <li key={index} className="text-lg text-gray-700">
                      {element}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg shadow-lg">
            <header className="bg-[#D6482B] py-4 text-2xl font-semibold text-white text-center rounded-t-lg">
              BIDS
            </header>
            <div className="p-6">
              {auctionBidders &&
              new Date(auctionDetail.startTime) < Date.now() &&
              new Date(auctionDetail.endTime) > Date.now() ? (
                auctionBidders.length > 0 ? (
                  auctionBidders.map((element, index) => (
                    <div
                      key={index}
                      className="py-4 flex items-center justify-between border-b border-gray-200"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={element.profileImage}
                          alt={element.userName}
                          className="w-12 h-12 rounded-full hidden md:block"
                        />
                        <p className="text-lg font-semibold text-gray-900">
                          {element.userName}
                        </p>
                      </div>
                      {index === 0 ? (
                        <p className="text-lg font-semibold text-green-600">
                          1st
                        </p>
                      ) : index === 1 ? (
                        <p className="text-lg font-semibold text-blue-600">
                          2nd
                        </p>
                      ) : index === 2 ? (
                        <p className="text-lg font-semibold text-yellow-600">
                          3rd
                        </p>
                      ) : (
                        <p className="text-lg font-semibold text-gray-600">
                          {index + 1}th
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-4">
                    No bids for this auction
                  </p>
                )
              ) : Date.now() < new Date(auctionDetail.startTime) ? (
                <img
                  src="/notStarted.png"
                  alt="not-started"
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <img
                  src="/auctionEnded.png"
                  alt="ended"
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>

            <div className="bg-[#D6482B] py-4 px-6 text-white rounded-b-lg">
              {Date.now() >= new Date(auctionDetail.startTime) &&
              Date.now() <= new Date(auctionDetail.endTime) ? (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-semibold">Place Bid</p>
                    <input
                      type="number"
                      className="w-32 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b8381e] text-gray-900"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <button
                    className="p-3 bg-black rounded-full hover:bg-gray-900 transition duration-300"
                    onClick={handleBid}
                  >
                    <RiAuctionFill className="text-2xl" />
                  </button>
                </div>
              ) : new Date(auctionDetail.startTime) > Date.now() ? (
                <p className="text-lg font-semibold text-center">
                  Auction has not started yet!
                </p>
              ) : (
                <p className="text-lg font-semibold text-center">
                  Auction has ended!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AuctionItem;