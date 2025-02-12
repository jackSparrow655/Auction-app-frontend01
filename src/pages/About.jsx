
// import React from "react";

// const About = () => {
//   const values = [
//     {
//       id: 1,
//       title: "Integrity",
//       description:
//         "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
//     },
//     {
//       id: 2,
//       title: "Innovation",
//       description:
//         "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
//     },
//     {
//       id: 3,
//       title: "Community",
//       description:
//         "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
//     },
//     {
//       id: 4,
//       title: "Customer Focus",
//       description:
//         "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
//     },
//   ];

//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] gap-10 flex flex-col min-h-screen py-10 justify-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-[#d6482b] text-4xl font-bold mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
//             About Us
//           </h1>
//           <p className="text-xl text-stone-600 mb-8 leading-relaxed">
//             Welcome to PrimeBid, the ultimate destination for online auctions and
//             bidding excitement. Founded in 2024, we are dedicated to providing a
//             dynamic and user-friendly platform for buyers and sellers to connect,
//             explore, and transact in a secure and seamless environment.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <h3 className="text-[#111] text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl">
//             Our Mission
//           </h3>
//           <p className="text-xl text-stone-600 mb-8 leading-relaxed">
//             At PrimeBid, our mission is to revolutionize the way people buy and
//             sell items online. We strive to create an engaging and trustworthy
//             marketplace that empowers individuals and businesses to discover
//             unique products, make informed decisions, and enjoy the thrill of
//             competitive bidding.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <h3 className="text-[#111] text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl">
//             Our Values
//           </h3>
//           <ul className="space-y-6">
//             {values.map((element) => (
//               <li
//                 key={element.id}
//                 className="text-xl text-stone-600 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//               >
//                 <span className="text-[#d6482b] font-bold">{element.title}</span>:{" "}
//                 {element.description}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <h3 className="text-[#111] text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl">
//             Our Story
//           </h3>
//           <p className="text-xl text-stone-600 mb-8 leading-relaxed">
//             Founded by CodeWithZeeshu, PrimeBid was born out of a passion for
//             connecting people with unique and valuable items. With years of
//             experience in the auction industry, our team is committed to
//             creating a platform that offers an unparalleled auction experience
//             for users worldwide.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <h3 className="text-[#111] text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl">
//             Join Us
//           </h3>
//           <p className="text-xl text-stone-600 mb-8 leading-relaxed">
//             Whether you're looking to buy, sell, or simply explore, PrimeBid
//             invites you to join our growing community of auction enthusiasts.
//             Discover new opportunities, uncover hidden gems, and experience the
//             thrill of winning your next great find.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <p className="text-[#d6482b] text-2xl font-bold mb-3">
//             Thank you for choosing PrimeBid. We look forward to being a part of
//             your auction journey!
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;





import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] gap-10 flex flex-col min-h-screen py-10 justify-center bg-richblack-900 text-white">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa640] to-[#eeff02] text-5xl font-bold mb-6 sm:text-6xl md:text-7xl">
            About Us
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Welcome to Royal Bid, the ultimate destination for online auctions and
            bidding excitement. Founded in 2024, we are dedicated to providing a
            dynamic and user-friendly platform for buyers and sellers to connect,
            explore, and transact in a secure and seamless environment.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl text-caribbeangreen-100">
            Our Mission
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            At Royal Bid, our mission is to revolutionize the way people buy and
            sell items online. We strive to create an engaging and trustworthy
            marketplace that empowers individuals and businesses to discover
            unique products, make informed decisions, and enjoy the thrill of
            competitive bidding.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl text-caribbeangreen-100">
            Our Values
          </h3>
          <ul className="space-y-6">
            {values.map((element, index) => (
              <motion.li
                key={element.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-xl text-gray-300 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-100 transition-transform transform hover:scale-105"
              >
                <span className="text-red-400 font-bold">{element.title}</span>:{" "}
                {element.description}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl text-caribbeangreen-100">
            Our Story
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Founded by <span className="text-[#ff3030] font-bold italic">Arijit Barik</span>, Royal Bid was born out of a passion for
            connecting people with unique and valuable items. With years of
            experience in the auction industry, our team is committed to
            creating a platform that offers an unparalleled auction experience
            for users worldwide.
          </p>
        </motion.div>

        {/* Join Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.5 }} 
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl text-caribbeangreen-100">
            Join Us
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Whether you're looking to buy, sell, or simply explore, PrimeBid
            invites you to join our growing community of auction enthusiasts.
            Discover new opportunities, uncover hidden gems, and experience the
            thrill of winning your next great find.
          </p>
        </motion.div>

        {/* Final Message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }} 
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-[#eeff02] text-2xl font-bold mb-3">
            Thank you for choosing Royal Bid. We look forward to being a part of
            your auction journey!
          </p>
        </motion.div>

      </section>
    </>
  );
};

export default About;
