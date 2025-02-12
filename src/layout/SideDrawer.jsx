import React, { useState, useEffect, useRef } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaUserCircle, FaFileInvoiceDollar, FaEye } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300);
   // Default width
  const sidebarRef = useRef(null);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // Handle resizing
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar){
      return
    } 

    const handleMouseDown = (e) => {
      const startX = e.clientX;
      const startWidth = sidebar.offsetWidth;

      const handleMouseMove = (e) => {
        const newWidth = startWidth + (e.clientX - startX);
        if (newWidth >= 200) {
          // Set minimum width
          setSidebarWidth(newWidth);
        }
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const resizeHandle = document.createElement("div");
    resizeHandle.style.width = "10px";
    resizeHandle.style.height = "100%";
    resizeHandle.style.position = "absolute";
    resizeHandle.style.top = "0";
    resizeHandle.style.right = "0";
    resizeHandle.style.cursor = "ew-resize";
    resizeHandle.addEventListener("mousedown", handleMouseDown);

    sidebar.appendChild(resizeHandle);

    return () => {
      resizeHandle.removeEventListener("mousedown", handleMouseDown);
      sidebar.removeChild(resizeHandle);
    };
  }, []);


  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="fixed left-5 top-5 z-20 bg-blue-500 text-white text-xl p-2 rounded hover:bg-[#b8381e] cursor-pointer 2xl:hidden"
      >
        <GiHamburgerMenu />
      </div>
      <div
        ref={sidebarRef}
        className={`bg-richblue-900 text-white h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-300 p-6 flex flex-col justify-between 2xl:left-0 border-r-[1px] border-r-[#e0e0e0] shadow-lg z-40 overflow-auto top-[90px]`}
        style={{ width: `${sidebarWidth}px` }}
      >
        <div className="relative">
          {/* <Link to={"/"}>
            <h4 className="text-2xl font-bold mb-8 text-purple-700">
              King<span className="text-red-700">Bid</span>
            </h4>
          </Link> */}
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to={"/auctions"}
                className="flex text-lg font-medium gap-3 items-center text-lime-500 hover:text-richblue-500 hover:bg-richblue-200 p-2 rounded-lg transition-all duration-200"
              >
                <RiAuctionFill className="text-2xl" /> Auctions
              </Link>
            </li>
            <li>
              <Link
                to={"/leaderboard"}
                className="flex text-lg font-medium gap-3 items-center text-lime-400 hover:text-richblue-500 hover:bg-richblue-200 p-2 rounded-lg transition-all duration-200"
              >
                <MdLeaderboard className="text-2xl" /> Leaderboard
              </Link>
            </li>
            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <li>
                  <Link
                    to={"/submit-commission"}
                    className="flex text-lg font-medium gap-3 items-center text-lime-400 hover:text-richblue-500 hover:bg-richblue-200 p-2 rounded-lg transition-all duration-200"
                  >
                    <FaFileInvoiceDollar className="text-2xl" /> Submit Commission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/create-auction"}
                    className="flex text-lg font-medium gap-3 items-center text-lime-400 hover:text-richblue-500 hover:bg-richblue-200 p-2 rounded-lg transition-all duration-200"
                  >
                    <IoIosCreate className="text-2xl" /> Create Auction
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/view-my-auctions"}
                    className="flex text-lg font-medium gap-3 items-center text-lime-400 hover:text-richblue-500 hover:bg-richblue-200 p-2 rounded-lg transition-all duration-200"
                  >
                    <FaEye className="text-2xl" /> View My Auctions
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "SuperAdmin" && (
              <li>
                <Link
                  to={"/dashboard"}
                  className="flex text-lg font-medium gap-3 items-center text-lime-400 hover:text-richblue-500 hover:bg-richblue-200 p-2 rounded-lg transition-all duration-200"
                >
                  <MdDashboard className="text-2xl" /> Dashboard
                </Link>
              </li>
            )}
          </ul>
          {!isAuthenticated ? (
            <div className="my-6 flex gap-3">
              <Link
                to={"/sign-up"}
                className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-lg py-2 px-6 rounded-lg text-white transition-all duration-200"
              >
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="text-[#D6482B] bg-transparent border-[#D6482B] border-2 hover:bg-[#D6482B] hover:text-white font-semibold text-lg py-2 px-6 rounded-lg transition-all duration-200"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="my-6">
              <button
                onClick={handleLogout}
                className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-lg py-2 px-6 rounded-lg text-white w-full transition-all duration-200"
              >
                Logout
              </button>
            </div>
          )}
          <hr className="my-6 border-t-[#e0e0e0]" />
          <ul className="flex flex-col gap-4">
            {isAuthenticated && (
              <li>
                <Link
                  to={"/me"}
                  className="flex text-lg font-medium gap-3 items-center text-lime-400 hover:text-richblue-500 hover:bg-richblue-200 p-2 rounded-lg transition-all duration-200"
                >
                  <FaUserCircle className="text-xl" /> Profile
                </Link>
              </li>
            )}
            <li>
              <Link
                to={"/how-it-works-info"}
                className="flex text-lg font-medium gap-3 items-center text-lime-400 hover:text-richblue-500 hover:bg-richblue-200 p-2 rounded-lg transition-all duration-200"
              >
                <SiGooglesearchconsole className="text-xl" /> How it works
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="flex text-lg font-medium gap-3 items-center text-lime-400 hover:text-richblue-500 hover:bg-richblue-200 p-2 rounded-lg transition-all duration-200"
              >
                <BsFillInfoSquareFill className="text-xl" /> About Us
              </Link>
            </li>
          </ul>
          <IoMdCloseCircleOutline
            onClick={() => setShow(!show)}
            className="absolute top-0 right-4 text-3xl text-[#D6482B] cursor-pointer sm:hidden"
          />
        </div>

        <div className="mt-8">
          <div className="flex gap-3 items-center mb-4">
            <Link
              to="/"
              className="bg-[#f9f9f9] text-lime-400 p-2 text-xl rounded-lg hover:bg-[#D6482B] hover:text-white transition-all duration-200"
            >
              <FaFacebook />
            </Link>
            <Link
              to="/"
              className="bg-[#f9f9f9] text-lime-400 p-2 text-xl rounded-lg hover:bg-[#D6482B] hover:text-white transition-all duration-200"
            >
              <FaInstagram />
            </Link>
          </div>
          <Link
            to={"/contact"}
            className="text-lime-400 font-medium hover:text-richblue-500 transition-all duration-200"
          >
            Contact Us
          </Link>
          <p className="text-[#777] text-sm mt-2">&copy; PrimeBid, LLC.</p>
          <p className="text-[#777] text-sm">
            Designed By{" "}
            <Link
              to={"/"}
              className="font-medium hover:text-richblue-500 transition-all duration-200"
            >
              CodeWithZeeshu
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;