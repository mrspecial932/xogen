import React from "react";
import { Link } from "react-router-dom";
import {
  xgAi,
  xgAnalystics,
  xgAuto,
  xgBanner,
  xgBanner1,
  xgDiscover,
  xgSecurity,
} from "../assets";
import { PrimaryButton } from "./components/button";

const Home = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-6 md:max-w-[1440px] mx-auto">
      <div className="w-full lg:flex-row-reverse flex-col-reverse flex  min-h-[600px]  justify-center gap-6 items-center">
        <img
          src={xgBanner}
          alt="Banner"
          className="rounded-[10px] mt-6 md:mt-0 lg:w-[530px]"
        />
        <div className="lg:w-[800px] flex flex-col justify-center items-start">
          <h3 className="lg:text-[40px] md:text-[30px] text-[20px] font-[700]" data-aos="slide-up">
            Leading AI Enablement and Consulting Solutions for{" "}
            <span className="bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent">
              Exceptional Results
            </span>
          </h3>

          <p className="font-[400] text-[#120024] mt-4 lg:text-[18px] text-[14px]" data-aos="fade-left">
          Xogen delivers world-class technical sales enablement and fractional CRO and CDO consulting services to accelerate, transform and improve sales and close velocity rates for SaaS companies.
          </p>
          <Link to="/contact" onClick={handleLinkClick}>
            <div className="lg:w-[302.73px] px-4 mt-6 bg-[#f22b0a] lg:text-[18px] text-[14px] lg:h-[74px] h-[50px] rounded-[5.91px]">
              <PrimaryButton label={"Request a Demo now"} />
            </div>
          </Link>
        </div>
      </div>

      {/* Customer */}
      {/* <div className="md:pt-0 pt-6">
        <h3 className="lg:text-[45px] text-[20px] text-center md:text-start font-[700]">
          Our Customers
        </h3>
        <div className="w-full flex flex-wrap justify-between mt-4 gap-6">
          <div className="md:w-[176px] w-[130px] h-[50px] bg-[#eee]"></div>
          <div className="md:w-[176px] w-[130px] h-[50px] bg-[#eee]"></div>
          <div className="md:w-[176px] w-[130px] h-[50px] bg-[#eee]"></div>
          <div className="md:w-[176px] w-[130px] h-[50px] bg-[#eee]"></div>
        </div>
      </div> */}

      <hr className="mt-12" />

      {/* Features */}
      <div className="flex justify-between gap-12 flex-wrap py-12">
        <div className="md:w-[45%] w-full" data-aos="fade-right">
          <div className="lg:h-[288px] h-[180px] bg-[#eee] rounded-[10px] w-full">
            <img
              src={xgAuto}
              alt="Banner"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <h2 className="lg:mt-0 mt-4 lg:text-[30px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] text-[18px] md:py-6 py-3  font-[700]">
            Technical Sales Enablement
          </h2>
          <p className="lg:text-[20px]">
            Xogen delivers its proprietary F.A.N.T.A.S.T.I.C. methodology, a
            one-day whiteboard session and group workshop that equips technical
            sales teams to align technical capabilities with business goals,
            improve solution demos, and secure stakeholder buy-in, driving deal
            success.
          </p>
        </div>
        <div className="md:w-[45%] w-full" data-aos="fade-right">
          <div className="lg:h-[288px] h-[180px] bg-[#eee] rounded-[10px] w-full">
            <img
              src={xgAnalystics}
              alt="Banner"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <h2 className="lg:mt-0 mt-4 lg:text-[30px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] text-[20px] md:py-6 py-3  font-[700]">
            Sales Enablement and Fractional Consulting
          </h2>
          <p className="lg:text-[20px]">
            Xogen offers fractional CRO or CDO services, extending the sales
            team for companies lacking internal capabilities and providing
            leadership to ensure sales success.
          </p>
        </div>

        <div className="md:w-[45%] w-full" data-aos="fade-right">
          <div className="lg:h-[288px] h-[180px] bg-[#eee] rounded-[10px] w-full">
            <img
              src={xgAi}
              alt="Banner"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <h2 className="lg:mt-0 mt-4 lg:text-[30px] text-[#f22b0a] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[20px] md:py-6 py-3  font-[700]">
            Data and AI Implementation Services
          </h2>
          <p className="lg:text-[20px]">
            Xogen provides consultative services in data and AI, helping
            organizations implement and manage advanced data solutions
            effectively.
          </p>
        </div>

        <div className="md:w-[45%] w-full" data-aos="fade-right">
          <div className="lg:h-[288px] h-[180px] bg-[#eee] rounded-[10px] w-full">
            <img
              src={xgSecurity}
              alt="Banner"
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <h2 className="lg:mt-0 mt-4 lg:text-[30px] text-[#f22b0a] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[20px] md:py-6 py-2 font-[700]">
            AI-Powered Security
          </h2>
          <p className="lg:text-[20px]">
            Safeguard your business with AI that detects and prevents threats,
            ensuring transparency and protection.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center items-center flex-wrap py-24">
        <div className="h-[362px] bg-[#eee] rounded-[10px] w-full">
          <img
            src={xgBanner1}
            alt="Banner"
            className="w-full h-full rounded-[10px] object-cover object-top"
          />
        </div>
        {/* <div className="flex items-center flex-wrap justify-center gap-2 py-6" data-aos="slide-up">
          <h2 className="lg:mt-0 mt-4 lg:text-[62px] text-[20px] font-[800] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] lg:leading-[105.48px]">
            Simplifying Innovation and Growth
          </h2> */}
          {/* <h2 className="lg:mt-0 mt-4 lg:text-[62px] text-[31px] lg:leading-[105.48px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent">
            Innovation and Growth
          </h2> */}
        </div>
        {/* <p className="lg:text-[25px] w-[1187px] md:text-center">
          At Xogen, we believe AI should be accessible, adaptable, and
          affordable. From start-ups to enterprises, our AI solutions help
          businesses innovate faster, reduce operational costs, and create
          better customer experiences. We take the complexity out of AI, so you
          can focus on what matters.
        </p> */}
      {/* </div> */}

      {/* <div className="py-24">
        <h3 className="text-[45px] font-[700]">What our clients are saying</h3>
        <div className="w-full flex justify-between mt-4 flex-wrap gap-6">
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full">
              <img
                src={xgCustomer1}
                alt="Banner"
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <h2 className="lg:mt-0 mt-4 lg:text-[25px] text-[20px] font-[700]">
              Xogen transformed our workflow.
            </h2>
            <p className="lg:text-[20px]">
              With Xogen’s automation tools, we’ve saved hours of manual work
              every week. It’s like having an extra team member—except smarter!
            </p>
            <h2 className="lg:mt-0 mt-4 text-[16px] font-[900]">
              Ada E., Product Manager at DigiTech
            </h2>
          </div>
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full">
              <img
                src={xgCustomer2}
                alt="Banner"
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <h2 className="lg:mt-0 mt-4 lg:text-[25px] text-[20px] font-[700]">
              Insightful and user-friendly.
            </h2>
            <p className="lg:text-[20px]">
              The AI analytics provided by Xogen gave us insights we never
              thought possible. Our strategy is now entirely data-driven.
            </p>
            <h2 className="lg:mt-0 mt-4 text-[16px] font-[900]">
              Femi T., Founder of NeoMarkets
            </h2>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full">
              <img
                src={xgCustomer3}
                alt="Banner"
                className="w-full h-full rounded-[10px]"
              />
            </div>
            <h2 className="lg:mt-0 mt-4 lg:text-[25px] text-[20px] font-[700]">
              Tailored AI solutions that work.
            </h2>
            <p className="lg:text-[20px]">
              Xogen helped us design a custom AI system that has revolutionized
              the way we handle customer data. Highly recommended!
            </p>
            <h2 className="lg:mt-0 mt-4 text-[16px] font-[900]">
              Sarah L., CTO of Globetek
            </h2>
          </div>
        </div>
      </div> */}

      {/* Discovery */}
      <div className="flex flex-wrap  lg:p-[24px] justify-between items-center" data-aos="slide-up">
        <div className="lg:w-[50%]">
          <div className="flex flex-wrap gap-2">
            <h2 className="lg:mt-0 md:text-[50px] text-[20px] font-[800] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a]">
              Discover Real Impact
            </h2>
            {/* <h2 className="lg:mt-0 md:text-[50px] text-[30px] lg:leading-[105.48px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent">
              Real Impact
            </h2> */}
          </div>
          <p className="lg:text-[25px]">
            Explore detailed use cases and learn how our AI solutions have made
            a difference for our clients. Dive into success stories and get
            inspired!
          </p>

          <Link to="/use-cases" onClick={handleLinkClick}>
            <div className="lg:w-[242.73px] w-[200px] mt-6 bg-[#f22b0a] lg:text-[18px] text-[14px] lg:h-[74px] h-[56px] rounded-[5.91px]">
              <PrimaryButton label={"Read our use cases"} />
            </div>
          </Link>
        </div>
        <div className="lg:flex hidden justify-center items-center">
          <img
            src={xgDiscover}
            alt="Banner"
            className="lg:h-[371.5px] w-full md:h-[400px] lg:mt-0 mt-6 lg:w-[437.3px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
