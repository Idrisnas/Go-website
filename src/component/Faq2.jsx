import React, { useState } from "react";
import Typography from "./Typography";

const faqs = [

     {
    question: "How to request a delivery with the Gocaby app",

    answer:
      "The GoCaby office is located at Luxury 1H1, Ground Floor, Urban Market, Apo Resettlement, Abuja, Nigeria.",
  },

    {
    question: "How to contact Gocaby",

    answer:
      "go to gocaby.com",
  },
  {
    question: "Where is GoCaby located?",
    answer: (
      <>
        We sincerely apologise for any discomfort caused during your
        ride. Providing a positive experience is our utmost priority, and we
        take this matter seriously. To address your concern, we will investigate
        the incident and take appropriate action. We appreciate your feedback,
        and it helps us continually improve our services. Please be assured that
        we are committed to maintaining a high standard of professionalism
        from our drivers. If you have any additional details or would like to
        share more about the incident, please reach out to our support team at{" "}
        <strong className="font-extrabold">support@gocaby.com</strong> or WhatsApp at{" "}
        <a
          href="https://wa.me/2347016403752"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-extrabold"
        >
          https://wa.me/2347016403752
        </a>
        <br />
        Thank you for bringing this to our attention.
      </>
    ),
  },
 

  // Add more FAQ objects here
];

const Faq2 = () => {
  // Track open states by index
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#] pb-4 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 md:my-10 space-y-3 md:space-y-8 ">
        <Typography variant="heading1" className="text-center mb-10 md:mb-20 ">
          Frequently asked Questions
        </Typography>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <div
                className={`bg-[#D6E9FF] md:py-6 md:px-8 p-2 px-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${
                  isOpen ? "rounded-t-lg" : "rounded-lg"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <Typography
                  variant="faq1"
                  className={`transition-colors duration-300 ${
                    isOpen ? "text-black" : "text-[#605E5C]"
                  }`}
                >
                  {faq.question}
                </Typography>
                <div className="text-3xl font-bold">{isOpen ? "−" : "+"}</div>
              </div>

              {isOpen && (
                <div className="bg-[#97b8dd] p-2 md:p-9 rounded-b-lg">
                  <Typography variant="faq2">{faq.answer}</Typography>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq2;
 
