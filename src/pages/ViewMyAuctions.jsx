import CardTwo from "@/custom-components/CardTwo";
import Spinner from "@/custom-components/Spinner";
import { getMyAuctionItems } from "@/store/slices/auctionSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const ViewMyAuctions = () => {
  const { myAuctions, loading } = useSelector((state) => state.auction);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user.role !== "Auctioneer") {
      navigateTo("/");
    }
    dispatch(getMyAuctionItems());
  }, [dispatch, isAuthenticated]);

  return (
    <div className="w-full ml-0 m-0 min-h-screen px-5 pt-20 lg:pl-[320px] flex flex-col bg-richblue-900 text-white">
      
      {/* Animated Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl 
                   text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-white">
        My Auctions
      </motion.h1>

      {/* Show Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          className={`${
            myAuctions.length > 2 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-wrap gap-6"
          } flex-grow`}
        >
          {/* If Auctions Exist */}
          {myAuctions.length > 0 ? (
            myAuctions.map((element, index) => (
              <motion.div
                key={element._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-4 rounded-lg shadow-lg hover:shadow-red-700/50 transition-transform transform hover:scale-105"
              >
                <CardTwo
                  title={element.title}
                  startingBid={element.startingBit}
                  endTime={element.endTime}
                  startTime={element.startTime}
                  imgSrc={element.image?.url}
                  id={element._id}
                />
              </motion.div>
            ))
          ) : (
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl mt-5"
            >
              You have not posted any auction.
            </motion.h3>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ViewMyAuctions;

