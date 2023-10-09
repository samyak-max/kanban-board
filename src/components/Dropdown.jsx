import { useState, useEffect, useRef } from "react";
import "../styles/Dropdown.css";
import Cookies from "js-cookie";
import { MdDisplaySettings } from "react-icons/md";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Dropdown = ({ groupingOption, setGroupingOption, sortingOption, setSortingOption}) => {
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

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="display-dropdown-icon">
          <div className="dropdown-icon"><MdDisplaySettings size={15}/></div>
          <div className="dropdown-header-title">Display</div>
        </div>
        <div className="dropdown-icon">{isOpen ? <RiArrowUpSLine size={15}/> : <RiArrowDownSLine size={15}/>}</div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <div className="inner-dropdown-option">
            <div htmlFor="grouping-option">Grouping </div>
            <select
              id="grouping-option"
              value={groupingOption}
              onChange={handleGroupingOptionChange}
              className="grouping-option-select"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="inner-dropdown-option">
            <div htmlFor="sorting-option">Ordering </div>
            <select
              id="sorting-option"
              value={sortingOption}
              onChange={handleSortingOptionChange}
              className="sorting-option-select"
            >
              <option value="priority-desc">Priority</option>
              <option value="title-asc">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;