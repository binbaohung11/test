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
      "https://firebasestorage.googleapis.com/v0/b/highlandbp-9a4d1.firebasestorage.app/o/Shisha-Coconut-Charcoal-Cube.png?alt=media&token=1a82d6c2-17b0-43ee-bda7-4d6aa86fa815",
    title: t("ThanVuong"),
    intro1: t("ThanVuong1"),
    intro2: t("ThanVuong2"),
    intro3: t("ThanVuong3"),
    intro4: t("ThanVuong4"),
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
      "https://firebasestorage.googleapis.com/v0/b/highlandbp-9a4d1.firebasestorage.app/o/Shisha-Round-Charcoal.png?alt=media&token=ba133123-ad89-4eda-a60c-5220af8fca48",
    title: t("ThanQue"),
    intro1: t("ThanQue1"),
    intro2: t("ThanQue2"),
    intro3: t("ThanQue3"),
    intro4: t("ThanQue4"),
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
      "https://firebasestorage.googleapis.com/v0/b/highlandbp-9a4d1.firebasestorage.app/o/than-dua-hinh-luc-giac-768x480.png?alt=media&token=bb630a0b-687b-4201-b7e7-d230166ecbb5",
    title: t("ThanLG"),
    intro1: t("ThanLG1"),
    intro2: t("ThanLG2"),
    intro3: t("ThanLG3"),
    intro4: t("ThanLG4"),
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
      "https://firebasestorage.googleapis.com/v0/b/highlandbp-9a4d1.firebasestorage.app/o/BBQ-Hexal.png?alt=media&token=1470ce86-74dc-4c0e-8300-a0ad4b5efd4a",
    title: t("ThanBBQ"),
    intro1: t("ThanBBQ1"),
    intro2: t("ThanBBQ2"),
    intro3: t("ThanBBQ3"),
    intro4: t("ThanBBQ4"),
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
      "https://firebasestorage.googleapis.com/v0/b/highlandbp-9a4d1.firebasestorage.app/o/than-dua-nguyen-lieu.png?alt=media&token=784a7a2c-6c94-40d4-a5f6-3a5293fdd3bc",
    title: t("ThanNL"),
    intro1: t("ThanNL1"),
    intro2: t("ThanNL2"),
    intro3: t("ThanNL3"),
    intro4: t("ThanNL4"),
    img: [
      { image: material1, title: t("NL") },
      { image: material2, title: t("NL") },
    ],
    imagez: cubeImagez,
  },
  {
    link: "charcoal-nacre",
    linkImage:
      "https://firebasestorage.googleapis.com/v0/b/highlandbp-9a4d1.firebasestorage.app/o/THAN-XA-CU.jpg?alt=media&token=33a074e0-f337-4278-93e2-6a9386925e18",
    title: t("ThanXC"),
    intro1: t("ThanXC1"),
    intro2: t("ThanXC2"),
    intro3: t("ThanXC3"),
    intro4: t("ThanXC4"),
    img: [{ image: xc, title: t("XC") }],
    imagez: cubeImagez,
  },
  {
    link: "charcoal-cafe",
    linkImage:
      "https://firebasestorage.googleapis.com/v0/b/highlandbp-9a4d1.firebasestorage.app/o/THAN-CAFE.jpg?alt=media&token=1338b681-250f-46e6-bbcb-8fd90c4f3cce",
    title: t("ThanCF"),
    intro1: t("ThanCF1"),
    intro2: t("ThanCF2"),
    intro3: t("ThanCF3"),
    intro4: t("ThanCF4"),
    img: [{ image: cf, title: t("CF") }],
    imagez: cubeImagez,
  },
];

export const getCashewData = () => {};
