
import Card from "@/custom-components/Card";
import React from "react";
import { useSelector } from "react-redux";

const FeaturedAuctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);
  
  return (
    <section className="my-12 px-6">
      <h3 className="text-gray-900 text-3xl font-bold text-center mb-6">Featured Auctions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allAuctions.slice(0,8).map((element) => (
                <Card
                  title={element.title}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  imgSrc={element.image?.url}
                  startingBid={element.startingBit}
                  id={element._id}
                  key={element._id}
                />
              ))}
      </div>
    </section>
  );
};

export default FeaturedAuctions;