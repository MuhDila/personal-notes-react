import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler = (e) => {
        const title = e.target.value;

        if (title.length <= 50) {
            this.setState(() => {
                return {
                    title
                }
            });
        }
    }

    onBodyChangeEventHandler = (e) => {
        this.setState(() =>{
            return {
                body: e.target.value
            }
        })
    }

    onSubmitEventHandler = (e) => {
        e.preventDefault();
        this.props.addNotes(this.state)
    }

    render() {
        const remainingChars = 50 - this.state.title.length;

        return (
            <div className='notes-input'>
                <h2>Buat Catatan</h2>
                <p>Sisa karakter: {remainingChars}</p>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder="Buat judul catatan disini"
                           value={this.state.name} onChange={this.onTitleChangeEventHandler}/>
                    <textarea placeholder="Buat deskripsi catatan disini"
                           value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NotesInput;
