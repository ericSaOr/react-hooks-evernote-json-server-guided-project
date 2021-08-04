import React, { useState } from 'react';
import NoteViewer from './NoteViewer';

function NoteItem({ note, getContent }) {
	return (
		<li onClick={() => getContent(note)}>
			<h2>{note.title}</h2>
			<p>{note.body.slice(0, 20) + '...'}</p>
		</li>
	);
}

export default NoteItem;
