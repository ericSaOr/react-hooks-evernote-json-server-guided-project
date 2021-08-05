import React, { useState } from 'react';
import NoteList from './NoteList';
import NewNoteForm from './NewNoteForm';

function Sidebar({ setNotes, notes, getContent, setDisplayEdit }) {
	const [ isClicked, setClicked ] = useState(false);

	//
	// console.log(getContent);
	//event listener that when clicked the form pops up.
	const defaultNote = { title: 'default', body: 'placeholder' };

	function handleClick() {
		console.log('Fired!');
		setNotes((prevNotes) => {
			const spreadNotes = [ ...prevNotes ];
			console.log(spreadNotes);
			spreadNotes.push(defaultNote);
			return spreadNotes;
		});
	}

	return (
		<div className="master-detail-element sidebar">
			<NoteList notes={notes} getContent={getContent} setDisplayEdit={setDisplayEdit} />
			<button onClick={handleClick}>New</button>
		</div>
	);
}

export default Sidebar;
