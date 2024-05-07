import React from "react";
import { FileUploader } from "react-drag-drop-files";
import toast from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Dashboard = () => {

  const handleChange = (file) => {
    console.log(file);
  }

  const handleTypeError = (error) => {
    toast.error(error)
  }

  return (
    <div className="fixed inset-0 bg-primary bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-primary rounded-md w-[45rem] h-[20rem] overflow-auto">
        <div className="h-full flex justify-center items-center ">
          <FileUploader handleChange={handleChange} onTypeError={handleTypeError} types={['pdf']}>
            <div
              className="w-48 h-48 border border-dashed border-[#FFFF]
          rounded-full flex flex-col justify-center items-center text-white cursor-pointer"
            >
              <AiOutlineCloudUpload size={80} />
              <p>Drop Your FIle Here!</p>
            </div>
          </FileUploader>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
