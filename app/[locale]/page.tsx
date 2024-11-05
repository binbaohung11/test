import Introduction from "@/components/Home/Introduction";
import MainProduct from "@/components/Home/MainProduct";
import CoalProduct from "@/components/Home/CoalProduct";
import Welcome from "@/components/Home/Welcome";
import OtherProduct from "@/components/Home/OtherProduct";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Present from "@/components/Home/Present";
import News from "@/components/Home/News";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <div className="flex flex-col z-0">
        <Welcome />

        <Introduction />

        <MainProduct />

        <CoalProduct />

        <OtherProduct />

        <WhyChooseUs />

        <Present />

        <News />
      </div>
    </>
  );
}
