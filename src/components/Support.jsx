import React from "react";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const supportOptions = [
  {
    title: "Live Chat",
    description: "Instant support via our 24/7 live chat system.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Email Us",
    description: "Send us your queries at support@example.com.",
    icon: EnvelopeIcon,
  },
  {
    title: "Help Center",
    description: "Browse FAQs and tutorials for quick solutions.",
    icon: QuestionMarkCircleIcon,
  },
];

function Support() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We're Here to <span className="text-blue-600">Help</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you need technical support or academic guidance, our team is always ready to assist you.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {supportOptions.map((option, idx) => (
          <div
            key={idx}
            className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl shadow-sm text-center transition-all duration-300"
          >
            <option.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{option.title}</h3>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Support;
