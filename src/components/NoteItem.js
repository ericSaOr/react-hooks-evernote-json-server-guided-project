import React, { useState } from 'react';
import NoteViewer from './NoteViewer';

function NoteItem({ note, getContent, setDisplayEdit }) {
	// console.log(note);

	return (
		<li
			onClick={() => {
				getContent(note);
				setDisplayEdit(false);
			}}
		>
			<h2>{note.title}</h2>
			<p>{note.body.slice(0, 20) + '...'}</p>
		</li>
	);
}

export default NoteItem;
//
