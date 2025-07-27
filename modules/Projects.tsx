import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import React from "react";

//create array with image, title and href using imahes from images

const data = [
  {
    image: "/hero.jpg",
    title: "Project 1",
    link: "/project1",
  },
  {
    image: "/hero2.jpg",
    title: "Project 2 ",
    link: "/project2",
  },
  {
    image: "/hero3.jpg",
    title: "Project 3",
    link: "/project3",
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
