import React from "react";
import NotesInput from "./NotesInput.jsx";

function NotesBody({ addNotes }) {
    return (
        <main className="notes-main">
            <NotesInput addNotes={addNotes} />
        </main>
    )
}

export default NotesBody;
