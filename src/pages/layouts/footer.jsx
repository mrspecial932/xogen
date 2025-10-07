import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/button";
import { xgArrow, xgFace, xgInsta, xgLink, xgLogo2 } from "../../assets/index";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="py-32 lg:px-12 px-6">
        <div className="border relative border-[#D5D5D5] lg:h-[500px] h-[200px] rounded-[14px] flex flex-col justify-center items-center">
          <p className="lg:text-[22px] text-[14px] lg:w-[765px] w-[90%] text-center">
            Get the latest in AI trends, tips, and updates straight to your
            inbox. Don’t miss out—join the Xogen community today!
          </p>

          <div className="lg:w-[683px] w-[90%] lg:h-[77px] h-[50px] flex mt-6">
            <div className="lg:w-[491px] w-[80%] h-full border-[0.35px] border-[#00000050] rounded-l-[5.91px]">
              <input
                type="text"
                className="border-none outline-none h-full w-full px-4 lg:text-[18px] text-[14px] bg-transparent"
                placeholder="Enter your email to subscribe"
              />
            </div>
            <div className="lg:w-[192px] w-[160px] bg-[#f22b0a] lg:text-[16px] h-full rounded-r-[5.91px]">
              <PrimaryButton label={"Subscribe"} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap px-6 gap-5  justify-between">
          <div className="w-[430px]">
            <Link to="/" onClick={handleLinkClick}>
              <img src={xgLogo2} alt="" className="lg:h-[119.34px] h-[90px] cursor-pointer" />
            </Link>
            <div className="lg:px-4 md:text-[18px] text-[14px] font-[600] space-y-2">
              {/* <li>Bertie Farm Court</li>
              <li>Laytonsville</li>
              <li>MD 20882</li> */}
            </div>

            <div className="flex gap-4 mt-6 lg:px-4">
              <div>
                <img src={xgLink} alt="" className="md:h-[59px] h-[40px] w-[40px] md:w-[67px]" />
              </div>
              <div>
                <img src={xgInsta} alt="" className="md:h-[59px] h-[40px] w-[40px] md:w-[67px]" />
              </div>
              <div>
                <img src={xgFace} alt="" className="md:h-[59px] h-[40px] w-[40px] md:w-[67px]" />
              </div>
            </div>
          </div>

          <div className="mt-4 w-full md:w-fit">
            <span className="flex gap-3 items-center">
              <h2 className="text-[20px] font-[700]">Overview </h2>
              <img src={xgArrow} alt="" className="w-[15px] h-[15px]" />
            </span>
            <div className="lg:text-[18px] text-[14px] space-y-4 font-[600] mt-4">
              <li className="hover:text-[#f22b0a] transition-colors cursor-pointer">
                <Link to="/about" onClick={handleLinkClick}>About Xogen</Link>
              </li>
              <li className="hover:text-[#f22b0a] transition-colors cursor-pointer">
                <Link to="/what-we-do" onClick={handleLinkClick}>What we do</Link>
              </li>
              <li className="hover:text-[#f22b0a] transition-colors cursor-pointer">
                <Link to="/use-cases" onClick={handleLinkClick}>Use Cases</Link>
              </li>
              <li className="hover:text-[#f22b0a] transition-colors cursor-pointer">
                <Link to="/contact" onClick={handleLinkClick}>Contact us</Link>
              </li>
            </div>
          </div>

          <div className="mt-4">
            <span className="flex gap-3 items-center">
              <h2 className="md:text-[20px] text-[18px] font-[700]">Documentation </h2>
              <img src={xgArrow} alt="" className="w-[15px] h-[15px]" />
            </span>
            <div className="lg:text-[18px] space-y-4 text-[14px] font-[600] mt-4">
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Terms & Conditions</li>
              <li>Legal Center</li>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-t-[#000000] py-6 pb-12 mt-12 text-center">
        <p className="lg:text-[16px] text-[14px]">
          © Copyright 2024 | Company registration No. 1234567
        </p>
      </div>
    </div>
  );
};

export default Footer;
