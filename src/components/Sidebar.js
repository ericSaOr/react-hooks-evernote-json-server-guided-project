import React from 'react';
import NoteList from './NoteList';

function Sidebar({ notes, getContent }) {
	// console.log(notes);
	return (
		<div className="master-detail-element sidebar">
			<NoteList notes={notes} getContent={getContent} />
			<button>New</button>
		</div>
	);
}

export default Sidebar;
