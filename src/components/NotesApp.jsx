import React from 'react';
import { getInitialData } from '../utils/data';
import NotesHeader from "./NotesHeader.jsx";
import NotesBody from "./NotesBody.jsx";
import NotesList from "./NotesList.jsx";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchQuery: '',
        }

        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAchievedHandler = this.onAchievedHandler.bind(this);
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    }

    onAddNotesHandler = ({ title, body }) => {
        this.setState((prevState) => {
            const newNotes = [
                ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: new Date().toISOString(),
                    archived: false,
                }
            ];
            return {
                notes: newNotes,
            };
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes: notes });
    }

    onAchievedHandler(id) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.map(note =>
                note.id === id ? { ...note, archived: !note.archived } : note
            );
            return {
                notes: updatedNotes,
            };
        });
    }

    onSearchChangeHandler(e) {
        this.setState({ searchQuery: e.target.value });
    }

    render() {
        return (
            <div className="notes-app">
                <NotesHeader
                    searchQuery={this.state.searchQuery}
                    onSearchChange={this.onSearchChangeHandler}
                />
                <NotesBody addNotes={this.onAddNotesHandler}/>
                <NotesList
                    notes={this.state.notes}
                    onDelete={this.onDeleteHandler}
                    onAchieved={this.onAchievedHandler}
                    searchQuery={this.state.searchQuery}
                />
            </div>
        );
    }
}

export default NotesApp;
