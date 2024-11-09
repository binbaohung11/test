"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import parse from "html-react-parser"; // Make sure this is installed
import "../../app/[locale]/news/[slug]/news.css";

const Recruitment = () => {
  const [recruitment, setRecruitment] = useState<any | null>(null);
  const db = getFirestore();
  const documentId = "Va1xvFuDzQrr4uVt3cn8";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "recruitment", documentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setRecruitment(docSnap.data());
        } else {
          console.log("No document found!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [db]);

  if (!recruitment) {
    return <p>Loading...</p>; // Optional loading state
  }

  // Function to add classes to specific elements
  const transformContent = (html: string) => {
    const transformedHtml = html
      .replace(/<h1>/g, '<h1 class="text-3xl font-bold mb-4">')
      .replace(/<h2>/g, '<h2 class="text-2xl font-semibold mb-3">')
      .replace(/<ul>/g, '<ul class="list-disc pl-5">')
      .replace(/<ol>/g, '<ol class="list-decimal pl-5">')
      .replace(/<li>/g, '<li class="mb-2">')
      .replace(
        /<blockquote>/g,
        '<blockquote class="border-l-4 border-gray-400 pl-4 italic">'
      )
      // Corrected regex and replacement for YouTube embeds
      .replace(
        /<figure class="(media|image)"> <oembed url="(.*?)"><\/oembed><\/figure>/g,
        `<iframe width="560" height="315" src="$2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"   
   allowfullscreen></iframe>`
      );

    return transformedHtml;
  };

  return (
    <div className="blog-page ">
      <div className="blog-container px-5 ">
        <div>
          <h1 className="text-[20px] md:text-[30px] md:px-20 font-bold py-10">
            Thông tin tuyển dụng
          </h1>
        </div>
        <div className="blog-content pb-10 ">
          {parse(transformContent(recruitment.content))}
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
