import cubeImage1 from "../assets/image/product/cube/cube-image-1.jpg";
import cubeImage2 from "../assets/image/product/cube/cube-image-2.jpg";
import cubeImage3 from "../assets/image/product/cube/cube-image-3.jpg";
import cubeImage4 from "../assets/image/product/cube/cube-image-4.jpg";
import cubeImage5 from "../assets/image/product/cube/cube-image-5.jpg";
import cubeImage6 from "../assets/image/product/cube/cube-image-6.jpg";

import stick2x4 from "../assets/image/product/stick/STICK-2X4.jpg";
import stick1x3 from "../assets/image/product/stick/STICK-1.8X3.5.jpg";
import stick from "../assets/image/product/stick/stick.jpg";

// data.ts
export const getProductData = (t: any) => [
  {
    link: "coconut-charcoal-cube",
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
  },
  {
    link: "coconut-charcoal-stick",
    title: t("ThanQue"),
    intro1: t("ThanQue1"),
    intro2: t("ThanQue2"),
    intro3: t("ThanQue3"),
    img: [
      { image: stick2x4, title: "Stick - (2x4)cm" },
      { image: stick1x3, title: "Stick - (1.8x3.5)cm" },
      { image: stick, title: "stick" },
    ],
  },
  {
    link: "coconut-charcoal-hexagonal",
    title: t("ThanLG"),
    intro1: t("ThanLG1"),
    intro2: t("ThanLG2"),
    intro3: t("ThanLG3"),
    img: [
      { image: cubeImage1, title: "cube 1" },
      { image: cubeImage2, title: "cube 2" },
      { image: cubeImage3, title: "cube 3" },
      { image: cubeImage4, title: "cube 4" },
      { image: cubeImage5, title: "cube 5" },
      { image: cubeImage6, title: "cube 6" },
    ],
  },
  {
    link: "coconut-charcoal-bbq",
    title: t("ThanBBQ"),
    intro1: t("ThanBBQ1"),
    intro2: t("ThanBBQ2"),
    intro3: t("ThanBBQ3"),
    img: [
      { image: cubeImage1, title: "cube 1" },
      { image: cubeImage2, title: "cube 2" },
      { image: cubeImage3, title: "cube 3" },
      { image: cubeImage4, title: "cube 4" },
      { image: cubeImage5, title: "cube 5" },
      { image: cubeImage6, title: "cube 6" },
    ],
  },
  {
    link: "coconut-charcoal-material",
    title: t("ThanNL"),
    intro1: t("ThanNL1"),
    intro2: t("ThanNL2"),
    intro3: t("ThanNL3"),
    img: [
      { image: cubeImage1, title: "cube 1" },
      { image: cubeImage2, title: "cube 2" },
      { image: cubeImage3, title: "cube 3" },
      { image: cubeImage4, title: "cube 4" },
      { image: cubeImage5, title: "cube 5" },
      { image: cubeImage6, title: "cube 6" },
    ],
  },
];
