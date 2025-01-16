import React from "react";

function NotesHeader({ searchQuery, onSearchChange }) {
    return (
        <header className="notes-header">
            <h1>Catatan</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={onSearchChange}
                placeholder="Cari catatan"
                className="notes-header__search"
            />
        </header>
    )
}

export default NotesHeader;
