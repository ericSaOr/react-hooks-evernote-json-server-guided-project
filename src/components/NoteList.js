import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, getContent }) {
	console.log(notes);
	return <ul>{notes.map((note) => <NoteItem key={note.id} title = {note.title} body = {note.body} getContent={getContent} />)}</ul>;
}

export default NoteList;
