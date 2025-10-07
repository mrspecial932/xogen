import React from "react";
import { xgBanner3 } from "../assets";

const Cases = () => {
  return (
    <div className="px-6 max-w-[1440px] mx-auto">
      <div className="w-full flex flex-col lg:min-h-[400px] ">
        <img src={xgBanner3} alt="Banner" className="lg:h-[103px] w-full" />
        <div className=" mt-6 flex flex-col ">
          <h3 className="lg:text-[90px] text-[35px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] font-[500] leading-[105.48px]">
            Case Studies
          </h3>

          <p className="font-[400] text-[#120024] lg:text-[20px] mt-4">
            The implementation of the F.A.N.T.A.S.T.I.C. methodology has yielded
            remarkable outcomes across various industries, showcasing its
            effectiveness in addressing complex technical sales challenges.
           <br></br> <br></br> Below are two compelling case studies that exemplify how
            organizations have successfully leveraged this framework to achieve
            their business objectives.
          </p>
        </div>
      </div>

      <hr className="mt-6" />

      <div className="py-24">
        <div className="flex flex-wrap gap-2">
          <h2 className="lg:text-[50px] text-[30px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] font-[600] lg:leading-[105.48px]">
            Success Stories Using F.A.N.T.A.S.T.I.C.
          </h2>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="lg:text-[25px] text-[18px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] font-[500] lg:leading-[105.48px]">
            Case Study 1: Financial Services Firm
          </h2>
          <p className="text-[18px] leading-[40px]">
            A leading financial services firm faced significant challenges with
            its legacy systems, which hindered its ability to respond swiftly to
            market changes. Utilizing the F.A.N.T.A.S.T.I.C. methodology, the
            sales team conducted a comprehensive Framework Discovery session,
            mapping out the existing architecture and identifying critical
            inefficiencies. During the Analysis of Challenges phase,
            stakeholders discussed performance bottlenecks that resulted in
            delayed transactions, directly impacting customer satisfaction.
            Through collaborative whiteboarding sessions, the sales team helped
            align the firm's technical needs with its business goals,
            emphasizing the need for enhanced system performance to improve
            customer experience. The Technology Solution Fit stage introduced a
            new cloud-based solution, which was visually represented through a
            detailed roadmap that outlined integration points and transition
            states. The outcome was transformative: the firm experienced a 30%
            reduction in transaction processing times, leading to improved
            customer satisfaction scores and increased market competitiveness.
            The engagement of internal champions facilitated a smooth
            implementation, reinforcing the value of the F.A.N.T.A.S.T.I.C.
            methodology in driving successful outcomes in the financial sector.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="lg:text-[30px] text-[18px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] font-[500] lg:leading-[105.48px]">
            Case Study 2: Healthcare Provider
          </h2>
          <p className="text-[18px] leading-[40px]">
            In another instance, a large healthcare provider grappled with
            fragmented data systems that impeded efficient patient care. By
            employing the F.A.N.T.A.S.T.I.C. approach, the sales team initiated
            a Framework Discovery phase, where they identified existing data
            silos and integration challenges. Engaging both technical and
            business stakeholders in the Analysis of Challenges session allowed
            the team to highlight how these issues adversely affected patient
            outcomes. The Needs and Goals Alignment stage emphasized the
            importance of a unified data solution to meet regulatory compliance
            and enhance patient care. The Architecture Design for Future State
            phase visualized an integrated system that streamlined data flows,
            improved information accessibility, and ensured compliance with
            HIPAA regulations. As a result of implementing the solution, the
            healthcare provider saw a 40% improvement in data retrieval times,
            significantly enhancing the efficiency of patient care processes.
            The proactive identification of compliance and risk mitigation
            strategies throughout the project further solidified stakeholder
            trust and ensured a successful integration of the new system. These
            case studies illustrate the versatility and effectiveness of the
            F.A.N.T.A.S.T.I.C. methodology in various sectors, showcasing its
            ability to facilitate meaningful conversations, drive alignment, and
            ultimately lead to successful technical sales outcomes.
          </p>
        </div>
        {/* <div className="w-full flex justify-between flex-wrap mt-4 gap-6">
          <div className="lg:w-[386px]">
            <h2 className="mt-4 text-[25px] font-[700]">
              Optimize Inventory & Personalize Shopping
            </h2>
            <p className="lg:text-[20px]">
              Leverage AI to automate inventory management, predict demand
              trends, and deliver personalized shopping experiences. Improve
              stock accuracy and enhance customer engagement with tailored
              recommendations.
            </p>
          </div>
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Enhance Health Data Management
            </h2>
            <p className="lg:text-[20px]">
              Utilize AI to manage and secure patient data efficiently,
              streamline diagnostic processes, and ensure compliance with
              privacy regulations. Accelerate data processing and boost
              diagnostic accuracy with advanced AI tools.
            </p>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Streamline Production & Improve Quality
            </h2>
            <p className="lg:text-[20px]">
              Apply AI to optimize manufacturing processes, predict equipment
              maintenance needs, and reduce downtime. Use AI-driven quality
              control to ensure product consistency and operational efficiency.
            </p>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Xogen transformed our workflow.
            </h2>
            <p className="lg:text-[20px]">
              With Xogen’s automation tools, we’ve saved hours of manual work
              every week. It’s like having an extra team member—except smarter!
            </p>
          </div>
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Insightful and user-friendly.
            </h2>
            <p className="lg:text-[20px]">
              The AI analytics provided by Xogen gave us insights we never
              thought possible. Our strategy is now entirely data-driven.
            </p>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Tailored AI solutions that work.
            </h2>
            <p className="lg:text-[20px]">
              Xogen helped us design a custom AI system that has revolutionized
              the way we handle customer data. Highly recommended!
            </p>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Xogen transformed our workflow.
            </h2>
            <p className="lg:text-[20px]">
              With Xogen’s automation tools, we’ve saved hours of manual work
              every week. It’s like having an extra team member—except smarter!
            </p>
          </div>
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Insightful and user-friendly.
            </h2>
            <p className="lg:text-[20px]">
              The AI analytics provided by Xogen gave us insights we never
              thought possible. Our strategy is now entirely data-driven.
            </p>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Tailored AI solutions that work.
            </h2>
            <p className="lg:text-[20px]">
              Xogen helped us design a custom AI system that has revolutionized
              the way we handle customer data. Highly recommended!
            </p>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Xogen transformed our workflow.
            </h2>
            <p className="lg:text-[20px]">
              With Xogen’s automation tools, we’ve saved hours of manual work
              every week. It’s like having an extra team member—except smarter!
            </p>
          </div>
          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Insightful and user-friendly.
            </h2>
            <p className="lg:text-[20px]">
              The AI analytics provided by Xogen gave us insights we never
              thought possible. Our strategy is now entirely data-driven.
            </p>
          </div>

          <div className="lg:w-[386px]">
            <div className="h-[320px] bg-[#eee] rounded-[10px] w-full"></div>
            <h2 className="mt-4 text-[25px] font-[700]">
              Tailored AI solutions that work.
            </h2>
            <p className="lg:text-[20px]">
              Xogen helped us design a custom AI system that has revolutionized
              the way we handle customer data. Highly recommended!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cases;
