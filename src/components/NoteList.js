import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, getContent, setDisplayEdit }) {
	return (
		<ul>
			{notes.map((note) => (
				<NoteItem key={note.id} note={note} getContent={getContent} setDisplayEdit={setDisplayEdit} />
			))}
		</ul>
	);
}

export default NoteList;
