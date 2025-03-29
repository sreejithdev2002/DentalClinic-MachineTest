import React, { useState } from "react";

function FAQ() {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close of an item
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">FAQs</h1>

      {/* Accordion Item 1 */}
      <div className="border-gray-200 my-2">
        <button
          className="w-full text-left p-5 lg:p-10  hover:bg-gray-200 focus:outline-none rounded-3xl border border-[#E7E7E7]"
          onClick={() => handleToggle(0)}
        >
          <span className="font-normal text-xl lg:text-3xl text-[#3C3C3C]">
            How often should I visit the dentist?
          </span>
        </button>
        {openIndex === 0 && (
          <div className="px-4 py-2">
            <p className="text-sm lg:text-base">
              You should visit the dentist at least twice a year for regular
              check-ups and cleanings. Routine visits help prevent dental issues
              like cavities, gum disease, and plaque buildup. However, if you
              have specific concerns such as tooth sensitivity, pain, or ongoing
              dental treatments, your dentist may recommend more frequent
              visits. Maintaining good oral hygiene at home, along with regular
              dental check-ups, is key to a healthy smile!
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 2 */}
      <div className="border-gray-200 my-2">
        <button
          className="w-full text-left p-5 lg:p-10  hover:bg-gray-200 focus:outline-none rounded-3xl border border-[#E7E7E7]"
          onClick={() => handleToggle(1)}
        >
          <span className="font-normal text-xl lg:text-3xl text-[#3C3C3C]">
            What can I expect during my first visit?
          </span>
        </button>
        {openIndex === 1 && (
          <div className="px-4 py-2">
            <p className="text-sm lg:text-base">
              During your first visit, the dentist will review your dental
              history, examine your teeth and gums, take X-rays if needed, and
              perform a professional cleaning. They will also discuss any
              concerns and provide personalized oral care advice.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 3 */}
      <div className="border-gray-200 my-2">
        <button
          className="w-full text-left p-5 lg:p-10  hover:bg-gray-200 focus:outline-none rounded-3xl border border-[#E7E7E7]"
          onClick={() => handleToggle(2)}
        >
          <span className="font-normal text-xl lg:text-3xl text-[#3C3C3C]">
            How can I prepare for my dental appointment?
          </span>
        </button>
        {openIndex === 2 && (
          <div className="px-4 py-2">
            <p className="text-sm lg:text-base">
              Brush and floss beforehand, bring your medical history, list any
              concerns, and arrive on time. Avoid sugary foods before your visit
              and relax!
            </p>
          </div>
        )}
      </div>

      {/* Accordion Item 4 */}
      <div className="border-gray-200 my-2">
        <button
          className="w-full text-left p-5 lg:p-10  hover:bg-gray-200 focus:outline-none rounded-3xl border border-[#E7E7E7]"
          onClick={() => handleToggle(3)}
        >
          <span className="font-normal text-xl lg:text-3xl text-[#3C3C3C]">
            What should I do in case of a dental emergency?
          </span>
        </button>
        {openIndex === 3 && (
          <div className="px-4 py-2 relative">
            <p className="text-sm lg:text-base">
              For a dental emergency, rinse your mouth, apply a cold compress,
              and keep a knocked-out tooth moist. Contact your dentist
              immediately for urgent care!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
