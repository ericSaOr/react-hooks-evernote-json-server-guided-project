import React, { useState } from 'react';
import NoteList from './NoteList';

function NoteEditor({ setNotes, note, title, body, setDisplayEdit }) {
	// console.log(note);
	const [ inputTitle, setInputTitle ] = useState(title);
	const [ inputBody, setInputBody ] = useState(body);

	const newNote = { title: inputTitle, body: inputBody };
	function handleEdit(e) {
		e.preventDefault();
		setNotes((prevNotes) => {
			const index = prevNotes.indexOf(note);
			const spreadNotes = [ ...prevNotes ];
			spreadNotes[index] = newNote;
			return spreadNotes;
		});
	}

	function handleCancel() {
		setDisplayEdit(false);
	}

	return (
		<form onSubmit={handleEdit} className="note-editor">
			<input onChange={(e) => setInputTitle(e.target.value)} type="text" name="title" value={inputTitle} />
			<textarea onChange={(e) => setInputBody(e.target.value)} type="text" name="body" value={inputBody} />
			<div className="button-row">
				<input className="button" type="submit" value="Save" />
				<button onClick={handleCancel} type="button">
					Cancel
				</button>
			</div>
		</form>
	);
}

export default NoteEditor;
