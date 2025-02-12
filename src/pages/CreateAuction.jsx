import { createAuction } from "../store/slices/auctionSlice";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

const CreateAuction = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [startingBid, setStartingBid] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const auctionCategories = [
    "Electronics",
    "Furniture",
    "Art & Antiques",
    "Jewelry & Watches",
    "Automobiles",
    "Real Estate",
    "Collectibles",
    "Fashion & Accessories",
    "Sports Memorabilia",
    "Books & Manuscripts",
  ];

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(file);
      setImagePreview(reader.result);
    };
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auction);

  const handleCreateAuction = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("condition", condition);
    formData.append("startingBit", startingBid);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    dispatch(createAuction(formData));
  };

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!isAuthenticated || user.role !== "Auctioneer") {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-[#0d0d0d] px-5 pt-20 flex flex-col items-center"
    >
      <h1 className="text-4xl font-extrabold text-[#ff6b6b] mb-8 drop-shadow-md">
        Create Auction
      </h1>
      <div className="bg-[#1a1a1a] border border-[#ff6b6b] w-full max-w-4xl rounded-xl shadow-lg p-8">
        <form className="space-y-6" onSubmit={handleCreateAuction}>
          <div>
            <label className="block text-lg font-medium text-white">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-richblack-600 bg-richblack-25 text-black rounded shadow-sm focus:ring-[#ff6b6b] focus:border-[#ff6b6b]"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-white">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-richblack-600 bg-richblack-25 text-black rounded shadow-sm focus:ring-[#ff6b6b] focus:border-[#ff6b6b]"
                required
              >
                <option value="">Select Category</option>
                {auctionCategories.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-white">Category</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-richblack-600 bg-richblack-25 text-black rounded shadow-sm focus:ring-[#ff6b6b] focus:border-[#ff6b6b]"
                required
              >
                <option value="">Select Condition</option>
                <option value="used">old</option>
                <option value="new">new</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xl font-medium text-white">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#d6482b] focus:border-[#d6482b]"
              rows={5}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-white">Starting Bid</label>
            <input
              type="number"
              value={startingBid}
              onChange={(e) => setStartingBid(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-richblack-600 bg-richblack-25 text-black rounded shadow-sm focus:ring-[#ff6b6b] focus:border-[#ff6b6b]"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-white">Auction Starting Time</label>
              <DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#d6482b] focus:border-[#d6482b]"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-white">Auction End Time</label>
              <DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#d6482b] focus:border-[#d6482b]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-white">Auction Item Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-richblack-25 border-dashed rounded relative">
              {imagePreview ? (
                <img src={imagePreview} alt={title} className="mx-auto h-48 w-auto rounded-md" />
              ) : (
                <p className="text-richblack-100 absolute">Upload an image</p>
              )}
              <input type="file" className="w-full opacity-0 cursor-pointer" onChange={imageHandler} />
            </div>
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full md:w-1/2 py-3 px-4 bg-[#ff6b6b] text-white font-semibold rounded hover:bg-[#b8381e] transition duration-300"
              disabled={loading}
            >
              {loading ? "Creating Auction..." : "Create Auction"}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.article>
  );
};

export default CreateAuction;
