import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const TagInput = () => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const input = useRef();

  const handleOnChange = ({ target }) => {
    const { value } = target;
    if (value.trim() !== "") setTag(value.trim());
  };

  const handleKeyDown = (e) => {
    const { key } = e;
    if (key === "," || key === "Enter") {
      e.preventDefault(); // Prevents default behavior of input on Enter key
      if (!tag.trim()) return;

      if (tags.includes(tag)) {
        setTag("");
        return;
      }

      setTags([...tags, tag]);
      setTag("");
    } else if (key === "Backspace" && tag === "" && tags.length > 0) {
      const newTags = [...tags];
      newTags.pop();
      setTags(newTags);
    }
  };

  const handleTagRemove = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
  };

  useEffect(() => {
    input.current.scrollIntoView({})
  }, [tag]);

  return (
    <div>
      <div
        onKeyDown={handleKeyDown}
        className="border-2 bg-transparent border-[#FFFFFF] px-2 h-10 rounded w-full text-[#FFFFFF] flex items-center space-x-2 overflow-x-auto tag-scroll-bar"
      >
        {tags.map((t, index) => (
          <Tag key={index} onClick={() => handleTagRemove(t)}>
            {t}
          </Tag>
        ))}

        <input
          ref={input}
          type="text" // Specify input type as text
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
    <span className="bg-[#FFFFFF] text-[#000000] flex items-center text-sm px-1 rounded-[2px] whitespace-nowrap">
      {children}
      <button onClick={onClick}>
        <AiOutlineClose size={12} />
      </button>
    </span>
  );
};

export default TagInput;
