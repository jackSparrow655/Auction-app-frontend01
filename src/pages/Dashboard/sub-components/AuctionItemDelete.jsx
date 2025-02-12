import { deleteAuctionItem } from "../../../store/slices/superAdminSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AuctionItemDelete = () => {
  const { allAuctions } = useSelector((state) => state.auction);
  const dispatch = useDispatch();

  const handleAuctionDelete = (id) => {
    dispatch(deleteAuctionItem(id));
  };

  return (
    <>
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full bg-richblue-500 border-gray-300 border">
          <thead className="bg-gray-800 text-white border-b border-richblack-500">
            <tr>
              <th className="py-2 px-4 text-left text-xl">Image</th>
              <th className="py-2 px-4 text-left text-xl">Title</th>
              <th className="py-2 px-4 text-left text-xl">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {allAuctions.length > 0 ? (
              allAuctions.map((element) => {
                return (
                  <tr key={element._id} className="border-b border-richblack-500 hover:bg-richblue-700">
                    <td className="py-2 px-4">
                      <img
                        src={element.image?.url}
                        alt={element.title}
                        className="h-12 w-12 object-cover rounded"
                      />
                    </td>
                    <td className="py-2 px-4">{element.title}</td>
                    <td className="py-3 px-4 flex space-x-2">
                      <Link
                        to={`/auction/details/${element._id}`}
                        className="bg-caribbeangreen-300 rounded text-white font-medium py-1 px-3 hover:bg-caribbeangreen-500 transition-all duration-300"
                      >
                        View
                      </Link>
                      <button
                        className="bg-pink-200 rounded text-black font-medium py-1 px-3 hover:bg-pink-400 transition-all duration-300"
                        onClick={() => handleAuctionDelete(element._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="text-left text-xl text-sky-600 py-3">
                <td>No Auctions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AuctionItemDelete;
