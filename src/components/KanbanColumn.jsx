import Card from "./Card";
import { sortBy } from "../utils/helpers";
import "../styles/KanbanColumn.css";
import {PiCircleHalfFill} from 'react-icons/pi';
import {BsCircle, BsCheckCircleFill, BsExclamationSquareFill, BsThreeDots} from 'react-icons/bs';
import {GoXCircleFill} from 'react-icons/go';
import {MdOutlineRemoveCircle} from 'react-icons/md';
import {PiCellSignalHighDuotone, PiCellSignalMediumDuotone, PiCellSignalLowDuotone} from 'react-icons/pi';
import {BiPlus} from 'react-icons/bi';
import {TbLineDashed} from 'react-icons/tb';
import Avatar from 'react-avatar';

export const columnIcons = {
    "Todo": <BsCircle size={20} color='#94a2b3'/>,
    "In progress": <PiCircleHalfFill size={20} color='#eac13b'/>,
    "Done": <BsCheckCircleFill size={20} color='#5f6bd2'/>,
    "Cancelled": <GoXCircleFill size={20} color='#94a2b3'/>,
    "Backlog": <MdOutlineRemoveCircle size={20} color='#e06c75'/>,
    "Urgent": <BsExclamationSquareFill size={20} color='#fc7941'/>,
    "High": <PiCellSignalHighDuotone size={20} color='#6c7077'/>,
    "Medium": <PiCellSignalMediumDuotone size={20} color='#6c7077'/>,
    "Low": <PiCellSignalLowDuotone size={20} color='#6c7077'/>,
    "No Priority": <TbLineDashed size={20} color='#94a2b3'/>,
    "Add": <BiPlus size={20} color='#94a2b3'/>,
    "More": <BsThreeDots size={20} color='#94a2b3'/>
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
                <div className="column-head-title">
                    {groupingOption !== "user" && <div className="column-icon">{columnIcons[title]}</div>}
                    {groupingOption === "user" && <div className="column-icon"><Avatar size='25' textSizeRatio={0.8} name={title} round={true}/></div>}
                    <div className="column-title">{title}</div>
                    <div className="column-count">{tickets.length}</div>
                </div>
                {tickets.length !== 0 && <div className="column-head-more">
                    <div className="column-head-more-icon">{columnIcons["Add"]}</div>
                    <div className="column-head-more-icon">{columnIcons["More"]}</div>
                </div>}
            </div>
            {renderCards()}
        </div>
    );
};

export default KanbanColumn;