// import React from "react";
// import Image from "next/image";
// import Button from "@/components/Button";
// import Container from "@/components/Container";
// import StarImg from "@/public/star.png";
// import Link from "next/link";
// import { FaArrowDown } from "react-icons/fa";
// import HeroCarousel from "./HeroCarousel";

// const Hero = () => {
//   return (
//     <div className="relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
//       <HeroCarousel />
//       <Container className="relative z-10 flex flex-col justify-between h-full text-white">
//         <div></div>

//         <div className="flex gap-2">
//           <div className="flex items-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Image
//                 key={`stars${i}`}
//                 src={StarImg}
//                 alt="Star"
//                 width={16}
//                 height={16}
//               />
//             ))}
//           </div>

//           <p className="text-sm text-white font-bold">
//             25+ successful projects
//           </p>
//         </div>
//         {/* // is this div necessary?// */}
//         <div>
//           <h1 className="my-4">
//             WE BUILD WITH <br />
//             <span className="text-primary">PASSION</span>"
//           </h1>

//           <p className="mb-8">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
//             amet voluptatum dolore autem facere natus dolor, itaque nulla
//             voluptatibus sint ad magnam quidem nam error pariatur laudantium
//             sequi? Ex, enim.
//           </p>

//           <Button />
//         </div>

//         <div>
//           <Link
//             href="/"
//             className="rounded-full pg-2 bg-transparent text-white border-2 border-white shadow-lg animate-bounce"
//           >
//             <FaArrowDown size="24" />
//           </Link>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import StarImg from "@/public/star.png";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import HeroCarousel from "./HeroCarousel";
import Badge from "@/components/Badge";

const Hero = () => {
  return (
    <div className="relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
      <HeroCarousel />
      <Container className="relative z-10 flex flex-col justify-between h-full text-white">
        <div></div>

        <div>
          <Badge />

          <h1 className="mb-2">
            WE BUILD WITH <br />
            <span className="text-primary">PASSION</span>
          </h1>

          <p className="mb-8 md:max-w-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            amet voluptatum dolore autem facere natus dolor, itaque nulla
            voluptatibus sint ad magnam quidem nam error pariatur laudantium
            sequi? Ex, enim.
          </p>

          <Button />
        </div>

        <div>
          <Link
            href="/"
            className="inline-block rounded-full pg-2 bg-transparent text-white border-2 border-white shadow-lg animate-bounce"
          >
            <FaArrowDown size="24" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
