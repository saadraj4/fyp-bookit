import React, { useState } from 'react';
import Header from '../components/Header';

// FAQ data
const faqData = [
    { question: 'Why Book It?', answer: 'Because we offer ...' },
    { question: 'What is online booking and how do I use it?', answer: 'Online booking is ...' },
    { question: 'How do I know if my purchase was successful?', answer: 'You will receive a confirmation email ...' },
    { question: 'Can customers choose their own seats?', answer: 'Yes, you can choose your seats during booking ...' },
    { question: 'What ticket types are available for online purchase?', answer: 'We offer various ticket types ...' },
    { question: 'What method of payment can I use to purchase e-tickets?', answer: 'Credit card, debit card, and online wallets ...' },
    { question: 'How do I cancel my booking?', answer: 'You can cancel your booking by logging into your account ...' },
    { question: 'How do I get a refund?', answer: 'You can request a refund by contacting our customer service ...' },
    { question: 'What is the baggage allowance for my ticket?', answer: 'Baggage allowance varies depending on the ticket type ...' },
    { question: 'Can I change my booking?', answer: 'Yes, you can change your booking by logging into your account ...' },
    { question: 'What do I do if I miss my bus?', answer: 'If you miss your bus, you can contact our customer service ...' },
    { question: 'How do I know if my bus is delayed?', answer: 'You will receive a notification if your bus is delayed ...' },
    { question: 'Can I book a ticket for someone else?', answer: 'Yes, you can book a ticket for someone else ...' }

];

// Accordion component
const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        
        <div className="border-b bg-gray-600 bg-opacity-70 text-white">
            <button
                className="w-full flex justify-between items-center py-3 px-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg">{question}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-4 pb-3">
                    <p>{answer}</p>
                </div>
            )}
        </div>
        </>
    );
};

// Contact panel component
const ContactPanel = () => (
    <div className="bg-gray-100 p-4 rounded-md text-center">
        <h2 className="text-xl font-semibold">Need Help Booking?</h2>
        <p className="mt-2">Call our customer service team to speak to an advisor who will help you with all your needs.</p>
        <p className="mt-2 text-lg font-bold">+923-111-777-333</p>
    </div>
);

// Main FAQ Page component
const FAQPage = () => (
    <>
    <Header/>
    <div className="flex justify-between gap-6 p-6 background-image">
        <div className="flex-1 ">
            {faqData.map((item, index) => (
                <Accordion key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
        <div className="w-1/3">
            <ContactPanel />
        </div>
    </div>
    </>
);

export default FAQPage;
