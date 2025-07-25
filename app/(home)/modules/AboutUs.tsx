import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <SectionName name="About Us" id="about-us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          <h2 className="font-medium">
            OUR TEAM IS READY TO BUILD YOUR DREAMS
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            obcaecati est dolores sequi doloribus officia repudiandae voluptates
            blanditiis id quam laudantium provident sapiente sed quia nihil
            fugiat, non repellat praesentium!
          </p>
        </div>

        <div className="relative h-[200px] md:h-[450px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 z-10" />

          {/* <video
            src="/home_video.mp4"
            autoPlay
            loop
            muted
            className="object-cover h-[200px] w-full md:h-[450px]"
          /> */}
          <Image
            src="/hero3.jpg"
            alt="About Us Image"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-2 md:flex justify-between gap-4 md:gap-8 mt-4">
          {data.map((item) => (
            <div key={item.title} className="text-center">
              <h2 className="mb-2 text-primary">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;

const data = [
  {
    title: "20+",
    description: "Years of Experience",
  },
  {
    title: "100+",
    description: "Projects Completed",
  },
  {
    title: "50+",
    description: "Happy Clients",
  },
  {
    title: "10+",
    description: "Countys Served",
  },
];
