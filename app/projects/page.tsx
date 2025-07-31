import Container from "@/components/Container";
import SectionSplit from "@/components/SectionSplit";
import Banner from "@/modules/Banner";
import Link from "next/link";
import Project from "./components/Project";
import Filtering from "./components/Filtering";
import { SearchParams } from "@/types/route";

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const years = [...new Set(projects.map((project) => project.year))];
  const locations = [...new Set(projects.map((project) => project.location))];

  const filteredProjects = projects.filter((project) => {
    const year = searchParams[SearchParams.YEAR];
    const location = searchParams[SearchParams.LOCATION];

    if (year && location) {
      return project.year == Number(year) && project.location == location;
    } else if (year) {
      return project.year == Number(year);
    } else if (location) {
      return project.location == location;
    }
  });
  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-4">Our Work</h1>
          <Filtering years={years} locations={locations} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {filteredProjects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.title}>
                <Project {...project} />
              </Link>
            ))}
          </div>
        </Container>
      </SectionSplit>
    </>
  );
}

const projects = [
  {
    id: 1,
    title: "Project 1",
    year: 2021,
    location: "Stevenage",
    images: ["/hero.jpg"],
  },
  {
    id: 2,
    title: "Project 2",
    year: 2022,
    location: "Hertford",
    images: ["/hero2.jpg"],
  },
  {
    id: 3,
    title: "Project 3",
    year: 2023,
    location: "Hertfordshire",
    images: ["/hero3.jpg"],
  },
  {
    id: 4,
    title: "Project 4",
    year: 2025,
    location: "Stevenage",
    images: ["/hero.jpg"],
  },
  {
    id: 5,
    title: "Project 5",
    year: 2024,
    location: "London",
    images: ["/hero2.jpg"],
  },
];
