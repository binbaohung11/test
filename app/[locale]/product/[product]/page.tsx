import PathLink from "@/components/Path/PathLink";
import Product from "@/components/Product/Product";

const ProductPage = () => {
  return (
    <div className="py-5 px-3 md:px-10 lg:px-20 xl:px-40 lg:py-20">
      <PathLink />

      <div>
        <Product />
      </div>
    </div>
  );
};

export default ProductPage;
