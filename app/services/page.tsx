import SectionSplit from "@/components/SectionSplit";
import Banner from "@/modules/Banner";
import Achievement from "./modules/Achievement";
import Services from "@/modules/Services";
import Projects from "@/modules/Projects";

export default function ServicesPage() {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Achievement />
        <Services />
        <Projects />
      </SectionSplit>
    </>
  );
}
