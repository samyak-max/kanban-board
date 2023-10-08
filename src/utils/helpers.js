export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const group = item[key];
    if (group) {
      (result[group] = result[group] || []).push(item);
    }
    return result;
  }, {});
};

export const getUserNameById = (users, id) => {
  const user = users.find((user) => user.id === id);
  return user ? user.name : "Unknown User";
};

export const sortBy = (tickets, sortingOption) => {
  if (sortingOption === "priority-desc") {
    return [...tickets].sort((a, b) => b.priority - a.priority);
  } else if (sortingOption === "title-asc") {
    return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
  } else {
    return tickets;
  }
};