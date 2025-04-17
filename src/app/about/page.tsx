"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const interval = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.round(currentCount));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We are a team of passionate professionals dedicated to delivering
            excellence.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Our Story</h3>
              <p className="text-gray-200">
                Founded in 2020, we've grown from a small startup to a leading
                industry player.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with innovative technology solutions that
                drive growth and success in the digital age.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the global leader in digital transformation, helping
                businesses thrive in an ever-evolving technological landscape.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  Innovation and Creativity
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  Excellence in Service
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  Integrity and Transparency
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  Customer-Centric Approach
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: 100, label: "Projects Completed" },
            { number: 50, label: "Happy Clients" },
            { number: 24, label: "Support" },
            { number: 5, label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-gray-800 p-6 rounded-xl transition-all duration-300 group"
            >
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl font-bold text-blue-500 mb-2 group-hover:text-blue-400 transition-colors duration-300"
              >
                <Counter value={stat.number} />
                {stat.label === "Support" && "/7"}
              </motion.h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
