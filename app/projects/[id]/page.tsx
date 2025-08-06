// import SectionSplit from "@/components/SectionSplit";
// import Banner from "@/modules/Banner";
// import projects from "../page";
// import ProjectSingle from "./modules/ProjectSingle";

// export default function Work({ params }: { params: { id: string } }) {
//   const project = projects.find((project) => project.id === Number(params.id));
//   return (
//     <>
//       <Banner />

//       <SectionSplit>{project && <ProjectSingle {...project} />}</SectionSplit>
//     </>
//   );
// }

import SectionSplit from "@/components/SectionSplit";
import Banner from "@/modules/Banner";
import { projects } from "../page";
import ProjectSingle from "./modules/ProjectSingle";
import SimilarProjects from "./modules/SimilarProjects";

export default async function Work({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find(
    (project) => project.id === Number(resolvedParams.id)
  );
  const similarProjects = projects
    .filter((p) => p.location === project?.location && p.id !== project?.id)
    .slice(0, 3);
  return (
    <>
      <Banner />

      <SectionSplit>
        {project && <ProjectSingle {...project} />}
        {similarProjects.length > 0 && (
          <SimilarProjects projects={similarProjects} />
        )}
      </SectionSplit>
    </>
  );
}
