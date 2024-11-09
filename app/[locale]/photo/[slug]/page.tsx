import { Metadata } from "next";
import { getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { DOMAIN_NAME, IMAGE_INTRO_SEO } from "@/lib/helpFunc";
import { collection, query, where } from "firebase/firestore";
import PhotoDetail from "@/components/Photo/PhotoDetail/PhotoDetail";

// Modify the generateMetadata function to fetch the data based on the slug
export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const { slug } = params; // Get the slug from params
  const baseUrl = DOMAIN_NAME;

  // Initialize default values for the metadata
  let title = "Hình Ảnh - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước";
  let description =
    "Hình Ảnh - Công ty TNHH Xuất nhập khẩu Cao Nguyên Bình Phước";
  let canonicalUrl = `${baseUrl}/vn/our/certificate`;
  let image = IMAGE_INTRO_SEO; // Default image if no specific one is found
  let keywords = [""]; // Default keywords

  // Fetch blog data from Firestore based on slug
  try {
    const blogQuery = query(
      collection(db, "imageData"),
      where("slug", "==", slug) // Search by slug field
    );
    const blogSnapshot = await getDocs(blogQuery);

    if (!blogSnapshot.empty) {
      const blogData = blogSnapshot.docs[0].data();
      title = `${blogData.title} - Hình Ảnh` || title; // Set title from Firebase or default
      description = blogData.description || description; // Set description from Firebase or default
      image = blogData.image || image; // Set image from Firebase or default
      canonicalUrl = `${baseUrl}/${params.locale}/photo/${slug}`; // Dynamic canonical URL based on slug
      keywords = blogData.keywords || keywords; // Set keywords from Firebase or default
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
    keywords,
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

const PhotoDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="text-3xl font-mainB">
      <PhotoDetail params={params} /> {/* Pass the params to BlogDetail */}
      <div></div>
    </div>
  );
};

export default PhotoDetailPage;
