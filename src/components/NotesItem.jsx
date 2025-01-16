import React from "react";
import NotesItemBody from "./NotesItemBody.jsx";
import NotesItemButton from "./NotesItemButton.jsx";

function NotesItem({ title, body, createdAt, id, onDelete, onAchieved }) {
    return (
        <div className="notes-item">
            <NotesItemBody title={title} body={body} createdAt={createdAt} />
            <NotesItemButton id={id} onDelete={onDelete} onAchieved={onAchieved}/>
        </div>
    )
}

export default NotesItem;
