import React from "react";
import { xgBanner3, xgSttream, xgTailored, xgUnclock } from "../assets";

const Whatwedo = () => {
  return (
    <div className="px-6 max-w-[1440px] mx-auto">
      <div className="w-full flex flex-col lg:min-h-[400px] ">
        <img src={xgBanner3} alt="Banner" className="lg:h-[103px] w-full" />
        <div className="  mt-6 flex flex-col">
          <h3 className="lg:text-[90px] text-[35px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] font-[600] leading-[105.48px]">
            What we do
          </h3>

          <p className="font-[400] text-[#120024] md:text-[20px] lg:text-[20px] py-4">
          Xogen Consulting helps companies implement platforms like Databricks and harness AI tools like ChatGPT to drive prospecting success in Commerical, Enterprise and Strategic accounts.
<br></br> <br></br>We enable Sales Engineers, BDRs, ISRs, and SDRs to be audible-ready with AI-powered messaging and account penetration strategies.
Our expertise blends data, AI, and go-to-market enablement for scalable impact.
We turn modern tools into real business outcomes.

<br></br><br></br>
Xogen is a proud Databricks Partner, providing deep consulting expertise in implementing, architecting, optimizing, and enabling organizations to unlock the full potential of the Databricks platform for data and AI success.
          </p>
        </div>
      </div>

      <hr className="mt-6" />

      {/* Spec */}
      <div className="flex lg:p-[20px] py-12 flex-row-reverse flex-wrap items-center justify-around" data-aos="fade-up">
        <div className="w-[100%] lg:w-[50%]">
          <div className="flex gap-2">
            <h2 className="md:text-[25px] text-[18px] text-[#f22b0a] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent font-[700]">
              Technical Sales Engineering readiness
            </h2>
          </div>
          <p className="lg:text-[20px] font-[500] py-4 leading-[40px]">
            <li>Mapping existing Data and cloud architecture and pain points</li>
            <li>Aligns solutions with business objectives.</li>
            <li>Creating future Data and cloud architecture and integration</li>
            <li>Learning to develop a technical champion</li>
          </p>
        </div>
        <div>
          <img
            src={xgSttream}
            alt="Banner"
            className="lg:h-[361px] lg:w-[506px]"
          />
        </div>
      </div>

      <div className="flex lg:p-[20px] py-12 flex-wrap items-center justify-around" data-aos="fade-left">
        <div className="w-[100%] lg:w-[40%]">
          <div className="flex gap-2">
            <h2 className="md:text-[25px] text-[18px] text-[#f22b0a] font-[700]">
              Data and Cloud Readiness
            </h2>
          </div>
          <p className="lg:text-[20px] font-[500] py-4 leading-[40px]">
            <li>Conduct Pre Assessment of Data landscape</li>
            <li>Best practices for data analytics delivery</li>
            <li>Conduct Gap Analysis</li>
            <li>Scoping Services</li>
            <li> Engineering Enablement</li>
          </p>
        </div>
        <div>
          <img
            src={xgUnclock}
            alt="Banner"
            className="lg:h-[361px] lg:w-[506px]"
          />
        </div>
      </div>

      <div className="flex lg:p-[20px] py-12 flex-row-reverse flex-wrap items-center justify-around" data-aos="fade-down">
        <div className="w-[100%] lg:w-[50%]">
          <div className="flex gap-2">
            <h2 className="md:text-[25px] text-[18px] text-[#f22b0a] font-[700] lg:leading-[105.48px]">
            General Information
            </h2>
          </div>
          <p className="lg:text-[20px] font-[500] py-4 leading-[40px]">
            <li>Established since 2014</li>
            <li>Over 25 years Data and Cloud enablement and implementation experience</li>
            <li>Over 20 successful project implementations</li>
            <li>Commercial experience with Financial Services, Retail, Healthcare, Manufacturing and Technology</li>
          </p>
        </div>
        <div>
          <img
            src={xgTailored}
            alt="Banner"
            className="lg:h-[361px] lg:w-[506px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
