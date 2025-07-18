import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import StarImg from "@/public/star.png";

const Hero = () => {
  return (
    <div className="relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
      <Container className="relative z-10 flex flex-col justify-between h-full text-white">
        <div></div>

        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Image
                key={`stars${i}`}
                src={StarImg}
                alt="Star"
                width={16}
                height={16}
              />
            ))}
          </div>

          <p className="text-sm text-white font-bold">
            25+ sunccessful projects
          </p>
        </div>

        <div>
          <h1 className="my-4">
            WE BUILD WITH <br />
            <span className="text-primary">PASSION</span>"
          </h1>

          <p className="mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            amet voluptatum dolore autem facere natus dolor, itaque nulla
            voluptatibus sint ad magnam quidem nam error pariatur laudantium
            sequi? Ex, enim.
          </p>

          <Button />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
