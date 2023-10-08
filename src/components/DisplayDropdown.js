import React from "react";
import Cookies from "js-cookie";

const DisplayDropdown = ({ groupingOption, setGroupingOption, sortingOption, setSortingOption }) => {
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

  return (
    <div className="display-dropdown">
    <label htmlFor="display">Display:</label>
    {/* <select id="display">
      <option> */}
      <div className="dropdown-option">
        <label htmlFor="grouping-option">Grouping:</label>
        <select
          id="grouping-option"
          value={groupingOption}
          onChange={handleGroupingOptionChange}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      {/* </option>
      <option> */}
      <div className="dropdown-option">
        <label htmlFor="sorting-option">Ordering:</label>
        <select
          id="sorting-option"
          value={sortingOption}
          onChange={handleSortingOptionChange}
        >
          <option value="priority-desc">Priority (high to low)</option>
          <option value="title-asc">Title (A to Z)</option>
        </select>
      </div>
      {/* </option>
    </select> */}
  </div>
  );
};

export default DisplayDropdown;