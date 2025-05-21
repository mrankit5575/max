import React, { useState } from "react";

const getBotReply = (message) => {
  message = message.toLowerCase().trim();

  if (/course|class|subject|syllabus|what do you teach|topics|offer|provide|learn|training|program/.test(message)) {
    return "We offer various courses including:\n- Web Development (HTML, CSS, JavaScript, React)\n- DCA (Diploma in Computer Applications)\n- Tally with GST\n- Photoshop & Graphic Design\n- Advanced Excel\n- Programming Languages (Python, Java, C++)\n\nWhich course are you interested in?";
  } else if (/fee|fees|payment|price|cost|charges|how much|amount|budget|expensive|cheap|afford/.test(message)) {
    return "Course fees vary depending on duration and content:\n\n- Short courses (1-3 months): ₹3,000 - ₹8,000\n- Diploma courses (6-12 months): ₹10,000 - ₹25,000\n\nWe also offer installment options and discounts for early payment. Would you like to know about a specific course's fee?";
  } else if (/contact|reach|call|phone|number|mobile|address|location|where|visit|meet|talk|speak/.test(message)) {
    return "You can contact us through:\n\n📞 Phone: +91-9876543210 / +91-9876543211\n📧 Email: info@example.com\n🏢 Address: 123 Education Street, Learning City, 560001\n\nOur office hours are 9AM-6PM, Monday to Saturday.";
  } else if (/certificate|certification|completion|document|proof|award|recognized|valid|after course|finish/.test(message)) {
    return "After successfully completing your course:\n\n1. You'll receive a digital certificate immediately\n2. Hard copy can be collected from office\n3. Certificate is recognized by NSDC\n4. Contains unique verification code\n\nCertificates are awarded after:\n- Completing all assignments\n- Minimum 75% attendance\n- Passing final assessment";
  } else if (/time|timing|schedule|duration|when|hour|days|long|start|end|morning|evening/.test(message)) {
    return "Course schedules are flexible:\n\n🕘 Morning Batch: 9AM-12PM\n🕑 Afternoon Batch: 2PM-5PM\n🌙 Evening Batch: 6PM-9PM\n\nWeekend batches also available. Most courses run for 3-6 months with 2-3 classes per week.";
  } else if (/admission|join|enroll|register|apply|sign up|entry|new student|begin|how to join/.test(message)) {
    return "Admission process is simple:\n1. Visit our center with ID proof\n2. Fill the registration form\n3. Pay the admission fee\n4. Get your study materials\n\nYou can also start online by visiting our website: www.example.com/admissions";
  } else {
    return "I'm here to help with information about our courses, fees, certificates, timings and admissions. Could you please ask your question in a different way? For quick help, you can also call us at +91-9876543210.";
  }
};

const ChatBot = () => {
  const [messages, setMessages] = useState([{ from: "bot", text: "Hello! How can I help you today?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botReply = { from: "bot", text: getBotReply(input) };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-md bg-white">
      <div className="h-96 overflow-y-auto space-y-2 p-2 border-b">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.from === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
            }`}
          >
            {msg.text.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          className="flex-1 border p-2 rounded-l"
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="bg-blue-500 text-white px-4 rounded-r" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
