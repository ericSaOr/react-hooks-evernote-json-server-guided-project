import React from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({ note, newNote }) {
	//passing a note to content that starts out as null
	// passing newNote who's state is assigned and empty object which has a truthy value.

	const getContent = () => {
		if (newNote) {
			return <NoteEditor note={note} />;
		} else if (note) {
			//So this won't fire.
			return <NoteViewer key={note.id} title={note.title} body={note.body} />;
		} else {
			return <Instructions />;
		}
	};

	return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
