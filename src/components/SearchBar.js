import { useContext } from 'react';
import { GrSearch } from 'react-icons/gr';
import MainContext from '../MainContext';

const SearchBar = () => {
	const { search, setSearch } = useContext(MainContext);

	return (
		<div className="searchBar">
			<GrSearch />
			<input
				placeholder="Search Brands"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				autoFocus
			/>
		</div>
	);
};

export default SearchBar;
