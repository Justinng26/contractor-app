import SectionName from "@/components/SectionName";
import Image from "next/image";
import Card from "../components/Card";
import React from "react";

const OurEmployees = () => {
  return (
    <div>
      <SectionName name="Our Employees" id="our-employees" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {people.map((person) => (
          <div key={person.name}>
            <Card {...person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEmployees;

const people = [
  {
    image: "/person1.jpg",
    name: "John Doe",
    position: "Project Manager",
  },
  {
    image: "/person2.jpg",
    name: "Jane Smith",
    position: "Lead Engineer",
  },
  {
    image: "/person3.jpg",
    name: "Alice Johnson",
    position: "Designer",
  },
  {
    image: "/person4.jpg",
    name: "Bob Brown",
    position: "Site Supervisor",
  },
];
