import React from "react";

function NoteItemButton({ id, onDelete, onAchieved}) {
    return (
        <div className="notes-button">
            <button className="notes-button__delete" onClick={() => onDelete(id)}>Hapus</button>
            <button className="notes-button__achieve" onClick={() => onAchieved(id)}>Arsipkan</button>
        </div>
    )
}

export default NoteItemButton;
