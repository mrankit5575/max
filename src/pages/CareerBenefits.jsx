 import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaUserTie, 
  FaBookOpen, 
  FaChalkboardTeacher, 
  FaCogs, 
  FaLaptop, 
  FaUsers, 
  FaCertificate,
  FaHandshake,
  FaChartLine,
  FaBriefcase,
  FaLightbulb
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaCheckCircle className="text-3xl" />,
    title: '100% Placement Guaranteed',
    description: 'We have a dedicated placement cell that ensures every student is successfully placed in renowned companies.',
    color: 'from-emerald-500 to-teal-600',
    delay: 0.1
  },
  {
    icon: <FaUserTie className="text-3xl" />,
    title: 'Career-oriented Skill Building',
    description: 'Our programs are fully job-ready with hands-on career counselling, program design, and expert guidance.',
    color: 'from-purple-500 to-indigo-600',
    delay: 0.2
  },
  {
    icon: <FaBookOpen className="text-3xl" />,
    title: 'Industry-Focused Curriculum',
    description: 'Each stream is designed to meet industry demands and equip you with the right skills.',
    color: 'from-pink-500 to-rose-600',
    delay: 0.3
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl" />,
    title: 'Industry-trained Instructors',
    description: 'Trainers with hands-on experience deliver training using the latest tools and trends.',
    color: 'from-blue-500 to-cyan-600',
    delay: 0.4
  },
  {
    icon: <FaCogs className="text-3xl" />,
    title: 'Holistic Training Program',
    description: 'Includes technical skills, soft skills, real-world projects, and doubt support sessions.',
    color: 'from-yellow-500 to-amber-600',
    delay: 0.5
  },
  {
    icon: <FaLaptop className="text-3xl" />,
    title: 'Hybrid Training Modules',
    description: 'Classes conducted both online and offline as per your convenience.',
    color: 'from-indigo-500 to-violet-600',
    delay: 0.6
  },
  {
    icon: <FaUsers className="text-3xl" />,
    title: 'Community Access',
    description: 'Alumni network provides job referrals, mentorship, and exclusive webinars.',
    color: 'from-rose-500 to-fuchsia-600',
    delay: 0.7
  },
  {
    icon: <FaCertificate className="text-3xl" />,
    title: 'Get Certified',
    description: 'Earn a certificate after successfully completing your training program.',
    color: 'from-green-500 to-emerald-600',
    delay: 0.8
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    scale: 1.02
  }
};

const CareerBenefits = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0E111C] to-[#1A2036] py-20 px-4 sm:px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Build Your Career</span> With Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our proven approach combines guaranteed placement, industry-relevant curriculum, hands-on training, and expert guidance to shape your career success.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-xl bg-[#1E253B] p-6 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10`}></div>
              
              {/* Icon with gradient background */}
              <div className={`mb-6 w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              
              {/* Learn more link */}
              {/* <div className="mt-4">
                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-[#1E253B]/50 backdrop-blur-sm p-6 rounded-xl border border-[#2A324D] text-center">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-sm text-gray-300">Students Trained</div>
            <FaUsers className="mx-auto mt-3 text-blue-400 text-xl" />
          </div>
          <div className="bg-[#1E253B]/50 backdrop-blur-sm p-6 rounded-xl border border-[#2A324D] text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-sm text-gray-300">Hiring Partners</div>
            <FaHandshake className="mx-auto mt-3 text-purple-400 text-xl" />
          </div>
          <div className="bg-[#1E253B]/50 backdrop-blur-sm p-6 rounded-xl border border-[#2A324D] text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-sm text-gray-300">Placement Rate</div>
            <FaChartLine className="mx-auto mt-3 text-green-400 text-xl" />
          </div>
          <div className="bg-[#1E253B]/50 backdrop-blur-sm p-6 rounded-xl border border-[#2A324D] text-center">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-sm text-gray-300">Industry Experts</div>
            <FaBriefcase className="mx-auto mt-3 text-yellow-400 text-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerBenefits;