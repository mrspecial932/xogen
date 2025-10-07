import React, { useState } from "react";
import { xgLogo } from "../../assets";
import { PrimaryButton } from "../components/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="md:h-[70px] h-[100px] flex justify-center items-start">
      <div className="lg:h-[78.81px]  h-[70px] fixed z-50 w-full bg-[#0B0202]">
        <div className="w-full h-full max-w-[1440px] mx-auto flex justify-between items-center px-6">
          <Link to={"/"} onClick={handleLinkClick}>
            <img
              src={xgLogo}
              alt=""
              className="lg:w-fit lg:h-fit w-[100px] h-[100px]"
            />
          </Link>

          <ul className="text-white lg:text-[16px] text-[14px] hidden gap-8 md:flex">
            <Link to={"/about"} onClick={handleLinkClick}>
              <li className="">About Xogen</li>
            </Link>
            <Link to={"/what-we-do"} onClick={handleLinkClick}>
              <li className="">What we do</li>
            </Link>
            <Link to={"/use-cases"} onClick={handleLinkClick}>
              <li className="">Use Cases</li>
            </Link>
            <Link to={"/contact"} onClick={handleLinkClick}>
              <li className="">Contact us</li>
            </Link>
          </ul>
          <Link to={"/contact"} onClick={handleLinkClick}>
            <div className="lg:w-[141.92px] w-[70px] hidden md:flex  bg-[#f22b0a] lg:text-[18px] text-[14px] lg:h-[43.37px] h-[30px] rounded-[5.91px]">
              <PrimaryButton label={"Try Xogen"} />
            </div>
          </Link>

          <div
            className="lg:w-[141.92px] w-[120px] md:hidden flex  bg-[#f22b0a] lg:text-[25px] lg:h-[63.37px] h-[40px] rounded-[5.91px]"
            onClick={() => setOpen(true)}
          >
            <PrimaryButton label={"MENU"} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="h-[100vh] z-[100] fixed bottom-0 w-full bg-black">
          <div className="lg:w-[141.92px] w-[120px] absolute top-5 right-5  bg-[#f22b0a] lg:text-[25px] lg:h-[63.37px] h-[40px] rounded-[5.91px]" onClick={() => setOpen(false)}>
            <PrimaryButton label={"CLOSE"} />
          </div>
          <ul className="text-white font-[700] flex flex-col w-full h-full justify-center items-center text-[30px] gap-4">
            <Link to={"/about"} onClick={() => { setOpen(false); handleLinkClick(); }}>
              <li className="">About Xogen</li>
            </Link>
            <Link to={"/what-we-do"} onClick={() => { setOpen(false); handleLinkClick(); }}>
              <li className="">What we do</li>
            </Link>
            <Link to={"/use-cases"} onClick={() => { setOpen(false); handleLinkClick(); }}>
              <li className="">Use Cases</li>
            </Link>
            <Link to={"/contact"} onClick={() => { setOpen(false); handleLinkClick(); }}>
              <li className="">Contact us</li>
            </Link>

            <Link to={"/contact"} onClick={() => { setOpen(false); handleLinkClick(); }}>
            <div className="w-[141.92px] flex bg-[#f22b0a] lg:text-[25px] text-[19px] mt-6 lg:h-[63.37px] h-[50px] rounded-[5.91px]">
              <PrimaryButton label={"Try Xogen"} />
            </div>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
