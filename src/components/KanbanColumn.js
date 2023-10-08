import React from "react";
import Card from "./Card";
import { sortBy } from "../utils/helpers";
import "../styles/KanbanColumn.css";

const columnIcons = {
    "Todo": "📝",
    "In Progress": "🧑‍💻",
    "Done": "✅",
    "Cancelled": "❌",
    "Backlog": "🔙",
    "Urgent": "🚨",
    "High": "🔥",
    "Medium": "🟠",
    "Low": "🟢",
    "No Priority": "🟡"
};

const KanbanColumn = ({ title, tickets, users, getUserNameById, sortingOption, groupingOption }) => {
    const sortedTickets = sortBy(tickets, sortingOption);
    const renderCards = () => {
        return sortedTickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} users={users} getUserNameById={getUserNameById} groupingOption={groupingOption}/>
        ));
    };

    return (
        <div className="kanban-column">
            <div className="column-head">
                <div className="column-icon">{columnIcons[title]}</div>
                <div className="column-title">{title}</div>
            </div>
            {renderCards()}
        </div>
    );
};

export default KanbanColumn;