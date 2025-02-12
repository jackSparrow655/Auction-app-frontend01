import {
  clearAllSuperAdminSliceErrors,
  getAllPaymentProofs,
  getAllUsers,
  getMonthlyRevenue,
} from "@/store/slices/superAdminSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuctionItemDelete from "./sub-components/AuctionItemDelete";
import BiddersAuctioneersGraph from "./sub-components/BiddersAuctioneersGraph";
import PaymentGraph from "./sub-components/PaymentGraph";
import PaymentProofs from "./sub-components/PaymentProofs";
import Spinner from "@/custom-components/Spinner";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.superAdmin);
  useEffect(() => {
    dispatch(getMonthlyRevenue());
    dispatch(getAllUsers());
    dispatch(getAllPaymentProofs());
    dispatch(clearAllSuperAdminSliceErrors());
  }, []);

  const { user, isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (user.role !== "SuperAdmin" || !isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="w-full min-h-screen text-white px-6 pt-20 lg:pl-[320px] flex flex-col gap-10">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-2xl md:text-4xl font-extrabold bg-clip-text w-fit text-transparent bg-gradient-to-r from-caribbeangreen-100 to-caribbeangreen-500">
            Dashboard
          </h1>
          <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl shadow-lg col-span-1 border">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">Monthly Total Payments Received</h3>
              <PaymentGraph />
            </div>
            <div className="p-6 rounded-xl shadow-lg col-span-1 border">
              <h3 className="text-2xl font-semibold mb-4">Users</h3>
              <BiddersAuctioneersGraph />
            </div>
          </div>
            <div className="p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Payment Proofs</h3>
              <PaymentProofs />
            </div>
            <div className="p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">Delete Items From Auction</h3>
              <AuctionItemDelete />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
