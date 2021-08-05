import React, { useState } from 'react';
import NoteList from './NoteList';

function NoteEditor({ setNotes, note, title, body, setDisplayEdit, setDisplayNote }) {
	// console.log(note);
	const [ inputTitle, setInputTitle ] = useState('');
	const [ inputBody, setInputBody ] = useState('');

	function handleEdit() {
		//   console.log('Fired!');
		//   setNotes((prevNotes) => {
		//     const spreadNotes = [ ...prevNotes ];
		//     console.log(spreadNotes);
		//     spreadNotes.push(defaultNote);
		//     return spreadNotes;
		//   });
		// }
		const newNote = { title: { inputTitle }, body: { inputBody } };
		console.log('fired');
		setNotes((prevNotes) => {
			const spreadNotes = [ ...prevNotes ];
			spreadNotes.push(newNote);
			return spreadNotes;
		});
	}

	function handleSave() {
		console.log('saved!');
	}

	function handleCancel() {
		setDisplayEdit(false);
	}

	return (
		<form onSubmit={handleEdit} className="note-editor">
			<input onChange={(e) => setInputTitle(e.target.value)} type="text" name="title" placeholder={title} />
			<textarea onChange={(e) => setInputBody(e.target.value)} type="text" name="body" placeholder={body} />
			<div className="button-row">
				<input onSubmit={handleSave} className="button" type="submit" value="Save" />
				<button onClick={handleCancel} type="button">
					Cancel
				</button>
			</div>
		</form>
	);
}

export default NoteEditor;
