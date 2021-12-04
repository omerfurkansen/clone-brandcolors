import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import HeaderElements from './HeaderElements';
import Brand from './Brand';
import MainContext from '../MainContext';
import { MdKeyboardBackspace } from 'react-icons/md';

const Collection = () => {
	const { brands, setSearch } = useContext(MainContext);

	const { slugs } = useParams();
	const navigate = useNavigate();

	const [collectionBrands, setCollectionBrands] = useState([]);

	const clearCollectedBrands = () => {
		setCollectionBrands([]);
		setSearch('');
		navigate('/');
	};

	useEffect(() => {
		setCollectionBrands(
			brands.filter((brand) => slugs.split(',').includes(brand.slug))
		);
	}, []);

	return (
		<main className="content">
			<div className="header collection">
				<Link to="/" onClick={clearCollectedBrands}>
					<div className="back-to-allBrands">
						<MdKeyboardBackspace className="element" />
						<div style={{ fontSize: 10 }}>All Brands</div>
					</div>
				</Link>
				<HeaderElements />
			</div>
			<section>
				{collectionBrands.map((brand) => (
					<Brand key={brand.slug} brand={brand} />
				))}
			</section>
		</main>
	);
};

export default Collection;
