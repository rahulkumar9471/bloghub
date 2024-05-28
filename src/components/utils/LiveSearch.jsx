import React, { forwardRef, useEffect, useRef, useState } from "react";
import { commonInputClasses } from "./Theme";

const LiveSearch = ({
  onChange = () => {},
  value = "",
  placeholder = "",
  results = [],
  selectedResultStyle = "",
  resultContainerStyle = "",
  renderItem = () => {},
  onSelect = () => {},
  inputStyle = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [displaySearch, setDisplaySearch] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOnFocus = () => {
    if (results.length) setDisplaySearch(true);
  };

  const handleOnBlur = () => {
    setDisplaySearch(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = ({ key }) => {
    const keys = ["ArrowDown", "ArrowUp", "Enter", "Escape"];
    if (!keys.includes(key)) return;

    let nextIndex = focusedIndex;
    if (key === "ArrowDown") {
      nextIndex = (focusedIndex + 1) % results.length;
    } else if (key === "ArrowUp") {
      nextIndex = (focusedIndex - 1 + results.length) % results.length;
    } else if (key === "Enter") {
      onSelect(results[focusedIndex]);
      setSelectedItem(results[focusedIndex]); // Update selected item
      return;
    }

    setFocusedIndex(nextIndex);
    setSelectedItem(null); // Clear selected item when navigating with arrow keys
  };

  const handleSelection = (selectedItem) => {
    onSelect(selectedItem);
    setSelectedItem(selectedItem); // Update selected item
  };

  const getInputStyle = () => {
    return inputStyle
      ? inputStyle
      : commonInputClasses + " border-2 p-1 text-lg w-full rounded";
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className={getInputStyle()}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onKeyDown={handleKeyDown}
      />
      <SearchResults
        focusedIndex={focusedIndex}
        visible={displaySearch}
        results={results}
        renderItem={renderItem}
        onSelect={handleSelection} // Pass handleSelection instead of onSelect
        resultContainerStyle={resultContainerStyle}
        selectedResultStyle={selectedResultStyle}
        selectedItem={selectedItem} // Pass selectedItem to highlight the selected item
      />
    </div>
  );
};

const SearchResults = ({
  focusedIndex,
  visible,
  results = [],
  renderItem,
  onSelect,
  resultContainerStyle,
  selectedResultStyle,
  selectedItem,
}) => {
  const resultContainer = useRef();

  useEffect(() => {
    if (resultContainer.current && focusedIndex !== undefined) {
      resultContainer.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [focusedIndex]);

  if (!visible) return null;

  return (
    <div className="absolute right-0 left-0 top-10 bg-white text-black shadow-md p-2 max-h-48 space-y-2 mt-1 rounded overflow-auto custom-scroll-bar">
      {results.map((result, index) => (
        <ResultCard
          ref={index === focusedIndex ? resultContainer : null}
          key={result.id}
          item={result}
          renderItem={renderItem}
          resultContainerStyle={resultContainerStyle}
          selectedResultStyle={
            selectedItem === result ? selectedResultStyle : ""
          }
          onSelect={() => onSelect(result)}
        />
      ))}
    </div>
  );
};

const ResultCard = forwardRef((props, ref) => {
  const {
    item,
    renderItem,
    onSelect,
    resultContainerStyle,
    selectedResultStyle,
  } = props;

  const getClasses = () => {
    return (
      (resultContainerStyle ? resultContainerStyle + " " : "") +
      (selectedResultStyle
        ? selectedResultStyle
        : "cursor-pointer rounded overflow-hidden hover:bg-gray-300 transition flex space-x-2")
    );
  };

  return (
    <div
      onMouseDown={() => onSelect(item)}
      ref={ref}
      className={getClasses()}
    >
      {renderItem(item)}
    </div>
  );
});

export default LiveSearch;
