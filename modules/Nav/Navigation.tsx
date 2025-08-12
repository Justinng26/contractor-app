"use client";

import Logo from "@/components/Logo";
import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Container from "@/components/Container";
import Links from "./Links";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Full-width background container */}
      <nav className="fixed top-0 left-0 right-0 bg-white md:hidden z-50">
        {/* Content container with proper spacing */}
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Logo />

          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size="24" /> : <GiHamburgerMenu size="24" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 bg-white z-50">
          <Container>
            <div className="flex justify-center mt-8">
              <Links handleLinkClick={handleLinkClick} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Navigation;
