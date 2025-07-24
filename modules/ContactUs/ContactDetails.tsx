import React from "react";
import Image from "next/image";
import Award from "@/public/award.png";
import Badge from "@/components/Badge";

const ContactDetails = () => {
  return (
    <div>
      <div className="relative w-24 h-24">
        <Image
          src={Award}
          alt="award"
          fill
          className="object-cover rounded-b-full"
        />
      </div>
      <h2 className="my-4">Contact Us</h2>
      <p className="text-lg mb-4">
        lorem 15 ipsum dolor sit amet, consectetur adipiscing elit. Sed
        <br />
        <br />
        lorem 30 ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem 10
        ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        <br />
        lorem 20 ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem 25
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Badge />
    </div>
  );
};

export default ContactDetails;
