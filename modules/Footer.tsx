import React from "react";
import Container from "../components/Container";
import Logo from "../components/Logo";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-4 border-t-2 border-neutral-700">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          <Logo />

          <p className="text-xs text-neutral-400 font-semibold">
            &copy; {new Date().getFullYear()} Justin Ng. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" target="_blank">
              <BsLinkedin size="24" />
            </a>

            <a href="#" target="_blank">
              <BsInstagram size="24" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
