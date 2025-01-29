import React from "react";
import Link from "next/link";
import { Home, User, Mail } from "lucide-react";

interface VerticalNavigationProps {
  activeSection: string;
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({
  activeSection = "landing",
}) => {
  return (
    <nav className="fixed top-0 right-0 h-full w-24 bg-transparent text-[#c2c2c2] flex flex-col items-center justify-center py-8 z-20">
      <Link
        href="#landing"
        className={`mb-8 flex items-center hover:text-[#FFE2DA] ${
          activeSection === "landing" ? "text-[#FFE2DA]" : ""
        }`}
        title="Root"
      >
        <Home className="mr-2" />
      </Link>
      <Link
        href="#about"
        className={`mb-8 flex items-center hover:text-[#FFE2DA] ${
          activeSection === "about" ? "text-[#FFE2DA]" : ""
        }`}
        title="About Me"
      >
        <User className="mr-2" />
      </Link>
      <Link
        href="#contact"
        className={`flex items-center hover:text-[#FFE2DA] ${
          activeSection === "contact" ? "text-[#FFE2DA]" : ""
        }`}
        title="Contact Me"
      >
        <Mail className="mr-2" />
      </Link>
    </nav>
  );
};

export default VerticalNavigation;
