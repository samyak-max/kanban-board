import React from "react";
import '../styles/Card.css'

const Card = ({ ticket, users, getUserNameById, groupingOption }) => {
    const { title, tag, id, userId } = ticket;
    return (
        <div className="card">
            <div className="card-details">
                <div className="ticket-id">{id}</div>
                <div className="ticket-title">{title}</div>
                <div className="ticket-tag"><div>{tag}</div></div>
            </div>
            {groupingOption !== "user" && <div className="card-user">
                <div>{getUserNameById(users, userId)}</div>
            </div>}
        </div>
    );
};

export default Card;