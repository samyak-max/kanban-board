import React, { useState, useEffect } from "react";
import { getTickets, getUsers } from "../utils/api";
import { groupBy, getUserNameById } from "../utils/helpers";
import DisplayDropdown from "./DisplayDropdown";
import KanbanColumn from "./KanbanColumn";
import "../styles/KanbanBoard.css";
import Cookies from "js-cookie";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState(Cookies.get("groupingOption") || "status");
  const [sortingOption, setSortingOption] = useState(Cookies.get("sortingOption") || "priority-desc");

  useEffect(() => {
    getTickets().then((data) => setTickets(data));
    getUsers().then((data) => setUsers(data));
  }, []);

  const groupedTickets = groupBy(tickets, groupingOption);

  const renderColumns = () => {
    if (groupingOption === "status") {
      return (
        <div className="kanban-column-div">
          <KanbanColumn
            title="Backlog"
            tickets={groupedTickets["Backlog"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
          <KanbanColumn
            title="Todo"
            tickets={groupedTickets["Todo"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
          <KanbanColumn
            title="In Progress"
            tickets={groupedTickets["In progress"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
          <KanbanColumn
            title="Done"
            tickets={groupedTickets["Done"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
          <KanbanColumn
            title="Cancelled"
            tickets={groupedTickets["Cancelled"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
        </div>
      );
    } else if (groupingOption === "user") {
      const groupedTicketsByUser = groupBy(tickets, "userId");
      const renderByUser = Object.keys(groupedTicketsByUser).map((key) => (
          <KanbanColumn
            key={key}
            title={getUserNameById(users, key)}
            tickets={groupedTicketsByUser[key]}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
      ));
      return (
        <div className="kanban-column-div">
          {renderByUser}
        </div>
      )
    } else if (groupingOption === "priority") {
      return (
        <div className="kanban-column-div">
          <KanbanColumn
            title="Urgent"
            tickets={groupedTickets["4"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
          <KanbanColumn
            title="High"
            tickets={groupedTickets["3"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
          <KanbanColumn
            title="Medium"
            tickets={groupedTickets["2"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
          <KanbanColumn
            title="Low"
            tickets={groupedTickets["1"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
          <KanbanColumn
            title="No Priority"
            tickets={groupedTickets["0"] || []}
            users={users}
            getUserNameById={getUserNameById}
            sortingOption={sortingOption}
            groupingOption={groupingOption}
          />
        </div>
      );
    }
  };

  return (
    <div className="kanban-board">
      <header className="header">
        <DisplayDropdown
          groupingOption={groupingOption}
          setGroupingOption={setGroupingOption}
          sortingOption={sortingOption}
          setSortingOption={setSortingOption}
        />
      </header>
      <main>
        {renderColumns()}
      </main>
    </div>
  );
};

export default KanbanBoard;