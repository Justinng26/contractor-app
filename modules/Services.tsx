import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
import { Route } from "@/types/route";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <section>
      <Container>
        <SectionName name="services" />
        <div className="grid grid-cols-1 md:grid-cols-3 text-white">
          {data.map((item, index) => {
            const isSecondItem = index === 1;

            return (
              <div
                key={item.title}
                className={`flex flex-col justify-between px-4 md:px-8 py-8 md:py-4 space-y-12 ${
                  isSecondItem ? "bg-white text-black" : "bg-primary"
                }`}
              >
                {/* Add your content here */}
                <h3>0{index + 1}.</h3>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="flex justify-between">
                  <Link href={item.href}>
                    <button
                      className={`border-2 ${
                        isSecondItem ? "border-black" : "border-white"
                      } p-4 inline-block`}
                    >
                      <FaArrowRight size="24" />
                    </button>
                  </Link>

                  <div
                    className={`relative rounded-lg w-16 h-full border-2 ${
                      isSecondItem
                        ? "bg-primary border-primary"
                        : "bg-white border-white"
                    }`}
                  >
                    <div
                      className={`absolute w-full h-full right-2 bottom-2 ${
                        isSecondItem ? "bg-white" : "bg-primary"
                      } `}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;

const data = [
  {
    title: "Kitchens & Bathrooms",
    href: Route.KITCHENS_AND_BATHROOMS,
    description: "Description of service 1",
  },
  {
    title: "Landscaping & Decorating",
    href: Route.LANDSCAPING_AND_DECORATING,
    description: "Description of service 2",
  },
  {
    title: "Electrical & Plumbing",
    href: Route.ELECTRICAL_AND_PLUMBING,
    description: "Description of service 3",
  },
];
