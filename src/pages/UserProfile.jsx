import Spinner from "@/custom-components/Spinner";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 pt-20 lg:pl-[320px] flex flex-col justify-start">
      {loading ? (
        <Spinner />
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="bg-gray-800/70 backdrop-blur-xl mx-auto w-full max-w-4xl px-6 py-8 rounded-xl shadow-2xl flex flex-col gap-6 items-center"
        >
          {/* Profile Image */}
          <motion.img
            src={user.profileImage?.url}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-orange-500 shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />

          {/* Personal Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Username", value: user.userName },
                { label: "Email", value: user.email },
                { label: "Phone", value: user.phone },
                { label: "Address", value: user.address },
                { label: "Role", value: user.role },
                { label: "Joined On", value: user.createdAt?.substring(0, 10) },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <label className="block text-sm font-medium text-white text-[20px]">{item.label}</label>
                  <input
                    type="text"
                    defaultValue={item.value}
                    className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-100 font-bold text-xl"
                    disabled
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Auctioneer Payment Details */}
          {user.role === "Auctioneer" && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-4">Payment Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Bank Name", value: user.paymentMethods.bankTransfer.bankName },
                  { label: "Bank Account", value: user.paymentMethods.bankTransfer.bankAccountNumber },
                  { label: "IFSC Code", value: user.paymentMethods.bankTransfer.bankAccountIFSC },
                  { label: "UPI ID", value: user.paymentMethods.upi.upiId },
                  { label: "Mobile", value: user.paymentMethods.mobile.mobileNo },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <label className="block font-medium text-gray-400 text-[20px]">{item.label}</label>
                    <input
                      type="text"
                      defaultValue={item.value}
                      className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-100 font-bold text-xl"
                      disabled
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default UserProfile;
