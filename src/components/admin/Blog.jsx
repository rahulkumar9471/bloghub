import React, { useState } from "react";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { uploadPdf } from "../../api/blog";
import toast from "react-hot-toast";
import BlogForm from "./BlogForm";

const Blog = () => {
  const [open, setOpen] = useState(false);
  const [pdfUploaded, setPdfUploaded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [pdfInfo, setPdfInfo] = useState({});
  const [blogInfo, setBlogInfo] = useState({
    title: "",
    description: "",
    author: {},
    publishDate: "",
    status: "",
    type: "",
    genres: [],
    tags: [],
    cast: [],
    writers: [],
    pdf: {
      url: "",
      public_id: "",
    },
  });

  const handleTypeError = (error) => {
    toast.error(error);
  };

  const handleUploadPdf = async (data) => {
    try {
      const { error, public_id, url } = await uploadPdf(
        data,
        setUploadProgress
      );
      if (error) {
        toast.error(error);
        setPdfUploaded(false);
        setOpen(false);
      }
      if (!error) {
        setPdfUploaded(true);
      }
      setPdfInfo({ url, public_id });
    } catch (error) {
      console.error("An error occurred while PDF Uploading:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };
  const handleChange = (file) => {
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      setOpen(true);
      handleUploadPdf(formData);
    } catch (error) {
      console.error("An error occurred while PDF upload:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const getUploadProcessValue = () => {
    if (!pdfUploaded && uploadProgress >= 100) {
      return "Processing...";
    }
    return `Upload progress ${uploadProgress}%`;
  };

  return (
    <>
      <div className="w-full mt-12 p-6">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-xl font-semibold">
              Blog
            </Link>
          </div>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" to="/">
                Home
              </Link>
              <Link
                className="text-xl font-semibold"
                underline="hover"
                color="inherit"
                to="/blog"
              >
                Blog
              </Link>
            </Breadcrumbs>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full border-2 border-[#000000] rounded-[4px] shadow-md">
            <div className="flex justify-between items-center py-2 px-6 pb-2 bg-[#f0f0f0]">
              <h2 className="text-xl font-semibold">Blog</h2>
              <Button variant="outlined">Add Blog</Button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="fixed inset-0 bg-primary bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-primary rounded-md w-[45rem] h-[40rem] overflow-auto p-2">
          {/* <UploadProgress
            visible={!pdfUploaded && open}
            message={getUploadProcessValue()}
            width={uploadProgress}
          />
          <UploadPdf
            onTypeError={handleTypeError}
            handleChange={handleChange}
            visible={!open}
          /> */}
          <BlogForm />
        </div>
      </div>
    </>
  );
};

const UploadPdf = ({ visible, handleChange, onTypeError }) => {
  if (!visible) return null;

  return (
    <div className="h-full flex justify-center items-center ">
      <FileUploader
        handleChange={handleChange}
        onTypeError={onTypeError}
        types={["pdf"]}
      >
        <div className="w-48 h-48 border border-dashed border-[#FFFF] rounded-full flex flex-col justify-center items-center text-white cursor-pointer">
          <AiOutlineCloudUpload size={80} />
          <p>Drop Your FIle Here!</p>
        </div>
      </FileUploader>
    </div>
  );
};

const UploadProgress = ({ width, message, visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-tertiary drop-shadow-lg rounded p-3">
      <div className="h-3 bg-secondary relative overflow-hidden">
        <div
          className="h-full absolute bg-light-subtle left-0"
          style={{ width: width + "%" }}
        />
      </div>
      <p className="font-semibold text-secondary animate-pulse mt-1">
        {message}
      </p>
    </div>
  );
};

export default Blog;
