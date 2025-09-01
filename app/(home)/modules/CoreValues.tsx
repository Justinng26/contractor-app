import React from "react";
import Image from "next/image";

const CoreValues = () => {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((item, index) => {
          const isSecondItem = index === 1;

          return (
            <div
              key={item.title}
              className={`flex flex-col items-center p-6 text-white ${
                isSecondItem ? "bg-primary" : ""
              }`}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt="icon"
                    width={34}
                    height={34}
                    className={isSecondItem ? "invert" : ""}
                  />
                </div>
                <h3 className="text-white">{item.title}</h3>
                <p className="max-w-sm text-white">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const data = [
  {
    img: "/excellence.png",
    title: "Excellence",
    description:
      "We strive for excellence in every project, ensuring the highest quality standards.",
  },
  {
    img: "/lamp.png",
    title: "Innovation",
    description:
      "We embrace innovation to deliver cutting-edge solutions that meet the evolving needs of our clients.",
  },
  {
    img: "/customer.png",
    title: "Customer Focus",
    description:
      "Our clients are at the heart of everything we do, and we prioritize their needs and satisfaction.",
  },
];
export default CoreValues;
