import Spinner from "@/custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const { loading, leaderboard } = useSelector((state) => state.user);
  return (
    <>
      <section className="w-full border ml-0 m-0 min-h-screen px-5 pt-20 lg:pl-[320px] flex flex-col">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-2 mb-5 justify-center">
              <h1
                className={`text-richblack-25 text-xl font-bold mb-2 min-[480px]:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl`}
              >
                Bidders Leaderboard
              </h1>
            </div>
            <div className="overflow-x-auto flex justify-center">
              <table className="min-w-[80%] rounded-xl bg-richblue-50 my-5">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left">Profile Pic</th>
                    <th className="py-2 px-4 text-left">Username</th>
                    <th className="py-2 px-4 text-left">Bid Expenditure</th>
                    <th className="py-2 px-4 text-left">Auctions Won</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  { leaderboard.slice(0, 100).map((element, index) => {
                    return (
                      <tr
                        key={element._id}
                        className="border-b border-gray-300"
                      >
                        <td className="flex gap-2 items-center py-2 px-4">
                          <span className="text-stone-400 font-semibold text-xl w-7 hidden sm:block">
                            {index + 1}
                          </span>
                          <span>
                            <img
                              src={element.profileImage?.url}
                              alt={element.username}
                              className="h-12 w-12 object-cover rounded-full transition-all duration-100 hover:scale-110"
                            />
                          </span>
                        </td>
                        <td className="py-2 px-4 font-semibold text-xl">{element.userName}</td>
                        <td className="py-2 px-4 font-semibold text-xl">{element.moneySpend}</td>
                        <td className="py-2 px-4 font-semibold text-xl">{element.auctionsWon}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Leaderboard;
