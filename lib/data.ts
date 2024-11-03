import cubeImage1 from "../assets/image/product/cube/cube-image-1.jpg";
import cubeImage2 from "../assets/image/product/cube/cube-image-2.jpg";
import cubeImage3 from "../assets/image/product/cube/cube-image-3.jpg";
import cubeImage4 from "../assets/image/product/cube/cube-image-4.jpg";
import cubeImage5 from "../assets/image/product/cube/cube-image-5.jpg";
import cubeImage6 from "../assets/image/product/cube/cube-image-6.jpg";
import cubeImagez from "../assets/image/product/cube/than-cube-z.jpg";

import stick2x4 from "../assets/image/product/stick/STICK-2X4.jpg";
import stick1x3 from "../assets/image/product/stick/STICK-1.8X3.5.jpg";
import stick from "../assets/image/product/stick/stick.jpg";

import hexagon2x4 from "../assets/image/product/hexogon/HEXAGON-2X4.jpg";
import hexagon25x4 from "../assets/image/product/hexogon/hexagon-2.5x4.jpg";
import hexagon1 from "../assets/image/product/hexogon/HEXAGON-1.jpg";
import hexagon2 from "../assets/image/product/hexogon/HEXAGON-2.jpg";

import bbq4x5 from "../assets/image/product/bbq/coconut-charcoal-bbq-4x5.jpg";
import bbq4x10 from "../assets/image/product/bbq/coconut-charcoal-bbq-4x10.jpg";
import bbq1 from "../assets/image/product/bbq/ThanBBQ1.jpg";
import bbq2 from "../assets/image/product/bbq/ThanBBQ2.jpg";
import bbq3 from "../assets/image/product/bbq/ThanBBQ3.jpg";
import bbq4 from "../assets/image/product/bbq/ThanBBQ4.jpg";

import material1 from "../assets/image/product/Material/coconut-shell-charcoal-1-1536x1152.jpg";
import material2 from "../assets/image/product/Material/than-dua-nguyen-lieu.png";

import xc from "../assets/image/product/other/THAN-XA-CU.jpg";
import cf from "../assets/image/product/other/THAN-CAFE.jpg";

// data.ts
type TranslationFunction = (key: string) => string;

export const getProductData = (t: TranslationFunction) => [
  {
    link: "coconut-charcoal-cube",
    linkImage:
      "https://firebasestorage.googleapis.com/v0/b/bphuoc-8a14d.appspot.com/o/images%2FShisha-Coconut-Charcoal-Cube.png?alt=media&token=02e0c263-1098-405a-b850-43fc72e99e40",
    title: t("ThanVuong"),
    intro1: t("ThanVuong1"),
    intro2: t("ThanVuong2"),
    intro3: t("ThanVuong3"),
    img: [
      { image: cubeImage1, title: "Cube - (2.2x2.2x2.2)cm" },
      { image: cubeImage2, title: "Cube - (2.0x2.0x1.8)cm" },
      { image: cubeImage3, title: "Cube - (2.6x2.6x2.6)cm" },
      { image: cubeImage4, title: "Cube - (2.0x2.0x1.8)cm" },
      { image: cubeImage5, title: "Cube" },
      { image: cubeImage6, title: "Cube" },
    ],
    imagez: cubeImagez,
  },
  {
    link: "coconut-charcoal-stick",
    linkImage:
      "https://firebasestorage.googleapis.com/v0/b/bphuoc-8a14d.appspot.com/o/images%2FShisha-Round-Charcoal.png?alt=media&token=ec85049d-f736-410a-b6c9-c0cedf30cdfe",
    title: t("ThanQue"),
    intro1: t("ThanQue1"),
    intro2: t("ThanQue2"),
    intro3: t("ThanQue3"),
    img: [
      { image: stick2x4, title: "Stick - (2x4)cm" },
      { image: stick1x3, title: "Stick - (1.8x3.5)cm" },
      { image: stick, title: "stick" },
    ],
    imagez: cubeImagez,
  },
  {
    link: "coconut-charcoal-hexagonal",
    linkImage:
      "https://firebasestorage.googleapis.com/v0/b/bphuoc-8a14d.appspot.com/o/images%2Fthan-dua-hinh-luc-giac-768x480.png?alt=media&token=8fd0238b-24a1-43fb-ad13-65979c4d262c",
    title: t("ThanLG"),
    intro1: t("ThanLG1"),
    intro2: t("ThanLG2"),
    intro3: t("ThanLG3"),
    img: [
      { image: hexagon2x4, title: "Hexagon - (2x4)cm" },
      { image: hexagon25x4, title: "Hexagon - (2.5x4)cm" },
      { image: hexagon1, title: "Hexagon " },
      { image: hexagon2, title: "Hexagon" },
    ],
    imagez: cubeImagez,
  },
  {
    link: "coconut-charcoal-bbq",
    linkImage:
      "https://firebasestorage.googleapis.com/v0/b/bphuoc-8a14d.appspot.com/o/images%2FBBQ-Hexal.png?alt=media&token=7c7dcc36-cb0a-4284-9f26-9b9de741bb31",
    title: t("ThanBBQ"),
    intro1: t("ThanBBQ1"),
    intro2: t("ThanBBQ2"),
    intro3: t("ThanBBQ3"),
    img: [
      { image: bbq4x5, title: "BBQ - (4x5)cm" },
      { image: bbq4x10, title: "BBQ - (4x10)cm" },
      { image: bbq1, title: "BBQ" },
      { image: bbq2, title: "BBQ" },
      { image: bbq3, title: "BBQ" },
      { image: bbq4, title: "BBQ" },
    ],
    imagez: cubeImagez,
  },
  {
    link: "coconut-charcoal-material",
    linkImage:
      "https://firebasestorage.googleapis.com/v0/b/bphuoc-8a14d.appspot.com/o/images%2Fthan-dua-nguyen-lieu.png?alt=media&token=99be527d-08a0-4bd4-ae0b-b769bf5e90fe",
    title: t("ThanNL"),
    intro1: t("ThanNL1"),
    intro2: t("ThanNL2"),
    intro3: t("ThanNL3"),
    img: [
      { image: material1, title: t("NL") },
      { image: material2, title: t("NL") },
    ],
    imagez: cubeImagez,
  },
  {
    link: "charcoal-nacre",
    linkImage:
      "https://firebasestorage.googleapis.com/v0/b/bphuoc-8a14d.appspot.com/o/images%2FTHAN-XA-CU.jpg?alt=media&token=d090150e-5816-4fe0-9fac-685f296ccc7a",
    title: t("ThanXC"),
    intro1: t("ThanXC1"),
    intro2: t("ThanXC2"),
    intro3: t("ThanXC3"),
    img: [{ image: xc, title: t("XC") }],
    imagez: cubeImagez,
  },
  {
    link: "charcoal-cafe",
    linkImage:
      "https://firebasestorage.googleapis.com/v0/b/bphuoc-8a14d.appspot.com/o/images%2FTHAN-CAFE.jpg?alt=media&token=b1e6bbcc-698c-433e-857c-7b90fff7e7e3",
    title: t("ThanCF"),
    intro1: t("ThanCF1"),
    intro2: t("ThanCF2"),
    intro3: t("ThanCF3"),
    img: [{ image: cf, title: t("CF") }],
    imagez: cubeImagez,
  },
];

export const getCashewData = () => {};
