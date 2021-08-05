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
function Content({ setDisplayNote, displayNote, note, setNotes, displayEdit, setDisplayEdit }) {
	//passing a note to content that starts out as null
	// passing newNote who's state is assigned and empty object which has a truthy value.

	const getContent = () => {
		if (displayEdit) {
			return (
				<NoteEditor
					note={note}
					title={note.title}
					body={note.body}
					setNotes={setNotes}
					setDisplayEdit={setDisplayEdit}
				/>
			);
		} else if (displayNote) {
			return (
				<NoteViewer
					key={note.id}
					title={note.title}
					body={note.body}
					setDisplayEdit={setDisplayEdit}
					setDisplayNote={setDisplayNote}
				/>
			);
		} else {
			return <Instructions />;
		}
	};

	return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
// note={note}
