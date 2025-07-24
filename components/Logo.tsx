import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo2.png" alt="Logo" width={40} height={40} />
    </Link>
  );
};

export default Logo;
