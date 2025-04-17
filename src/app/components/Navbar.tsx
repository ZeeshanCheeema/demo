"use client";

import Link from "next/link";
import { useState, useCallback, memo, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = memo(
  ({
    href,
    children,
    isActive,
  }: {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
  }) => (
    <Link
      href={href}
      className={`relative text-sm leading-6 font-semibold transition-colors ${
        isActive ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  )
);

NavLink.displayName = "NavLink";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm"
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" onClick={closeMenu}>
            <span className="sr-only">Your Company</span>
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            >
              DEVSOUL
            </motion.h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </motion.button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink href="/" isActive={pathname === "/"}>
            HOME
          </NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>
            ABOUT
          </NavLink>
          <NavLink href="/team" isActive={pathname === "/team"}>
            TEAM
          </NavLink>
          <NavLink href="/contact" isActive={pathname === "/contact"}>
            CONTACT
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden fixed  bg-black inset-0 z-[100]`}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="fixed  bg-black"
          onClick={closeMenu}
        />

        {/* Menu panel */}
        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0f172a] px-6 py-6 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="-m-1.5 p-1.5" onClick={closeMenu}>
              <span className="sr-only">Your Company</span>
              <h1 className="text-white font-bold text-2xl">DEVSOUL</h1>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
              onClick={closeMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
          <div className="mt-10  flow-root bg-[#0f172a] px-5 py-5 rounded-md">
            <div className="space-y-8">
              <div className="space-y-6">
                <Link
                  href="/"
                  className={`block text-lg font-semibold transition-colors ${
                    pathname === "/"
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={closeMenu}
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className={`block text-lg font-semibold transition-colors ${
                    pathname === "/about"
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={closeMenu}
                >
                  ABOUT
                </Link>
                <Link
                  href="/team"
                  className={`block text-lg font-semibold transition-colors ${
                    pathname === "/team"
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={closeMenu}
                >
                  TEAM
                </Link>
                <Link
                  href="/contact"
                  className={`block text-lg font-semibold transition-colors ${
                    pathname === "/contact"
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={closeMenu}
                >
                  CONTACT
                </Link>
              </div>
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default memo(Navbar);
