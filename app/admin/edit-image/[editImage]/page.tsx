import EditPhoto from "@/components/Admin/Dashboard/Photo/EditPhoto";
import React from "react";

const PhotoEditPage = ({ params }: { params: { editImage: string } }) => {
  return (
    <div>
      <EditPhoto params= {params}/>
    </div>
  );
};

export default PhotoEditPage;
