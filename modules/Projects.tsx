import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import React from "react";

const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];

const Projects = () => {
  return (
    <section>
      <Container>
        <SectionName name="Projects" />

        <EmblaCarousel slides={images} />
      </Container>
    </section>
  );
};

export default Projects;
