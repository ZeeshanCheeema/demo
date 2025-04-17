"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
    },
  },
};

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications and websites built with modern technologies.",
      icon: "fas fa-code",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      icon: "fas fa-mobile-alt",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that enhance user experience.",
      icon: "fas fa-paint-brush",
      features: ["Wireframing", "Prototyping", "User Testing"],
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services for your business needs.",
      icon: "fas fa-cloud",
      features: ["AWS Services", "Azure Solutions", "Cloud Migration"],
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your business.",
      icon: "fas fa-bullhorn",
      features: ["SEO", "Social Media", "Content Marketing"],
    },
    {
      title: "Consulting",
      description:
        "Expert guidance and strategic planning for your digital transformation.",
      icon: "fas fa-chart-line",
      features: [
        "Strategy Planning",
        "Technical Consulting",
        "Process Optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-20"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-6xl font-bold mb-6"
          >
            Our Professional Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions to help your business thrive in the
            modern world.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-gray-800 p-8 rounded-xl transition-all duration-300 group"
            >
              <motion.i
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`${service.icon} text-4xl text-blue-500 mb-4 transition-transform duration-300`}
              ></motion.i>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center mt-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can help your business grow with our
            professional services.
          </motion.p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
