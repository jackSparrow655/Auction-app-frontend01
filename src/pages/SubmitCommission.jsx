import { postCommissionProof } from "../store/slices/commissionSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {motion} from 'framer-motion'

const SubmitCommission = () => {
  const [proof, setProof] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const proofHandler = (e) => {
    const file = e.target.files[0];
    setProof(file);
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.commission);
  const handlePaymentProof = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("proof", proof);
    formData.append("amount", amount);
    formData.append("comment", comment);
    dispatch(postCommissionProof(formData));
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
       className="w-full ml-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start bg-caribbeangreen-900 text-white">
       <h3 className="text-[#ff6b6b] text-2xl md:text-3xl mb-5 font-bold text-center">Upload Payment Proof</h3>
        <div className="bg-caribbeangreen-800 mx-auto w-full max-w-3xl h-auto px-6 py-6 flex flex-col gap-6 items-center justify-center shadow-2xl border border-pink-50 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 blur-3xl opacity-50"></div>
          <form
            className="flex flex-col gap-6 w-full relative z-10"
            onSubmit={handlePaymentProof}
          >
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium text-white">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-2xl text-black py-2 px-4 border rounded-xl focus:ring-2 focus:ring-[#d6482b] focus:outline-none transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium text-gray-300">Payment Proof (Screenshot)</label>
              <input
                type="file"
                onChange={proofHandler}
                className="text-lg py-2 px-4 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer focus:ring-2 focus:ring-[#d6482b] focus:outline-none transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium text-gray-300">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={5}
                className="text-2xl text-black py-2 px-4 border rounded-xl focus:ring-2 focus:ring-[#d6482b] focus:outline-none transition-all"
                required
              />
            </div>
            <button
              className="bg-[#3d2fff] mx-auto font-bold hover:bg-[#3e44f9] text-xl transition-all duration-300 py-3 px-6 rounded-xl text-white shadow-lg hover:shadow-richblue-100 transform hover:scale-105"
              type="submit"
            >
              {loading ? "Uploading..." : "Upload Payment Proof"}
            </button>
          </form>
        </div>
      </motion.section>
    </>
  );
};

export default SubmitCommission;
