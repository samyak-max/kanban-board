import '../styles/Card.css'
import Avatar from 'react-avatar';
import {BsExclamationSquareFill} from 'react-icons/bs';
import {PiCellSignalHighDuotone, PiCellSignalMediumDuotone, PiCellSignalLowDuotone} from 'react-icons/pi';
import {TbLineDashed} from 'react-icons/tb';
import {GoDotFill} from 'react-icons/go';
import { columnIcons } from './KanbanColumn';

const icons = {
    4: <BsExclamationSquareFill size={20} color='#fc7941'/>,
    3: <PiCellSignalHighDuotone size={20} color='#6c7077'/>,
    2: <PiCellSignalMediumDuotone size={20} color='#6c7077'/>,
    1: <PiCellSignalLowDuotone size={20} color='#6c7077'/>,
    0: <TbLineDashed size={20} color='#94a2b3'/>,
    "feature_request": <GoDotFill size={15} color='#94a2b3'/>,
};

const Card = ({ ticket, users, getUserNameById, groupingOption }) => {
    const { title, tag, id, userId, priority, status } = ticket;
    
    return (
        <div className="card">
            <div className="card-details">
                <div className="ticket-status-id">
                    <div className="ticket-id">{id}</div>
                    {groupingOption !== "status" && <div className="ticket-status">{columnIcons[status]}</div>}
                </div>
                <div className="ticket-title">{title}</div>                
                <div className="ticket-priority-tag">
                    {groupingOption !== "priority" && <div className="ticket-priority">{icons[priority]}</div>}
                    <div className="ticket-tag">
                        <div className='tag-icon'>{icons["feature_request"]}</div>
                        <div>{tag}</div>
                    </div>
                </div>
            </div>
            {groupingOption !== "user" && <div className="card-user">
                <div><Avatar size='25' textSizeRatio={0.8} name={getUserNameById(users, userId)} round={true}/></div>
            </div>}
        </div>
    );
};

export default Card;