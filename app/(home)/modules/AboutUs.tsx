import Container from "@/components/Container";
import React from "react";

const AboutUs = () => {
  return (
    <section>
      <Container>
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

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100" />

          <video
            src="/home_video.mp4"
            autoPlay
            loop
            muted
            className="object-cover h-[200px] w-full md:h-[450px]"
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
