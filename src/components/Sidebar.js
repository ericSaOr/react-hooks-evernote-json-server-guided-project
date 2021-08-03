import React from 'react';
import NoteList from './NoteList';

function Sidebar({ notes, getContent }) {
	console.log(notes);
	// console.log(getContent);
  //event listener that when clicked the form pops up.
	return (
		<div className="master-detail-element sidebar">
			<NoteList notes={notes} getContent={getContent} />
			<button onClick={() => console.log('hi')}>New</button>
		</div>
	);
}

export default Sidebar;
