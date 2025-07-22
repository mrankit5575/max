import React, { useState, useEffect, useRef } from "react";
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Lottie from 'lottie-react';
import think from '../assets/think.json'
import { motion, AnimatePresence } from "framer-motion";
// import FloatingShapes from "../layouts/FloatingShapes";
//last edit hai ye  
const features = [
  {
    title: "Affordable",
    icon: CurrencyDollarIcon,
    description: "High-quality tutoring at competitive prices.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-600",
    borderColor: "border-blue-200"
  },
  {
    title: "Verified Tutors",
    icon: ShieldCheckIcon,
    description: "Only certified and background-checked educators.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-600",
    borderColor: "border-purple-200"
  },
  {
    title: "24/7 Support",
    icon: ClockIcon,
    description: "Always here to help whenever you need us.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    hoverColor: "hover:bg-green-600",
    borderColor: "border-green-200"
  },
  {
    title: "Satisfaction Guaranteed",
    icon: CheckCircleIcon,
    description: "Your success is our priority.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverColor: "hover:bg-orange-600",
    borderColor: "border-orange-200"
  },
];

export default function Features() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Ask me about fees, courses, location, contact, teacher, etc." }
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  function handleMouseMove(e) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Normalize x/y between -1 and 1
    const x = ((e.clientX - left) / width) * 2 - 1;
    const y = ((e.clientY - top) / height) * 2 - 1;
    setMouse({ x, y });
  }

  // Shapes array for vertical columns
  const leftShapes = [
    { type: "box", color: "#0C0950" },
    { type: "circle", color: "#ef4444" },
    { type: "triangle", color: "#0C0950" },
    { type: "box", color: "#ef4444" },
    { type: "circle", color: "#0C0950" },
    { type: "triangle", color: "#ef4444" },
  ];
  const rightShapes = [
    { type: "box", color: "#ef4444" },
    { type: "circle", color: "#0C0950" },
    { type: "triangle", color: "#ef4444" },
    { type: "box", color: "#0C0950" },
    { type: "circle", color: "#ef4444" },
    { type: "triangle", color: "#0C0950" },
  ];

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // On load, show popup, then open chat box automatically
    setShowPopup(true);
    setIsOpen(false);
    const timer = setTimeout(() => {
      setShowPopup(false);
      setIsOpen(true);
    }, isMobile ? 4000 : 2000);
    return () => clearTimeout(timer);
  }, [isMobile]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (chatRef.current) {
      const msgDiv = chatRef.current.querySelector(".chat-messages");
      if (msgDiv) msgDiv.scrollTop = msgDiv.scrollHeight;
    }
  }, [messages, isOpen]);
function getBotReply(msg, context = {}) {
  const m = msg.toLowerCase().trim();
  const currentHour = new Date().getHours();
  let greeting = "";

  // Determine time-based greeting
  if (currentHour < 12) greeting = "Good morning";
  else if (currentHour < 17) greeting = "Good afternoon";
  else greeting = "Good evening";

  // Track conversation context
  if (!context.history) context.history = [];
  context.history.push(m);

  // Check for follow-up questions
  const lastMessage = context.history.length > 1 ? context.history[context.history.length - 2] : "";
  const isFollowUp = lastMessage.includes("fee") || lastMessage.includes("course") || lastMessage.includes("contact");

  // Enhanced greeting detection
  if (/(hello|hi|hey|greetings|sup|howdy|hola)\b|^good (morning|afternoon|evening)/i.test(m)) {
    return `${greeting}! 👋 I'm the assistant for MAX EDUCATION Computer Institute. How may I help you today?`;
  }

  // Farewell detection
  if (/(bye|goodbye|see ya|thanks|thank you|exit|quit)/i.test(m)) {
    return `Have a great day! 😊 Feel free to come back if you have more questions.`;
  }

  // Enhanced fee-related queries
  if (/(fee|fees|price|cost|charges|payment|installment|afford)/i.test(m)) {
  return `💬 Our course fees depend on the course, duration, and current offers.  
Please visit our institute or call us at  +919220958292 +91 9220958292
for the latest fee details.  
You can also check our   for more info.`;
}

  // Enhanced course information
  if (/(course|courses|class|classes|program|training|learn|study)/i.test(m)) {
    if (isFollowUp && /(web|digital|basic|tally|dca|video|animation|photoshop)/i.test(m)) {
      const course = m.match(/(web|digital|basic|tally|dca|video|animation|photoshop)/i)[0].toLowerCase();
      const descriptions = {
        web: "Our Web Development course covers HTML, CSS, JavaScript, React, and Node.js over    with hands-on projects.",
        digital: "Digital Marketing includes SEO, SEM, Social Media Marketing, and Analytics in a  intensive program.",
        basic: "Basic Computer course teaches fundamentals of operating systems, MS Office, and internet usage in  months.",
        tally: "Tally Prime certification program covers accounting, inventory, and GST over  months.",
        dca: "Diploma in Computer Applications (DCA) is a 1-year comprehensive program covering multiple IT skills.",
        video: "Video Editing course teaches Premiere Pro, After Effects, and DaVinci Resolve in  months.",
        animation: "Animation program covers 2D/3D animation using Maya and Blender over  months.",
        photoshop: "Photoshop certification includes photo editing, digital painting, and graphic design fundamentals in months."
      };
      return `🎓 ${descriptions[course]} Would you like details about fees or duration?`;
    }
    return `🎓 We offer these courses:
     Web Development, Digital Marketing, Basic Computer, Tally Prime/GST/Busy, DCA, Video Editing, Animation, Photoshop, AutoCAD, Graphic Design, ADCA, Advance Excel with MIS, Typing, CCC, Python, Web Design, SQL, Data Entry, Power BI, Machine Learning
    \nWhich course would you like more information about?`;
  }

  // Enhanced location handling
  if (/(location|address|where|map|directions|come|visit)/i.test(m)) {
    return `📍 We are located at:
     Gali no-11, Radha Vihar Main Market 
    Near Machhali Market, Mukundpur
    Delhi - 110042
     \nOur center is open Monday-Saturday, 9AM to 6PM. Would you like help with directions?`;
  }

  // Enhanced contact information
  if (/(contact|phone|call|email|reach|number|connect)/i.test(m)) {
    return `📞  
    - Phone:  +919220958292" +91 9220958292 +919315322573"> 
     info@abccomputer.edu 
      WhatsApp: +919220958292 +91 9220958292
    \nOur support team is available 9AM-7PM daily. Would you like to schedule a callback?`;
  }

  // Enhanced faculty information
  if (/(teacher|tutor|faculty|instructor|staff|professor)/i.test(m)) {
    return `🧑‍🏫 Our faculty includes:
    - Mr. Sharma (15+ years in Web Development)
    - Ms. Kapoor (Digital Marketing expert)
    - Mr. Singh (Tally certified trainer)
    - Ms. Patel (Graphic Design specialist)
    \nAll instructors are industry-certified with minimum 5 years teaching experience. Would you like to know about a specific instructor?`;
  }

  // Personal introduction handling
  if (/(my name is|i am|i'm|meet|this is)\b/i.test(m)) {
    const nameMatch = m.match(/(?:my name is|i am|i'm|meet|this is)\s+([a-z]+)/i);
    const name = nameMatch ? nameMatch[1] : "there";
    return `😊 Nice to meet you, ${name}! I'm here to help with information about MAX EDUCATION Computer Institute. What would you like to know?`;
  }

  // Enrollment process
  if (/(join|enroll|admission|register|sign up|apply)/i.test(m)) {
    return `📝 To enroll in any course:
    1. Visit our center for counseling
    2. Choose your course
    3. Submit required documents
    4. Complete fee payment
    \nWe're currently accepting admissions for the next batch starting next month. Would you like me to check availability for a specific course?`;
  }

  // Batch timing information
  if (/(time|timing|schedule|batch|when|morning|evening)/i.test(m)) {
    return `⏰ We have multiple batch timings:
    - Morning: 9AM to 12PM
    - Afternoon: 1PM to 4PM
    - Evening: 5PM to 7PM
    \nNew batches start on the 1st and 15th of each month. Would you like to check availability for a specific timing?`;
  }

  // Course comparison
  if (/(compare|difference|which one|between|better)/i.test(m)) {
    return `🔍 To compare courses:
    - Career-focused: Web Dev, Digital Marketing, Animation
    - Short-term: Basic Computer, Photoshop
    - Accounting: Tally Prime
    - Comprehensive: DCA
    \nTell me your career goals and I can suggest the best option for you.`;
  }

  // Job placement queries
  if (/(job|placement|career|future|opportunity|scope)/i.test(m)) {
    return `💼 We provide:
    -  placement assistance
    - Resume building workshops
    - Interview preparation
    - Industry partnerships
    \nOur recent placement rate is 85% within 3 months of completion. Would you like to know which companies hire our students?`;
  }

  // Handle unknown queries with contextual help
  const suggestions = [
    "Ask about course fees",
    "Learn about our programs",
    "Get our location details",
    "Contact information",
    "Know about our faculty"
  ];
  
  return `😒 I didn't quite understand that. I can help with:
  - ${suggestions.join("\n  - ")}
  \nWhat would you like to know?`;
}
  function handleSend() {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const reply = getBotReply(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
    setInput("");
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 400);
  }

  function handleInputKey(e) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      {/* --- Decorative Vertical Shapes Left --- */}
      <div
        className="hidden md:flex flex-col gap-8 absolute top-0 left-[50px] h-full z-20 justify-between items-start pointer-events-none"
        style={{
          transform: `translate(${mouse.x * 20}px, ${mouse.y * 30}px)`,
          transition: "transform 0.2s cubic-bezier(.4,2,.6,1)"
        }}
      >
        {leftShapes.map((shape, i) => (
          <div key={i} className="ml-[-32px]">
            {shape.type === "box" && (
              <div className="w-12 h-12 rounded-lg shadow-lg" style={{ background: shape.color }}></div>
            )}
            {shape.type === "circle" && (
              <div className="w-8 h-8 rounded-full mb-2" style={{ background: shape.color }}></div>
            )}
            {shape.type === "triangle" && (
              <svg width="32" height="32">
                <polygon points="16,0 32,32 0,32" fill={shape.color} />
              </svg>
            )}
          </div>
        ))}
      </div>
      {/* --- Decorative Vertical Shapes Right --- */}
      <div
        className="hidden md:flex flex-col gap-8 absolute top-0 right-[50px] h-full z-20 justify-between items-end pointer-events-none"
        style={{
          transform: `translate(${-mouse.x * 20}px, ${mouse.y * 30}px)`,
          transition: "transform 0.2s cubic-bezier(.4,2,.6,1)"
        }}
      >
        {rightShapes.map((shape, i) => (
          <div key={i} className="mr-[-32px]">
            {shape.type === "box" && (
              <div className="w-12 h-12 rounded-lg shadow-lg" style={{ background: shape.color }}></div>
            )}
            {shape.type === "circle" && (
              <div className="w-8 h-8 rounded-full mb-2" style={{ background: shape.color }}></div>
            )}
            {shape.type === "triangle" && (
              <svg width="32" height="32">
                <polygon points="16,0 32,32 0,32" fill={shape.color} />
              </svg>
            )}
          </div>
        ))}
      </div>
      {/* --- End Decorative Shapes --- */}

      <div className="max-w-7xl mx-auto">
        {/* <FloatingShapes/> */}
        {/* Animated Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">MAX INFOTECH</span>?
          </h2>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-semibold px-4 py-1 sm:px-5 sm:py-2 rounded-full shadow-lg mb-4"
          >
            5 Days Free Trial Classes
          </motion.div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the benefits that set us apart in the education space
          </p>
        </motion.div>

        {/* Animated Lottie Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-48 h-48 lg:h-70 lg:w-70 mx-auto mb-12"
          >
          <Lottie animationData={think} loop={true} />
        </motion.div>

        {/* Features Grid with Staggered Animation */}
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
            >
              <div 
                className={`group relative overflow-hidden ${feature.bgColor} p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border ${feature.borderColor} hover:border-transparent`}
              >
                {/* Animated Background on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: -50, y: -50 }}
                  whileHover={{ x: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Icon Container with Hover Effect */}
                <motion.div 
                  className={`relative z-10 w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 border ${feature.borderColor} transition-all duration-300 group-hover:${feature.hoverColor} group-hover:scale-110`}
                  whileHover={{ rotate: 10 }}
                >
                  <feature.icon className={`w-8 h-8 ${feature.iconColor} transition-colors duration-300 group-hover:text-[#0C0950]`} />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-[0CO950]">{feature.title}</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-red-600">{feature.description}</p>
                
                {/* Hidden Learn More Link with Slide-in Animation */}
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-sm font-medium text-black group-hover:text-white border-b border-transparent group-hover:border-white/50 transition-colors duration-200">
                    Learn more →
                  </span>
                </motion.div>
                
                {/* Decorative Elements with Animation */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements for the whole section */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-200/20 blur-xl"
          animate={{
            y: [0, 15, 0],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-purple-200/20 blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Floating ChatBot */}
        <div>
          {/* Popup on load */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`fixed z-[9999] ${isMobile ? "bottom-[15%] right-4 left-4" : "bottom-[20%] right-8"} bg-white px-6  sm:p-4 py-4 rounded-xl shadow-xl flex items-center justify-center font-semibold text-blue-700`}
              >
                I am your assistant
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <AnimatePresence>
  {isOpen ? (
    <motion.div
      ref={chatRef}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.9 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      className={`fixed z-[9999] bg-white shadow-2xl flex flex-col border-2 border-[#0C0950] overflow-hidden
        ${isMobile
          ? "left-2 right-2 rounded-xl bottom-[10%] h-[60vh]"
          : "bottom-[10%] right-20  w-96 h-[65vh] rounded-xl"
        }
      `}
    >
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-[#0C0950] to-[#3A2F9E] text-white p-4 flex justify-between items-center rounded-t-xl"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 2 
            }}
          >
            👋
          </motion.div>
          <span className="font-semibold text-lg">Chat with us</span>
        </div>
        <motion.button 
          onClick={() => setIsOpen(false)} 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white hover:text-gray-200"
          aria-label="Close chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Messages */}
      <div className="chat-messages flex-1 p-4 overflow-y-auto bg-gradient-to-b from-blue-50 to-blue-100">
        {messages.length > 0 ? (
          messages.map((msg, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm shadow-md
                ${msg.sender === "user"
                  ? "bg-gradient-to-r from-[#0C0950] to-[#3A2F9E] text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                }`}>
                {msg.text}
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div 
            className="flex flex-col items-center justify-center h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
              className="text-6xl mb-4 relative"
            >
              👩💻
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-full p-1 shadow-md"
                animate={{
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 20, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: 0.5
                }}
              >
                <div className="text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">!</div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="text-center px-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg font-medium text-gray-700 mb-2">Ask me anything!</p>
              <motion.div
                className="text-gray-500 mt-2 flex justify-center"
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5
                }}
              >
                <span className="inline-block">👇 Type your question below 👇</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <motion.div 
        className="p-4 border-t bg-white"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-2">
          <motion.input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleInputKey}
            placeholder="Type your message..."
            className="flex-1 p-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            whileFocus={{ 
              borderColor: "#0C0950",
              boxShadow: "0 0 0 2px rgba(12, 9, 80, 0.2)"
            }}
          />
          <motion.button
            onClick={handleSend}
            className="bg-gradient-to-r from-[#0C0950] to-[#3A2F9E] text-white px-4 py-2 rounded-xl hover:opacity-90 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!input.trim()}
          >
            Send
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  ) : (
    <motion.button
      onClick={() => setIsOpen(true)}
      className={`fixed z-[9998] right-8 bg-gradient-to-r from-[#0C0950] to-[#3A2F9E] text-white rounded-full shadow-xl ${isMobile ? 'p-2' : 'p-4'}`}
      style={{ bottom: '18%' }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", damping: 15 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -5, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse"
        }}
        className={isMobile ? "text-base" : "text-2xl"}
      >
        💁ASK
      </motion.div>
      <motion.div 
        className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        !
      </motion.div>
    </motion.button>
  )}
</AnimatePresence>

          {/* Chat Box */}
          
        </div>
      </div>
    </section>
  );
}