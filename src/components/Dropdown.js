import React, { useState, useEffect, useRef } from "react";
import "../styles/CustomDropdown.css";
import Cookies from "js-cookie";


const CustomDropdown = ({ groupingOption, setGroupingOption, sortingOption, setSortingOption}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSortingOptionChange = (event) => {
    const newSortingOption = event.target.value;
    setSortingOption(newSortingOption);
    Cookies.set("sortingOption", newSortingOption);
  };

  const handleGroupingOptionChange = (event) => {
    const newGroupingOption = event.target.value;
    setGroupingOption(newGroupingOption);
    Cookies.set("groupingOption", newGroupingOption);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown-header-title">🎛️ Display</div>
        <div className="dropdown-icon">{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <div className="inner-dropdown-option">
            <div htmlFor="grouping-option">Grouping: </div>
            <select
              id="grouping-option"
              value={groupingOption}
              onChange={handleGroupingOptionChange}
              className="grouping-option-select"
            >
              <option value="status" onClick={() => handleOptionClick()}>Status</option>
              <option value="user" onClick={() => handleOptionClick()}>User</option>
              <option value="priority" onClick={() => handleOptionClick()}>Priority</option>
            </select>
          </div>
          <div className="inner-dropdown-option">
            <div htmlFor="sorting-option">Ordering: </div>
            <select
              id="sorting-option"
              value={sortingOption}
              onChange={handleSortingOptionChange}
              className="sorting-option-select"
            >
              <option value="priority-desc" onClick={() => handleOptionClick()}>Priority</option>
              <option value="title-asc" onClick={() => handleOptionClick()}>Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;