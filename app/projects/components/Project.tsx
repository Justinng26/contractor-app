import Image from "next/image";
import React from "react";
import LabelWithIcon from "./LabelWithIcon";

interface ProjectProps {
  title: string;
  year: number;
  location: string;
  images: string[];
}

const Project = ({ title, year, location, images }: ProjectProps) => {
  return (
    <div>
      <div className="relative h-56 w-full transform transition-transform hover:scale-105 hover:opacity-70">
        <Image
          src={images[0]}
          alt={`${title} - Main image`}
          fill
          className="object-cover"
        />

        {/* Multiple images indicator */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <rect x="6" y="6" width="12" height="12" rx="2" />
              <path d="M4 8V18a2 2 0 0 0 2 2h10" />
              <path d="M2 6V16a2 2 0 0 0 2 2h10" />
            </svg>
            {images.length}
          </div>
        )}

        <div className="absolute bottom-1 right-1 gap-1">
          <div className="flex gap-1">
            <LabelWithIcon
              text={location}
              icon="/location.png"
              alt="location"
            />
            <LabelWithIcon text={year} icon="/calendar.png" alt="calendar" />
          </div>
        </div>
      </div>
      <p className="mt-2 text-xl font-semibold">{title}</p>
    </div>
  );
};

export default Project;
