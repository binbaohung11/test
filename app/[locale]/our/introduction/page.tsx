import Introductions from "@/components/Our/Introduction/Introductions";
import Product from "@/components/Our/Introduction/Product";
import Structure from "@/components/Our/Introduction/Structure";
import PathLink from "@/components/Path/PathLink";
import { useTranslations } from "next-intl";
import React from "react";

const Introduction = () => {
  return (
    <div className="py-5 px-[10rem] max-sm:px-[3rem] max-md:px-[3rem] max-lg:px-[3rem] max-xl:px-[5rem] max-2xl:px-[7rem] max-xl:py-4 max-2xl:py-10">
      <PathLink />

      <div>
        <Introductions />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Structure />
      </div>
    </div>
  );
};

export default Introduction;
