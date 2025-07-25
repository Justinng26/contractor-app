import SectionName from "@/components/SectionName";
import Card from "../components/Card";
import React from "react";

const OurManagement = () => {
  return (
    <div>
      <SectionName name="Our Management" id="our-management" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {managers.map((manager) => (
          <div key={manager.name}>
            <Card {...manager} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurManagement;

const managers = [
  {
    image: "/manager1.jpg",
    name: "Alice Johnson",
    position: "Operations Manager",
  },
  {
    image: "/manager2.jpg",
    name: "Bob Brown",
    position: "Project Manager",
  },
  {
    image: "/manager3.jpg",
    name: "Charlie Davis",
    position: "HR Manager",
  },
  {
    image: "/manager4.jpg",
    name: "Diana Evans",
    position: "Finance Manager",
  },
];
