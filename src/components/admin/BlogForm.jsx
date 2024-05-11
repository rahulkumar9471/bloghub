import React from "react";

const BlogForm = () => {
  return (
    <form className="text-[#FFFFFF] p-4">
      <div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="w-full border-2 border-[#D6D6D6] focus:border-[#FFFFFF] p-1 bg-transparent rounded-[4px]"
          />
        </div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Description</label>
          <textarea
            name="description"
            className="w-full border-2 border-[#D6D6D6] focus:border-[#FFFFFF] p-1 bg-transparent rounded-[4px]"
          ></textarea>
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Author</label>
            <input
              type="text"
              name="tag"
              className="w-full border-2 border-[#D6D6D6] focus:border-[#FFFFFF] p-1 bg-transparent rounded-[4px]"
            />
          </div>
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Writer</label>
            <input
              type="text"
              name="tag"
              className="w-full border-2 border-[#D6D6D6] focus:border-[#FFFFFF] p-1 bg-transparent rounded-[4px]"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogForm;
