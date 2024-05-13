import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const TagInput = () => {

    const [tag, srtTag] = useState('');


    const handleOnChange = ({target}) => {
        const {value} = target;
        if(value !== ','){

        }
    }

  return (
    <div>
      <div className="border-2 bg-transparent border-[#FFFFFF] px-2 h-10 rounded w-full text-[#FFFFFF] flex items-center space-x-2">
        <Tag>Tag One</Tag>
        <Tag>Tag Two</Tag>
        <Tag>Tag Three</Tag>

        <input
          type=""
          className="h-full flex-grow bg-transparent outline-none text-[#FFFFFF]"
          placeholder="Tag One, Tag Two, Tag Three"
          value={tag}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

const Tag = ({ children, onClick }) => {
  return (
    <span className="bg-[#FFFFFF] text-[#000000] flex items-center text-sm px-1 rounded-[2px]">
      {children}
      <button onClick={onClick}>
        <AiOutlineClose size={12} />
      </button>
    </span>
  );
};

export default TagInput;
