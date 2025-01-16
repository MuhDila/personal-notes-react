import React from "react";
import {showFormattedDate} from "../utils/data.js";

function NotesItemBody({ title, body, createdAt }) {
    return (
        <div className="notes-item__body">
            <h3 className="notes-item__title">{title}</h3>
            <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
            <p className="notes-item__body">{body}</p>
        </div>
    )
}

export default NotesItemBody;
