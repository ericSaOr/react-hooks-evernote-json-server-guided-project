import React from 'react';

function Search({ setSearch }) {
	return (
		<div className="filter">
			<input id="search-bar" type="text" placeholder="Search Notes" onChange={(e) => setSearch(e.target.value)} />
		</div>
	);
}

export default Search;
