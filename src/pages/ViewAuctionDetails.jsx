import Spinner from "@/custom-components/Spinner";
import { getAuctionDetail } from "@/store/slices/auctionSlice";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const ViewAuctionDetails = () => {
  const { id } = useParams();
  const { loading, auctionDetail, auctionBidders } = useSelector((state) => state.auction);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated || user.role === "Bidder") {
      navigateTo("/");
    }
    if (id) {
      dispatch(getAuctionDetail(id));
    }
  }, [isAuthenticated]);

  return (
    <section className="w-full min-h-screen px-6 pt-24 lg:px-40 bg-gray-50 flex flex-col">
      <nav className="text-lg flex gap-2 items-center text-gray-600 mb-6">
        <Link to="/" className="hover:text-red-500 transition">Home</Link>
        <FaChevronRight className="text-gray-400" />
        <Link to="/view-my-auctions" className="hover:text-red-500 transition">My Auctions</Link>
        <FaChevronRight className="text-gray-400" />
        <span className="text-gray-800 font-semibold">{auctionDetail.title}</span>
      </nav>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-40 h-40 flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden">
                <img src={auctionDetail.image?.url} alt={auctionDetail.title} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{auctionDetail.title}</h3>
                <p className="text-lg font-semibold">Condition: <span className="text-red-500">{auctionDetail.condition}</span></p>
                <p className="text-lg font-semibold">Minimum Bid: <span className="text-red-500">Rs.{auctionDetail.startingBit}</span></p>
              </div>
            </div>
            {console.log(auctionDetail)}
            <h4 className="text-xl font-semibold border-b pb-2">Auction Item Description</h4>
            <ul className="text-gray-700 text-lg space-y-2">
              {auctionDetail.description?.split(". ").map((desc, index) => (
                <li key={index} className="list-disc ml-5">{desc}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <header className="bg-gray-800 text-white py-4 text-xl font-semibold text-center">BIDS</header>
            <div className="p-6 min-h-[400px] flex flex-col gap-4">
              {auctionBidders && auctionBidders.length > 0 && new Date(auctionDetail.startTime) < Date.now() && new Date(auctionDetail.endTime) > Date.now() ? (
                auctionBidders.map((element, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                      <img src={element.profileImage} alt={element.userName} className="w-12 h-12 rounded-full border" />
                      <p className="text-lg font-semibold">{element.userName}</p>
                    </div>
                    <p className="text-lg font-bold">Rs.{element.amount}</p>
                    <p className={`text-lg font-semibold ${index === 0 ? "text-green-600" : index === 1 ? "text-blue-600" : index === 2 ? "text-yellow-600" : "text-gray-600"}`}>{index + 1}{index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"}</p>
                  </div>
                ))
              ) : Date.now() < new Date(auctionDetail.startTime) ? (
                <img src="/notStarted.png" alt="not-started" className="w-full" />
              ) : (
                <img src="/auctionEnded.png" alt="ended" className="w-full" />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ViewAuctionDetails;

