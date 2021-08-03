import React, { useState } from 'react';
import NoteList from './NoteList';
import NewNoteForm from './NewNoteForm';

function Sidebar({ notes, getContent }) {
	const [ isClicked, setClicked ] = useState(false);
	console.log(notes);
	// console.log(getContent);
	//event listener that when clicked the form pops up.
  function handleClick () {
    setClicked(true);
  }
	return (
		<div className="master-detail-element sidebar">
			<NoteList notes={notes} getContent={getContent} />
		<button onClick={handleClick}>New</button>
    {isClicked ? <NewNoteForm/> : <></> }
		</div>
	);
}

export default Sidebar;
