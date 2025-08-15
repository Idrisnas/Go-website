import React, { useState } from "react";
import Typography from "./Typography";

const faqs = [
  {
    question: "How do I place an order?",

    answer: (
      <>
        <Typography variant="body" className="font-extrabold text-black">
          To place an order:
        </Typography>
        <ol className="list-decimal list-inside space-y-2 text-[16px] font-manrope text-gray-800">
          <li>Open the app and log in</li>
          <li>Browse restuarants or use the search function</li>
          <li>Select items and add them  to your cart</li>
          <li>Review your order and proceed to checkout</li>
          <li>Choose delivery or pickup</li>
          <li>Select your payment method</li>
          <li>Confirm you order</li>
      
        </ol>
      
      </>
    ),
  },

  {
    question: "How do I track my order?",

    answer: 'After placing an order, you can track its  status in the "My Orders" section of the app.',
  },
  {
    question: " How do I add items to my cart?",
    answer: (
      <>
        We sincerely apologise for any discomfort caused during your ride.
        Providing a positive experience is our utmost priority, and we take this
        matter seriously. To address your concern, we will investigate the
        incident and take appropriate action. We appreciate your feedback, and
        it helps us continually improve our services. Please be assured that we
        are committed to maintaining a high standard of professionalism from our
        drivers. If you have any additional details or would like to share more
        about the incident, please reach out to our support team at{" "}
        <strong className="font-extrabold">support@gocaby.com</strong> or
        WhatsApp at{" "}
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

  {
    question: " Can I add items from different restaurants to my cart?",

    answer: "go to gocaby.com",
  },
  {
    question: "    How do I remove items from my cart?",

    answer: "go to gocaby.com",
  },

  // Add more FAQ objects here
];

const Faq3 = () => {
  // Track open states by index
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10 space-y-8">
        <Typography variant="heading1" className="text-center mb-20">
          Frequently asked Questions
        </Typography>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <div
                className={`bg-[#d6e9ffb7] py-6 px-8 flex justify-between items-center cursor-pointer transition-all duration-300 ${
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
                <div className="bg-[#B3D6FF] p-9 rounded-b-lg">
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

export default Faq3;
