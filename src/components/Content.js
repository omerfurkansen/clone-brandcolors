import SearchBar from './SearchBar';
import HeaderElements from './HeaderElements';
import Brands from './Brands';

const Content = () => {
	return (
		<main className="content">
			<div className="header">
				<SearchBar />
				<HeaderElements />
			</div>
			<section>
				<Brands />
			</section>
		</main>
	);
};

export default Content;
