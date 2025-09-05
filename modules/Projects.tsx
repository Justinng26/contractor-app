import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import React from "react";

//create array with image, title and href using imahes from images

const data = [
  {
    image: "/hero4.jpeg",
    title: "Project 1",
    link: "/projects/1",
  },
  {
    image: "/hero8.jpeg",
    title: "Project 2 ",
    link: "/projects/2",
  },
  {
    image: "/hero6.jpeg",
    title: "Project 3",
    link: "/projects/3",
  },
];

const Projects = () => {
  return (
    <section>
      <Container>
        <SectionName name="Projects" />

        <EmblaCarousel slides={data} />
      </Container>
    </section>
  );
};

export default Projects;
