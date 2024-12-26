import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import "./FaqAccordion.css";

const faqs = [
  {
    question: "What are your hours of operation?",
    answer: "We’re open every day from 11:00 AM to 11:00 PM.",
  },
  {
    question: "Do you offer delivery services?",
    answer: "Yes, we offer fast and reliable delivery!",
  },
  {
    question: "Can I customize my pizza?",
    answer: "Of course! You can choose your crust, sauce, cheese, and toppings.",
  },
  {
    question: "Do you have vegetarian or vegan options?",
    answer: "Absolutely! We offer vegetarian pizzas and vegan cheese upon request.",
  },
  {
    question: " Do you have any discounts or promotions?",
    answer: "We regularly run deals and special offers! Check out our website or sign up for our newsletter to stay updated.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-4">
      <h2 className="faq-title ">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <h3>{faq.question}</h3>
              {openIndex === index ? (
                <AiOutlineMinus size={20} />
              ) : (
                <AiOutlinePlus size={20} />
              )}
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
