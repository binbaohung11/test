import PathLink from "@/components/Path/PathLink";
import Product from "@/components/Product/Product";
import { getProductData } from "@/lib/data";
import { Metadata } from "next";
interface Translations {
  [key: string]: string; // Chỉ định rằng các key là string và giá trị là string
}
import translations from "@/messages/vn.json";
import { DOMAIN_NAME } from "@/lib/helpFunc";

type Params = {
  params: {
    locale: string; // Thêm lang để xác định ngôn ngữ
    product: string;
  };
};

const translationFunction = (key: string): string => {
  return (translations["Product-Detail"] as Translations)[key] || key;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const productData = getProductData(translationFunction);
  const currentProduct = productData.find(
    (item) => item.link === params.product
  );

  const title = `${currentProduct?.title} - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước`;
  const description = currentProduct
    ? `${currentProduct.intro1} `
    : "Sản phẩm chất lượng cao của chúng tôi";

  // Kiểm tra ngôn ngữ từ `params` hoặc nguồn khác
  const lang = params.locale || "vn"; // giả sử bạn có `params.lang` để xác định ngôn ngữ
  const url =
    lang === "vn"
      ? `${DOMAIN_NAME}/vn/product/${params.product}`
      : `${DOMAIN_NAME}/en/product/${params.product}`;
  const imageUrl = currentProduct?.linkImage || "";

  return {
    title,
    description,
    alternates: {
      canonical: url, // Thêm canonical URL
    },
    robots: {
      index: true, // Cho phép lập chỉ mục
      follow: true, // Cho phép theo các liên kết trên trang
      nocache: false, // Cho phép cache
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: currentProduct?.title || "Sản phẩm",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl,
    },
  };
}

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
