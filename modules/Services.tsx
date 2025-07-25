// import Container from "@/components/Container";
// import SectionName from "@/components/SectionName";
// import Link from "next/link";
// import { title } from "process";
// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const Services = () => {
//   return (
//     <section>
//       <Container>
//         <SectionName name="services" />
//         <div className="grid grid-cols-1 md:grid-cols-4 text-white">
//           {data.map((item, index) => {
//             const isWhiteBackground = index === 1 || index === 3;

//             return (
//               <div
//                 key={item.title}
//                 className={`flex flex-col justify-between px-4 md:px-8 py-8 md:py-4 space-y-12 ${
//                   isWhiteBackground ? "bg-white text-black" : "bg-primary"
//                 }`}
//               >
//                 {/* Add your content here */}
//                 <h3>0{index + 1}.</h3>
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>

//                 <div className="flex justify-between">
//                   <Link href={item.href}>
//                     <button
//                       className={`border-2 ${
//                         isWhiteBackground ? "border-black" : "border-white"
//                       } p-4 inline-block`}
//                     >
//                       <FaArrowRight size="24" />
//                     </button>
//                   </Link>

//                   <div
//                     className={`relative rounded-lg w-16 h-full border-2 ${
//                       isWhiteBackground
//                         ? "bg-primary border-primary"
//                         : "bg-white border-white"
//                     }`}
//                   >
//                     <div
//                       className={`absolute w-full h-full right-2 bottom-2 ${
//                         isWhiteBackground ? "bg-white" : "bg-primary"
//                       } `}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Services;

// const data = [
//   {
//     title: "Kitchens & Bathrooms",
//     href: "/services/general-contracting",
//     description: "Description of service 1",
//   },
//   {
//     title: "Landscaping & Decorating",
//     href: "/services/renovation-and-restoration",
//     description: "Description of service 2",
//   },
//   {
//     title: "Driveway & Garden Studios",
//     href: "/services/custom-builds",
//     description: "Description of service 3",
//   },
//   {
//     title: "Electrical & Plumbing",
//     href: "/services/maintenance-and-repairs",
//     description: "Description of service 4",
//   },
// ];

import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
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
    href: "/services/general-contracting",
    description: "Description of service 1",
  },
  {
    title: "Decorating & Landscaping",
    href: "/services/renovation-and-restoration",
    description: "Description of service 2",
  },
  {
    title: "Electrical & Plumbing",
    href: "/services/custom-builds",
    description: "Description of service 3",
  },
];
