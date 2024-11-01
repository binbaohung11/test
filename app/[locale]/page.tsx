import Introduction from "@/components/Home/Introduction";
import MainProduct from "@/components/Home/MainProduct";
import CoalProduct from "@/components/Home/CoalProduct";
import Welcome from "@/components/Home/Welcome";
import OtherProduct from "@/components/Home/OtherProduct";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Present from "@/components/Home/Present";
import News from "@/components/Home/News";

export default function Home() {
  return (
    <div className="flex flex-col z-0">
      <div>
        <Welcome />
      </div>
      <div>
        <Introduction />
      </div>
      <div>
        <MainProduct />
      </div>
      <div>
        <CoalProduct />
      </div>
      <div>
        <OtherProduct />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <Present />
      </div>
      <div>
        <News />
      </div>
    </div>
  );
}
