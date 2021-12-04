import Brand from './Brand';
import MainContext from '../MainContext';
import { useContext } from 'react';

const Brands = () => {
	const { brands } = useContext(MainContext);

	return brands.map((brand) => <Brand key={brand.slug} brand={brand} />);
};

export default Brands;
