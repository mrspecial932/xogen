import React from "react";
import {
  xgAdvanceSvg,
  xgBanner3,
  xgBulb,
  xgCentric,
  xgCollab,
  xgCustomSvg,
  xgDrivenSvg,
  xgExcel,
  xgInsta,
  xgIntegrity,
  xgRobotSvg,
  xgStory,
  xgteam1,
  xgteam2,
  xgteam3,
} from "../assets";
import { PrimaryButton } from "./components/button";

const About = () => {
  return (
    <div className="px-6 max-w-[1440px] mx-auto">
      <div className="w-full flex flex-col lg:min-h-[400px]">
        <img src={xgBanner3} alt="Banner" className="lg:h-[103px] w-full" />
        <div className=" mr-10 mb-12  mt-6 flex flex-col ">
          <h3 className="lg:text-[90px] text-[35px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] font-[500]  leading-[105.48px]">
            About Us
          </h3>

          <p className="font-[400] text-[#120024] lg:text-[20px] text-[18px] mt-4">
          Xogen empowers organizations through Technical Sales Enablement, Fractional Leadership, and Data and AI Implementation Services. Leveraging its proprietary F.A.N.T.A.S.T.I.C. methodology, Xogen conducts focused workshops to align technical capabilities with business goals, enhancing demos and securing stakeholder buy-in.
<br/> <br/> As a fractional CRO or CDO, Xogen provides strategic leadership and sales enablement to scale teams, drive revenue growth, and deliver measurable results.
<br/> <br/>
For data and AI initiatives, Xogen offers end-to-end consulting services, from discovery to implementation, enabling businesses to effectively adopt and scale advanced solutions. 
<br></br>
<br></br>
   Xogen provides Databricks consulting and enablement services from architecture design to implementation.
          </p>
        </div>
      </div>

      <hr className="mt-6" />

      {/* Spec */}
      <div className="flex flex-wrap lg:p-[24px] justify-between">
        <div className="lg:w-[40%] w-full">
          <div className="flex gap-2">
            <h2 className="text-[50px] font-[600] leading-[105.48px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a]">
              Our Story
            </h2>
          </div>
          <p className="text-[20px]">
            Xogen.ai is an ai enablement and consulting business specializing in technical enable and
            sales enablement as well as providing fractional sales guidance for
            SaaS-based companies
          </p>
          <p className="text-[20px] mt-6">
            We align knowledge with business goals, deliver custom IT and data
            solutions, and provide cutting-edge training and implementation.
          </p>
          <p className="text-[20px] mt-6">
            Xogen empowers startups and Enterprise SaaS to grow, innovate, and
            succeed in a rapidly evolving digital data and IT landscape.
          </p>
        </div>
        <div>
          <img
            src={xgStory}
            alt="Banner"
            className="lg:h-[664px] lg:w-[437.3px]"
          />
        </div>
      </div>

      <div className="w-full flex py-12 justify-center items-center">
        <div className=" text-center mt-6 flex flex-col justify-center items-center">
          <h3 className="lg:text-[90px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] text-[35px] font-[400] leading-[105.48px]">
            Our specialty
          </h3>

          <p className="font-[400] mt-3 text-[#120024] lg:text-[20px] text-[16px]">
            At Xogen, we offer cutting-edge AI services that simplify complexity
            and drive results. From automating repetitive tasks to providing
            deep data insights, our solutions are designed to help businesses
            optimize performance and innovate with confidence.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mt-6">
        <div className="text-center flex flex-wrap gap-6 justify-between items-center w-full">
          <div className="md:w-[25%] w-full shadow-md bg-white h-[300px] flex flex-col justify-center items-center">
            <img src={xgDrivenSvg} alt="Banner" className="h-[103px] w-full" />
            <p className="font-[500] mt-2 text-[20px]">
              Technical Sales Framework
            </p>
            {/* <p className="md:w-[252px]">
              Boost efficiency by automating everyday processes
            </p> */}
            <div className="w-[141.92px] flex bg-[#f22b0a] text-[16px]  mt-6 lg:h-[63.37px] h-[50px] rounded-[5.91px]">
              <PrimaryButton label={"Learn more"} />
            </div>
          </div>

          <div className="md:w-[25%] w-full shadow-md bg-white h-[300px] flex flex-col justify-center items-center">
            <img src={xgAdvanceSvg} alt="Banner" className="h-[103px] w-full" />
            <p className="font-[500] mt-2 text-[20px]">
              Fractional Sales Consulting
            </p>
            {/* <p className="md:w-[252px]">
              Unlock the power of your data for smarter decisions.
            </p> */}
            <div className="w-[141.92px] flex bg-[#f22b0a] text-[16px]  mt-6 lg:h-[63.37px] h-[50px] rounded-[5.91px]">
              <PrimaryButton label={"Learn more"} />
            </div>
          </div>

          <div className="md:w-[25%] w-full shadow-md bg-white h-[300px] flex flex-col justify-center items-center">
            <img src={xgCustomSvg} alt="Banner" className="h-[103px] w-full" />
            <p className="font-[500] mt-2 text-[20px]">
              Data and AI Consulting
            </p>
            {/* <p className="md:w-[252px]">
              Tailored AI to meet your unique business needs.
            </p> */}
            <div className="w-[141.92px] flex bg-[#f22b0a] text-[16px]  mt-6 lg:h-[63.37px] h-[50px] rounded-[5.91px]">
              <PrimaryButton label={"Learn more"} />
            </div>
          </div>

          {/* <div>
            <img src={xgRobotSvg} alt="Banner" className="h-[103px] w-full" />
            <p className="font-[500] mt-2 text-[20px]">AI Security</p>
            <p className="md:w-[252px]">
              Keep your business secure with advanced AI threat detection.
            </p>
          </div> */}
        </div>
      </div>

      {/* Team */}
      <div className="lg:py-24 py-12">
        <h3 className="lg:text-[45px] text-[23px] text-[#f22b0a] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent font-[700]">
          Our Team
        </h3>
        <div className="w-full flex flex-wrap justify-between mt-4 gap-6">
          <div className="lg:w-[356px]">
            {/* <div className="h-[320px] bg-[#eee] rounded-[10px] w-full">
              <img src={xgteam1} alt="" className="w-full h-full" />
            </div> */}
            <h2 className="lg:text-[30px] text-[20px] lg:mt-0 mt-6 font-[700]">
              Jimmy O. – CEO
            </h2>
            {/* <p className="text-[20px]">
              David leads Xogen with 15+ years of AI and tech experience. His
              focus on innovation and business strategy drives the company’s
              growth and success.
            </p> */}
          </div>
          <div className="lg:w-[356px]">
            {/* <div className="h-[320px] bg-[#eee] rounded-[10px] w-full">
              <img src={xgteam2} alt="" className="w-full h-full" />
            </div> */}
            <h2 className="lg:text-[30px] text-[20px] lg:mt-0 mt-4 font-[700]">
              Lanre B. – CTO
            </h2>
            {/* <p className="text-[20px]">
              Amina oversees Xogen’s AI technology, transforming complex
              challenges into scalable, user-friendly solutions. She’s a leader
              in AI development and data science.
            </p> */}
          </div>

          <div className="lg:w-[356px]">
            {/* <div className="h-[320px] bg-[#eee] rounded-[10px] w-full">
              <img src={xgteam3} alt="" className="w-full h-full" />
            </div> */}
            <h2 className="lg:text-[30px] text-[20px] lg:mt-0 mt-4 font-[700]">
              Fiyin N. – PM
            </h2>
            {/* <p className="text-[20px]">
              Chike ensures Xogen’s AI products meet business needs. With 10+
              years in product management, he crafts solutions that bring real
              value to clients.
            </p> */}
          </div>
        </div>
      </div>

      {/* Our values */}
      {/* <div className="w-full flex py-12 justify-center items-center">
        <div className="text-center lg:mt-6 flex flex-col justify-center items-center">
          <h3 className="lg:text-[90px] text-[45px] font-[400] leading-[105.48px]">
            Our Values
          </h3>

          <p className="font-[400] mt-3 text-[#120024] lg:text-[24px] text-[20px]">
            At Xogen, our values are more than just words—they shape every
            decision, interaction, and solution we provide. They reflect who we
            are as a company and guide how we work with our clients and each
            other. From the way we approach challenges to the partnerships we
            build, these core principles ensure that we remain focused on
            delivering innovative, ethical, and client-focused AI solutions that
            create lasting impact.
          </p>
        </div>
      </div> */}

      {/*  */}

      {/* <div className="flex justify-between items-center w-full mt-6">
        <div className="text-center flex-wrap gap-12 flex justify-between items-center w-full">
          <div>
            <img
              src={xgBulb}
              alt="Banner"
              className="md:h-[103px] h-[70px] w-full"
            />
            <p className="font-[500] mt-2 text-[20px]">Innovation</p>
          </div>

          <div>
            <img
              src={xgIntegrity}
              alt="Banner"
              className="md:h-[103px] h-[70px]  w-full"
            />
            <p className="font-[500] mt-2 text-[20px]">Integrity</p>
          </div>

          <div>
            <img
              src={xgCollab}
              alt="Banner"
              className="md:h-[103px] h-[70px]  w-full"
            />
            <p className="font-[500] mt-2 text-[20px]">Collaboration</p>
          </div>

          <div>
            <img
              src={xgExcel}
              alt="Banner"
              className="md:h-[103px] h-[70px]  w-full"
            />
            <p className="font-[500] mt-2 text-[20px]">Excellence</p>
          </div>

          <div>
            <img
              src={xgCentric}
              alt="Banner"
              className="md:h-[103px] h-[70px]  w-full"
            />
            <p className="font-[500] mt-2 text-[20px]">Customer-centric</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
