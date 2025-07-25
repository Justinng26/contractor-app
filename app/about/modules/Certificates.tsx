import SectionName from "@/components/SectionName";
import Image from "next/image";
import React from "react";

const Certificates = () => {
  return (
    <div>
      <SectionName name="Certificates" id="certificates" />

      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro,
        aut dolorum animi itaque quos, recusandae error ea, aspernatur
        reprehenderit sequi exercitationem ratione quam unde sed corrupti harum
        nisi distinctio.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="flex justify-center items-center">
          <Image
            src="/certificate.jpg"
            alt="certificate"
            width={160}
            height={160}
            className="rounded-full overflow-hidden"
          />
        </div>

        <div>
          <Image
            src="/certificate2.png"
            alt="certificate"
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
