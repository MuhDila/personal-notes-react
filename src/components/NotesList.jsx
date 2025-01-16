import React from 'react';
import NotesItem from "./NotesItem.jsx";

function NotesList({ notes, onDelete, onAchieved, searchQuery }) {
    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);

    return (
        <div className="notes-list">
            <h2>Catatan Aktif</h2>
            <div className="notes-list__item">
                {
                    activeNotes.length > 0 ? (
                        activeNotes.map((note) => (
                            <NotesItem
                                key={note.id}
                                id={note.id}
                                onDelete={onDelete}
                                onAchieved={onAchieved}
                                {...note}
                            />
                        ))
                    ) : (
                        <p className="notes-list__empty">No active notes found.</p>
                    )
                }
            </div>

            <hr/>

            <h2>Arsip</h2>
            <div className="notes-list__item">
                {
                    archivedNotes.length > 0 ? (
                        archivedNotes.map((note) => (
                            <NotesItem
                                key={note.id}
                                id={note.id}
                                onDelete={onDelete}
                                onAchieved={onAchieved}
                                {...note}
                            />
                        ))
                    ) : (
                        <p className="notes-list__empty">No archived notes found.</p>
                    )
                }
            </div>
        </div>
    );
}

export default NotesList;
