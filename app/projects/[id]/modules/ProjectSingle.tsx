import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import LabelWithIcon from "../../components/LabelWithIcon";

interface ProjectSingleProps {
  title: string;
  images: string[];
  description: string;
  location: string;
  year: number;
}

const ProjectSingle = ({
  title,
  images,
  description,
  location,
  year,
}: ProjectSingleProps) => {
  return (
    <section>
      <Container>
        <h3 className="mb-4">{title}</h3>

        <EmblaCarousel
          slides={images}
          isControlsVisible={true}
          options={{ loop: true }} // Optional: enable infinite loop
        />

        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_0.2fr] gap-4 md:gap-9 mt-4">
          <p>{description}</p>

          <div className="flex flex-wrap items-center justify-start md:justify-end">
            <LabelWithIcon
              icon="/location.png"
              alt="location"
              text={location}
            />

            <LabelWithIcon icon="/calendar.png" alt="calendar" text={year} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSingle;
