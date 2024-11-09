import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/icons_navbar/highlandbp-logo-iso.png"; // Import the image
import "../../../app/globals.css";
const NavbarAdmin = () => {
  return (
    <nav className=" bg-black shadow-xl p-4 w-full flex items-center justify-between ">
      <div className=" ">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <ul className="flex space-x-10 ml-16 text-[24px] font-mainB ">
        <li>
          <Link href="/admin/blog">
            <p className="text-white hover:underline">Blog</p>
          </Link>
        </li>
        <li>
          <Link href="/admin/recruitment">
            <p className="text-white hover:underline">Tuyển Dụng</p>
          </Link>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default NavbarAdmin;
