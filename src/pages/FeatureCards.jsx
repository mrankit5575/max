import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLaptopCode, FaChalkboardTeacher, FaCertificate, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaLaptopCode className="text-3xl text-yellow-400" />,
    target: 60,
    subtitle: 'Courses',
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-yellow-400" />,
    target: 50,
    subtitle: 'Instructors',
  },
  {
    icon: <FaCertificate className="text-3xl text-yellow-400" />,
    target: 8000,
    subtitle: 'Certified',
  },
  {
    icon: <FaUsers className="text-3xl text-yellow-400" />,
    target: 10000,
    subtitle: 'Students',
  },
];

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.1, 1],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  const animateCount = () => {
    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    animateCount(); // Animate on mount
  }, []);

  return (
    <motion.div
      className="text-2xl font-bold mb-1 text-red-500"
      onHoverStart={() => {
        setCount(0);
        animateCount(); // Animate on hover again
      }}
    >
      {count}+
    </motion.div>
  );
};

const FeatureCards = () => {
  return (
    <motion.section
      className="bg-[#0f172a] py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            when: "beforeChildren",
          },
        },
      }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:border-white/40 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="flex items-center justify-center mb-4"
              variants={iconVariants}
              initial="initial"
              animate="animate"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20">
                {feature.icon}
              </div>
            </motion.div>

            {typeof feature.target === "number" ? (
              <Counter target={feature.target} />
            ) : (
              <div className="text-2xl font-bold mb-1 text-red-500">
                {feature.title}+
              </div>
            )}

            <motion.div
              className="text-sm opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {feature.subtitle}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeatureCards;
