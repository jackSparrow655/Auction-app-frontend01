import React from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const HowItWorks = () => {
  const steps = [
    { icon: <FaUser />, title: "User Registration", description: "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof." },
    { icon: <FaGavel />, title: "Role Selection", description: "Users can register as either a \"Bidder\" or \"Auctioneer.\" Bidders can bid on items, while Auctioneers can post items." },
    { icon: <FaEnvelope />, title: "Winning Bid Notification", description: "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal." },
    { icon: <FaDollarSign />, title: "Commission Payment", description: "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent." },
    { icon: <FaFileInvoice />, title: "Proof of Payment", description: "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly." },
    { icon: <FaRedo />, title: "Reposting Items", description: "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost." },
  ];

  return (
    <section className="w-full min-h-screen bg-[#0d0d0d] px-5 pt-20 flex flex-col items-center py-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#ffefd8] text-center mb-12 drop-shadow-md">
        Discover How PrimeBid Operates
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {steps.map((element, index) => (
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareColor="#ff6b6b" className="w-full">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#010002] h-full border border-[#ff6b6b] rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-brown-100 transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="bg-richblue-500 text-white p-5 rounded-full mb-4 text-3xl shadow-lg shadow-red-500/50">
                {element.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">
                {element.title}
              </h3>
              <p className="text-lg text-richblue-5 leading-relaxed">
                {element.description}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

