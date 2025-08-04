// "use client";
// import React from "react";
// import { SearchParams } from "@/types/route";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// interface FilteringProps {
//   years: number[];
//   locations: string[];
// }

// const Filtering = ({ years, locations }: FilteringProps) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target;

//     const params = new URLSearchParams(searchParams.toString());
//     params.set(name, value);

//     router.push(pathname + "?" + params.toString());
//   };
//   return (
//     <div className="flex gap-4 mb-8">
//       <select
//         name="year"
//         className="border border-gray-300 rounded-md px-4 py-2"
//         onChange={handleChange}
//         defaultValue={searchParams.get(SearchParams.YEAR) as string}
//       >
//         <option value="">Filter by Year</option>
//         {years.map((year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </select>

//       <select
//         name="location"
//         className="border border-gray-300 rounded-md px-4 py-2"
//         onChange={handleChange}
//         defaultValue={searchParams.get(SearchParams.LOCATION) as string}
//       >
//         <option value="">Filter by Location</option>
//         {locations.map((location) => (
//           <option key={location} value={location}>
//             {location}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Filtering;

"use client";
import React from "react";
import { SearchParams } from "@/types/route";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilteringProps {
  years: number[];
  locations: string[];
}

const Filtering = ({ years, locations }: FilteringProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    // Reset to page 1 when filtering changes
    params.set("page", "1");

    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="flex gap-4 mb-8">
      <select
        name={SearchParams.YEAR}
        className="border border-gray-300 rounded-md px-4 py-2"
        onChange={handleChange}
        defaultValue={searchParams.get(SearchParams.YEAR) ?? ""}
      >
        <option value="">Filter by Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        name={SearchParams.LOCATION}
        className="border border-gray-300 rounded-md px-4 py-2"
        onChange={handleChange}
        defaultValue={searchParams.get(SearchParams.LOCATION) ?? ""}
      >
        <option value="">Filter by Location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtering;
