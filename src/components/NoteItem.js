import React, { useState } from 'react';
import NoteViewer from './NoteViewer';

function NoteItem({ title, body, getContent }) {
	return (
		<li onClick={() => getContent(title)}>
			<h2>{title}</h2>
			<p>{body.slice(0, 20) + '...'}</p>
		</li>
	);
}

export default NoteItem;
