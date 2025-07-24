import Container from "@/components/Container";
import SectionSplit from "@/components/SectionSplit";
import Banner from "@/modules/Banner";
import CompanyHistory from "./modules/CompanyHistory";

export default function About() {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-8">About Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-8 relative min-h-screen">
            <div className="space-y-8">
              <CompanyHistory />
            </div>

            <div></div>
          </div>
        </Container>
      </SectionSplit>
    </>
  );
}
