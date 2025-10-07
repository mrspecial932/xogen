import React, { useState } from "react";
import { xgBanner3 } from "../assets";
import { PrimaryButton } from "./components/button";

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Consulting services',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.comment) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields' 
      });
      setIsSubmitting(false);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please enter a valid email address' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Use Vercel API route in production, localhost in development
      const apiUrl = import.meta.env.PROD 
        ? '/api/send-email' 
        : 'http://localhost:5000/api/send-email';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.' 
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: 'Consulting services',
          comment: ''
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      title: "What Services Does Xogen Offer?",
      content: `Xogen provides a range of AI solutions including AI-driven automation, data analytics, custom AI development, and AI security. Our services are designed to help businesses optimize operations, make data-driven decisions, and enhance customer experiences.`,
    },
    {
      title: "How Can AI Benefit My Business?",
      content:
        "AI can help your business by automating processes, providing data insights, and improving customer service, ultimately leading to cost reductions and increased efficiency.",
    },
    {
      title: "Is Xogen's AI Technology Customizable?",
      content:
        "Yes, Xogen’s AI technology can be tailored to meet the specific needs of your business, ensuring that you get the most out of your investment.",
    },
    {
      title: "What Kind Of Support Does Xogen Offer?",
      content:
        "We offer 24/7 support for all our AI solutions, with dedicated account managers and technical teams to ensure smooth integration and operation.",
    },
    {
      title: "How Can I Get Started With Xogen?",
      content:
        "You can get started by contacting our team for a free consultation, where we'll assess your needs and propose the best AI solutions for your business.",
    },
  ];
  return (
    <div className="px-6 max-w-[1440px] mx-auto">
    <div className="w-full flex flex-col lg:min-h-[400px] justify-center items-center">
      <img src={xgBanner3} alt="Banner" className="lg:h-[103px] w-full" />
      <div className="lg:w-[950px] text-center mt-6 flex flex-col justify-center items-center">
        <h3 className="lg:text-[95px] text-[35px] bg-gradient-to-r from-[#f22b0a] to-[#140F18] bg-clip-text text-transparent text-[#f22b0a] font-[500]  leading-[105.48px]">
          Contact Us
        </h3>

        <p className="font-[400] text-[#120024] lg:text-[20px] mt-4">
            We’re here to help you explore the power of AI and how it can
            transform your business. Whether you have questions about our
            solutions, need assistance, or want to discuss how we can tailor our
            services to your needs, our team is ready to assist.
          </p>
        </div>
      </div>

      <hr className="mt-6" />

      <form onSubmit={handleSubmit} className="py-12 flex flex-col gap-12 justify-center items-center">
        <div className="md:w-[80%] w-[95%]">
          <div>
            <p className="text-[20px] pb-2 font-[500]">Name <span className="text-red-500">*</span></p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="w-full md:w-[491px] lg:h-[81px] h-[61px] border-[0.35px] border-[#00000050] rounded-[5.91px]">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border-none outline-none h-full w-full px-4 text-[18px] bg-transparent"
                placeholder="First Name"
                required
              />
            </div>
            <div className="w-full md:w-[491px] lg:h-[81px] h-[61px] border-[0.35px] border-[#00000050] rounded-[5.91px]">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border-none outline-none h-full w-full px-4 text-[18px] bg-transparent"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
        </div>

        <div className="md:w-[80%] w-[95%]">
          <div>
            <p className="text-[20px] pb-2 font-[500]">Email Address <span className="text-red-500">*</span></p>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full lg:h-[81px] h-[61px] border-[0.35px] border-[#00000050] rounded-[5.91px]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-none outline-none h-full w-full px-4 text-[18px] bg-transparent"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
        </div>

        <div className="md:w-[80%] w-[95%]">
          <div>
            <p className="text-[20px] pb-2 font-[500]">
              How can Xogen help you?
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full lg:h-[81px] h-[61px] flex items-center border-[0.35px] pr-4 border-[#00000050] rounded-[5.91px]">
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full h-full text-[20px] px-4 border-none outline-none bg-transparent"
              >
                <option value="Consulting services">Consulting services</option>
                <option value="Databricks architecture review">Databricks architecture review</option>
                <option value="Fractional CDO service">Fractional CDO service</option>
                <option value="Fractional CRO services">Fractional CRO services</option>
                <option value="Fractional GTM leader">Fractional GTM leader</option>
                <option value="Enablement and mentoring services">Enablement and mentoring services</option>
              </select>
            </div>
          </div>
        </div>

        <div className="md:w-[80%] w-[95%]">
          <div>
            <p className="text-[20px] pb-2 font-[500]">Message <span className="text-red-500">*</span></p>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full h-[150px] border-[0.35px] border-[#00000050] rounded-[5.91px]">
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="border-none outline-none h-full w-full p-4 text-[18px] bg-transparent resize-none"
                placeholder="Tell us more about your needs..."
                required
              ></textarea>
            </div>
          </div>
        </div>

        {/* Status Message */}
        {submitStatus.message && (
          <div className={`md:w-[80%] w-[95%] p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 border border-green-400 text-green-700' 
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            <p className="text-[16px]">{submitStatus.message}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="md:w-[80%] w-[95%]">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full lg:w-[302.73px] bg-[#f22b0a] lg:text-[18px] text-[14px] lg:h-[74px] h-[56px] rounded-[5.91px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d42409] transition-colors"
          >
            <div className="flex items-center justify-center h-full">
              {isSubmitting ? (
                <span className="flex items-center gap-2 text-white font-[600]">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="text-white font-[600]">Send Message</span>
              )}
            </div>
          </button>
        </div>
      </form>

      <div className="space-y-4 py-12">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => handleToggle(index)}
              className="w-full lg:text-[30px] text-[20px] font-[600] flex justify-between items-center py-4 text-left text-lg  text-gray-800 focus:outline-none"
            >
              <h2>{item.title}</h2>
              <span className="text-xl border md:h-[50px] md:w-[50px] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="lg:px-4 px-2 pb-4 lg:text-[20px] text-gray-600">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
