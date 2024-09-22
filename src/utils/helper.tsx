
export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": 
            return <img src="/assets/No-priority.svg" alt="No priority" width={14} height={14} />;
        case "Low": 
            return <img src="/assets/Img-Low-Priority.svg" alt="Low priority" width={14} height={14} />;
        case "Medium": 
            return <img src="/assets/Img-Medium-Priority.svg" alt="Medium priority" width={14} height={14} />;
        case "High": 
            return <img src="/assets/Img-High-Priority.svg" alt="High priority" width={14} height={14} />;
        case "Urgent": 
            return <img src="/assets/SVG-Urgent-Priority-colour.svg" alt="Urgent priority" width={14} height={14} />;
        default: 
            return <img src="/assets/SVG-Urgent-Priority-grey.svg" alt="Default priority" width={14} height={14} />;
    }
}

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": 
            return <img src="/assets/Backlog.svg" alt="Backlog" width={24} height={24} />;
        case "Todo": 
            return <img src="/assets/To-do.svg" alt="Todo" width={24} height={24} />;
        case "In progress": 
            return <img src="/assets/in-progress.svg" alt="In progress" width={16} height={16} />;
        case "Done": 
            return <img src="/assets/Done.svg" alt="Done" width={16} height={16} />;
        case "Canceled": 
            return <img src="/assets/Cancelled.svg" alt="Canceled" width={16} height={16} />;
        default: 
            return <img src="/assets/Cancelled.svg" alt="Default status" width={16} height={16} />;
    }
}
