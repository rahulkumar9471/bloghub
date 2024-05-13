import { Button } from "@mui/material";
import React from "react";
import TagInput from "../utils/TagInput";

const commonInputClasses =
  "w-full border-2 border-[#D6D6D6] focus:border-[#FFFFFF] p-1 bg-transparent rounded-[4px]";

const BlogForm = () => {
  return (
    <form className="text-[#FFFFFF] p-4">
      <div>
        <div></div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Title</label>
          <input type="text" name="title" className={commonInputClasses + ""} />
        </div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Description</label>
          <textarea
            name="description"
            className={commonInputClasses + ""}
          ></textarea>
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Author</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Writer</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Lead Author</label>
          <div className="flex justify-start items-center gap-2">
            <input
              type="text"
              name="title"
              className={commonInputClasses + ""}
            />
            <p>As</p>
            <input
              type="text"
              name="title"
              className={commonInputClasses + ""}
            />
            <Button
              type="button"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000000",
              }}
              variant="outlined"
            >
              Add
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Genres</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Type</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Tags</label>
          <TagInput />
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Post Date</label>
            <input type="date" name="tag" className={commonInputClasses + ""} />
          </div>
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Status</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
        </div>
        <div className="mt-4">
          <Button
            className="w-full"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
            }}
            variant="outlined"
          >
            Upload
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BlogForm;
