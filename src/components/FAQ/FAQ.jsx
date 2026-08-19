import { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question:
                "Do you work on all types of motorcycles or specific brands only?",
            answer:
                "Yes, but majorly we specialize in brands such as Aprilia, Moto Guzzi, Yamaha, Vespa, Honda and Piaggio but our factory-trained technicians are equipped to service and repair most motorcycle makes and models with the same precision and care.",
        },
        {
            question: "How long does a standard motorcycle repair take?",
            answer:
                "Repair time depends on the complexity of the issue. Most standard repairs are completed within few hours, while specialized or custom work may take longer. We’ll always keep you updated.",
        },
        {
            question: "Do you provide genuine spare parts?",
            answer:
                "Yes, we only use genuine and approved OEM (Original Equipment Manufacturer) parts to ensure the best fit, safety, and long-term performance for your motorcycle.",
        },
        {
            question: "Can you upgrade my motorbike’s performance or styling?",
            answer:
                "Absolutely. Our team offers both performance upgrades (like exhausts, ECU tuning, and suspension systems) and cosmetic modifications to give your bike a new look and feel.",
        },
        {
            question: "Do you provide pickup and drop-off service?",
            answer:
                "Yes, we offer convenient pickup and drop-off options within our service area. Just schedule it in advance, and our team will handle the logistics safely and efficiently.",
        },
        {
            question: "How can I book a service or consultation?",
            answer:
                "You can easily schedule your appointment through our online booking form or contact us directly by phone or email. We’ll confirm your slot and walk you through the process.",
        },
        {
            question: "Do you sell brand-new bikes?",
            answer:
                "Yes, we do. We offer brand-new 2025 models from Yamaha and Honda, including: Yamaha Aerox STD 125, Yamaha Aerox YECVT 125, Yamaha NMAX STD 125, Yamaha NMAX YECVT 125, Yamaha NMAX Tex/Max 125, Yamaha Mio 125, Yamaha R125, Yamaha Honda Gen Ultimata 125, Yamaha Lexi LX 125, Honda Vario, Honda CRF 150L.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex((currentIndex) =>
            currentIndex === index ? null : index
        );
    };

    return (
        <section className="faq-container">
            <div className="faq-content-wrapper">

                <div className="faq-title-section">
                    <h1 className="faq-title">FAQ</h1>
                </div>

                <div className="faq-accordion-list">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                className={`faq-item ${isOpen ? "open" : ""}`}
                                key={faq.question}
                            >
                                <button
                                    className="faq-question-button"
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={`answer-${index}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="faq-question-text">
                                        {faq.question}
                                    </span>

                                    <div className="faq-icon-wrapper">
                                        {isOpen ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <path d="M5 12h14" />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M12 5v14" />
                                            </svg>
                                        )}
                                    </div>
                                </button>

                                <div
                                    id={`answer-${index}`}
                                    className={`faq-answer-content ${isOpen ? "open" : ""}`}
                                >
                                    <p className="faq-answer-text">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}