// import Container from "@/components/Container";
// import SectionSplit from "@/components/SectionSplit";
// import Banner from "@/modules/Banner";
// import Link from "next/link";
// import Project from "./components/Project";
// import Filtering from "./components/Filtering";
// import { SearchParams } from "@/types/route";
// import PaginationControl from "./components/PaginationControl";

// export default function ProjectsPage({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const page = searchParams[SearchParams.PAGE] ?? "1";
//   const perPage = searchParams[SearchParams.PER_PAGE] ?? "5";

//   const start = (Number(page) - 1) * Number(perPage);
//   const end = start + Number(perPage);

//   const totalPages = Math.ceil(projects.length / Number(perPage));

//   const years = [...new Set(projects.map((project) => project.year))];
//   const locations = [...new Set(projects.map((project) => project.location))];

//   //   const years = projects.map((project) => project.year);
//   //   const locations = projects.map((project) => project.location);

//   const filteredProjects = projects.filter((project) => {
//     const year = searchParams[SearchParams.YEAR];
//     const location = searchParams[SearchParams.LOCATION];

//     if (year && location) {
//       return project.year == Number(year) && project.location == location;
//     } else if (year) {
//       return project.year == Number(year);
//     } else if (location) {
//       return project.location == location;
//     } else {
//       return true;
//     }
//   });

//   const paginatedProjects = filteredProjects.slice(start, end);

//   const isPaginationVisible = filteredProjects.length > Number(perPage);
//   return (
//     <>
//       <Banner />

//       <SectionSplit>
//         <Container>
//           <h1 className="mb-4">Our Work</h1>
//           <Filtering years={years} locations={locations} />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
//             {paginatedProjects.map((project) => (
//               <Link href={`/projects/${project.id}`} key={project.title}>
//                 <Project {...project} />
//               </Link>
//             ))}
//           </div>

//           {isPaginationVisible && (
//             <PaginationControl
//               page={page}
//               perPage={perPage}
//               hasNextPage={projects.length > end}
//               hasPrevPage={start > 0}
//               totalPages={totalPages}
//             />
//           )}
//         </Container>
//       </SectionSplit>
//     </>
//   );
// }

// const projects = [
//   {
//     id: 1,
//     title: "Project 1",
//     year: 2021,
//     location: "Stevenage",
//     images: ["/hero.jpg"],
//   },
//   {
//     id: 2,
//     title: "Project 2",
//     year: 2022,
//     location: "Hertford",
//     images: ["/hero2.jpg"],
//   },
//   {
//     id: 3,
//     title: "Project 3",
//     year: 2023,
//     location: "Hertfordshire",
//     images: ["/hero3.jpg"],
//   },
//   {
//     id: 4,
//     title: "Project 4",
//     year: 2024,
//     location: "Stevenage",
//     images: ["/hero.jpg"],
//   },
//   {
//     id: 5,
//     title: "Project 5",
//     year: 2025,
//     location: "London",
//     images: ["/hero2.jpg"],
//   },
//   {
//     id: 1,
//     title: "Project 6",
//     year: 2021,
//     location: "Stevenage",
//     images: ["/hero.jpg"],
//   },
//   {
//     id: 2,
//     title: "Project 7",
//     year: 2022,
//     location: "Hertford",
//     images: ["/hero2.jpg"],
//   },
//   {
//     id: 3,
//     title: "Project 8",
//     year: 2023,
//     location: "Hertfordshire",
//     images: ["/hero3.jpg"],
//   },
//   {
//     id: 4,
//     title: "Project 9",
//     year: 2024,
//     location: "Stevenage",
//     images: ["/hero.jpg"],
//   },
//   {
//     id: 5,
//     title: "Project 10",
//     year: 2025,
//     location: "London",
//     images: ["/hero2.jpg"],
//   },
// ];

import Container from "@/components/Container";
import SectionSplit from "@/components/SectionSplit";
import Banner from "@/modules/Banner";
import Link from "next/link";
import Project from "./components/Project";
import Filtering from "./components/Filtering";
import { SearchParams } from "@/types/route";
import PaginationControl from "./components/PaginationControl";

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams[SearchParams.PAGE] ?? "1";
  const perPage = resolvedSearchParams[SearchParams.PER_PAGE] ?? "5";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  const years = [...new Set(projects.map((project) => project.year))];
  const locations = [...new Set(projects.map((project) => project.location))];

  const filteredProjects = projects.filter((project) => {
    const year = resolvedSearchParams[SearchParams.YEAR];
    const location = resolvedSearchParams[SearchParams.LOCATION];

    if (year && location) {
      return project.year == Number(year) && project.location == location;
    } else if (year) {
      return project.year == Number(year);
    } else if (location) {
      return project.location == location;
    } else {
      return true;
    }
  });

  const paginatedProjects = filteredProjects.slice(start, end);

  // Fix: Use filteredProjects.length instead of projects.length for calculations
  const totalPages = Math.ceil(filteredProjects.length / Number(perPage));
  const isPaginationVisible = filteredProjects.length > Number(perPage);

  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-4">Our Work</h1>
          <Filtering years={years} locations={locations} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {paginatedProjects.map((project) => (
              <Link
                href={`/projects/${project.id}`}
                key={`${project.id}-${project.title}`}
              >
                <Project {...project} />
              </Link>
            ))}
          </div>

          {isPaginationVisible && (
            <PaginationControl
              page={page}
              perPage={perPage}
              hasNextPage={end < filteredProjects.length}
              hasPrevPage={start > 0}
              totalPages={totalPages}
            />
          )}
        </Container>
      </SectionSplit>
    </>
  );
}

// Fix: Make IDs unique
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
    year: 2024,
    location: "Stevenage",
    images: ["/hero.jpg"],
  },
  {
    id: 5,
    title: "Project 5",
    year: 2025,
    location: "London",
    images: ["/hero2.jpg"],
  },
  {
    id: 6,
    title: "Project 6",
    year: 2021,
    location: "Stevenage",
    images: ["/hero.jpg"],
  },
  {
    id: 7,
    title: "Project 7",
    year: 2022,
    location: "Hertford",
    images: ["/hero2.jpg"],
  },
  {
    id: 8,
    title: "Project 8",
    year: 2023,
    location: "Hertfordshire",
    images: ["/hero3.jpg"],
  },
  {
    id: 9,
    title: "Project 9",
    year: 2024,
    location: "Stevenage",
    images: ["/hero.jpg"],
  },
  {
    id: 10,
    title: "Project 10",
    year: 2025,
    location: "London",
    images: ["/hero2.jpg"],
  },
];
