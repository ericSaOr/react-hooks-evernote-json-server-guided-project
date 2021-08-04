import React, { useState } from 'react';
import NoteList from './NoteList';
import NewNoteForm from './NewNoteForm';

function Sidebar({ newNote, notes, getContent }) {
	const [ isClicked, setClicked ] = useState(false);
	console.log(notes);
	// console.log(getContent);
	//event listener that when clicked the form pops up.
	function handleClick() {
		setClicked(newNote);
	}
	return (
		<div className="master-detail-element sidebar">
			<NoteList notes={notes} getContent={getContent} />
			<button onClick={handleClick}>New</button>
			/
		</div>
	);
}

export default Sidebar;
