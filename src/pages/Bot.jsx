import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const chatRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botReply = { sender: "bot", text: getBotReply(input) };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");

    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 100);
  };

  const getBotReply = (message) => {
    message = message.toLowerCase().trim();

    if (/course|class|subject|syllabus|what do you teach|topics|offer|provide|learn|training|program/.test(message)) {
      return "We offer various courses including Web Dev, DCA, Tally, Photoshop, Excel, and more.";
    } else if (/fee|fees|payment|price|cost|charges|how much|amount|budget/.test(message)) {
      return "Fees range from ₹3,000 to ₹25,000. Installments available. Ask for a specific course.";
    } else if (/contact|call|phone|mobile|address|location|visit/.test(message)) {
      return "📞 Call: +91-9876543210\n📧 Email: info@example.com\n🏢 Address: 123 Education Street.";
    } else if (/certificate|certification|completion|document|valid/.test(message)) {
      return "Yes, you'll get a certificate upon course completion with verification code.";
    } else {
      return "I'm here to help with courses, fees, certificates, and contact info. Ask anything!";
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      {/* Welcome bubble */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[-60px] right-16 bg-white shadow-md p-3 rounded-lg text-sm max-w-xs"
          >
            I am your assistant
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-[-400px] w-80 bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
              <h3 className="text-sm font-semibold">Assistant</h3>
              <button onClick={toggleChat} className="hover:text-gray-200">
                ✖
              </button>
            </div>
            <div className="p-3 h-64 overflow-y-auto text-sm" ref={chatRef}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-2 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <p
                    className={`inline-block px-3 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-blue-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t p-2 flex gap-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 text-sm border px-3 py-1 rounded-l-md focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-4 py-1 rounded-r-md text-sm"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
