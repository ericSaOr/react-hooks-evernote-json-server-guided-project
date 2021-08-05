import React from 'react';

function Search({ searchNotes }) {
	return (
		<div className="filter">
			<input
				id="search-bar"
				type="text"
				placeholder="Search Notes"
				onChange={(e) => searchNotes(e.target.value)}
			/>
		</div>
	);
}

export default Search;
