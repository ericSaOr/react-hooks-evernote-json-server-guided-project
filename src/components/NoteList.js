import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, getContent }) {
	return <ul>{notes.map((note) => <NoteItem key={note.id} note={note} getContent={getContent} />)}</ul>;
}

export default NoteList;
