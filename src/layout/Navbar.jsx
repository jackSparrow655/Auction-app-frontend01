import {Menu, X} from "lucide-react"
import { useState } from "react";
import React from "react";
import logo from "../assets/logo.png";
import Button from "@/custom-components/Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { label: "Features", href: "#" },
        { label: "Workflow", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "Testimonials", href: "#" },
      ];

    function toggleNavbar(){
        setIsOpen(!isOpen)
    }

  return (
    <nav className={`sticky top-0 z-10 py-4 backdrop-blur-lg w-full px-5 border-b border-white h-[90px]`}>
      <div className="relative text-sm">
        <div className="flex items-center justify-between w-full">
          <div className="flex item-center flex-shrink-0 shadow-caribbeangreen-5 shadow ml-20 lg:ml-15 rounded-xl border border-white">
            <img src={logo} alt="logo" className="h-12 w-14 md:w-20 mr-2 rounded-xl" />
            <span className="text-xl md:text-2xl italic bg-clip px-3 font-bold tracking-tight flex items-center text-white">
              Royal Bid
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-white">
            {navItems.map((item, index) => (
              <li key={index} className="text-lg">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-5 items-center">
            <Button content={"Register"} isHighlight={false} />
            <Button content={"Log In"} isHighlight={true} />
          </div>
          <div className="lg:hidden md:flex flex-col justify-end text-white">
            <button onClick={toggleNavbar} >
                {isOpen? <X /> : <Menu/>}
            </button>
        </div>
        </div>
        {
            isOpen && (
                <div className="fixed right-0 z-20 bg-caribbeangreen-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li className="py-4 text-white font-medium text-xl" key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4">
                        <Button content={"Sign In"} isHighlight={false} />
                        <Button content={"Create an Account"} isHighlight={true} />
                    </div>
                </div>
            )
        }
      </div>
    </nav>
  );
};

export default Navbar;
