import EditVideo from "@/components/Admin/Dashboard/Video/EditVideo";
import React from "react";

const EditVideoPage = ({ params }: { params: { editVideo: string } }) => {
  return (
    <div>
      <EditVideo params={params} />
    </div>
  );
};

export default EditVideoPage;
