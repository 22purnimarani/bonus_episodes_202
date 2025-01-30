import React from "react";

const FAQ = () => {
  return (
    <section id="faq">
      <div className="mt-10 relative isolate overflow-hidden bg-custom">
        <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex flex-col text-left basis-1/2">
            <p className="sm:text-4xl text-3xl font-extrabold text-base-content text-center m-20">
              Frequently Asked Questions
            </p>
          </div>
          <ul className="basis-1/2">
            <li className="group">
              <button
                className="relative  flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content">
                  How long will it take for my order to arrive?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4  ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="block group-hover:opacity-0 origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                style={{ transition: "max-height 0.3s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    {" "}
                    Our shipping times vary depending on your location and the
                    shipping method you choose. For more specific information
                    about shipping to your area, please enter your zip code at
                    checkout or contact our customer service team.
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content">
                  What is your return policy?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="group-hover:opacity-0 transform origin-center rotate-90 transition-all duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                style={{ transition: "max-height 0.3s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    If your order arrives damaged, please contact us within 48
                    hours of receiving your package. We will arrange for a
                    replacement or issue a refund.
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content">
                  Can I modify or cancel my order after it's placed?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                style={{ transition: "max-height 0.3s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    {" "}
                    You can modify or cancel your order within 24 hours of
                    placing it. Please contact our customer support for
                    assistance.
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
              >
                <span className="flex-1 text-base-content">
                How can I track my order?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out false"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"
                  ></rect>
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                style={{ transition: "max-height 0.3s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    {" "}
                    Yes! Once your order is shipped, you will receive a tracking number via email so you can monitor its journey to you.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
