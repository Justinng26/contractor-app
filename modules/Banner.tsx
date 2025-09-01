import Overlay from "@/components/Overlay";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const Banner = () => {
  return (
    <div className="relative w-full h-[280px] md:h-[300px]">
      <Image
        src="/hero10.jpeg"
        alt="Banner Image"
        fill
        className="object-cover object-center"
      />

      <Overlay />

      <div className="absolute bottom-4 left-0 w-full h-auto">
        <Container>
          <Breadcrumbs />
        </Container>
      </div>
    </div>
  );
};

export default Banner;
