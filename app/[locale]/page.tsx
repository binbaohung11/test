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
    <div className="font-mainR">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
    </div>
  );
}
