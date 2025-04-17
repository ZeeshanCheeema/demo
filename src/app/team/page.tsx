"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  dribbble?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "10+ years of experience in software development and team leadership.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Passionate about creating beautiful and intuitive user experiences.",
    social: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Full-stack developer with expertise in React and Node.js.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Experienced in leading successful product launches and team coordination.",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Wilson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Strategic marketing professional with a focus on digital growth.",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Lisa Anderson",
    role: "UX Researcher",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Dedicated to understanding user needs and improving product experiences.",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const socialIcons: Record<keyof SocialLinks, string> = {
  twitter: "fab fa-twitter",
  linkedin: "fab fa-linkedin",
  github: "fab fa-github",
  dribbble: "fab fa-dribbble",
};

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          We're a diverse group of passionate individuals working together to
          create amazing experiences.
        </motion.p>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {member.role}
                </p>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  {Object.entries(member.social).map(
                    ([platform, link]) =>
                      platform in socialIcons && (
                        <a
                          key={platform}
                          href={link}
                          className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={
                              socialIcons[platform as keyof SocialLinks]
                            }
                            aria-hidden="true"
                          ></i>
                        </a>
                      )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
