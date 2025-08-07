import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Route } from "@/types/route";

const Logo = () => {
  return (
    <Link href={Route.HOME}>
      <Image src="/logo2.png" alt="Logo" width={40} height={40} />
    </Link>
  );
};

export default Logo;
