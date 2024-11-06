import { Metadata } from "next";
import { getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { DOMAIN_NAME, IMAGE_INTRO_SEO } from "@/lib/helpFunc";
import BlogDetail from "@/components/News/BlogDetail/BlogDetail";
import { collection, query, where } from "firebase/firestore";

// Modify the generateMetadata function to fetch the data based on the slug
export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const { slug } = params; // Get the slug from params
  const baseUrl = DOMAIN_NAME;

  // Initialize default values for the metadata
  let title =
    "Chứng Chỉ Chất Lượng - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước";
  let description =
    "CHÚNG TÔI CAM KẾT - Với khách hàng: Cung cấp, thỏa mãn các nhu cầu của khách hàng với chất lượng sản phẩm và dịch vụ tốt nhất. Là sự lựa chọn đáng tin cậy và hiệu quả cho khách hàng.";
  let canonicalUrl = `${baseUrl}/vn/our/certificate`;
  let image = IMAGE_INTRO_SEO; // Default image if no specific one is found

  // Fetch blog data from Firestore based on slug
  try {
    const blogQuery = query(
      collection(db, "editorData"),
      where("slug", "==", slug) // Tìm kiếm dựa trên trường slug
    );
    const blogSnapshot = await getDocs(blogQuery);

    if (!blogSnapshot.empty) {
      const blogData = blogSnapshot.docs[0].data();
      title = `${blogData.title} - Tin Tức` || title; // Set the title from Firebase or default
      description = blogData.description || description; // Set the description from Firebase or default
      image = blogData.image || image; // Set the image from Firebase or default
      canonicalUrl = `${baseUrl}/${params.locale}/news/${slug}`; // Dynamic canonical URL based on slug
    } else {
      console.error("Blog not found");
    }
  } catch (error) {
    console.error("Error fetching blog data: ", error);
  }

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: image,
          width: 810,
          height: 463,
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image,
    },
  };
}

const DetailBlog = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="text-3xl font-mainB">
      <BlogDetail params={params} /> {/* Pass the params to BlogDetail */}
      <div>
        
      </div>
    </div>
  );
};

export default DetailBlog;
