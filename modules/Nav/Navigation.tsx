"use client";

import Logo from "@/components/Logo";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Container from "@/components/Container";
import Links from "./Links";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="container mx-auto px-4 fixed top-0 left-0 right-0 flex justify-between items-center h-16 bg-white md:hidden z-50">
        <Logo />

        <button>
          {isOpen ? <FaTimes size="24" /> : <GiHamburgerMenu size="24" />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 bg-white z-50">
          <Container>
            <div className="flex justify-center mt-8">
              <Links />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Navigation;
