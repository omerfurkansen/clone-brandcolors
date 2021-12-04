import MainContext from './MainContext';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import BrandsData from './Brands.json';
import { useEffect, useState } from 'react';
import CopiedBox from './components/CopiedBox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from './components/Collection';

function App() {
	const brandsArray = [];
	Object.keys(BrandsData).map((key) => brandsArray.push(BrandsData[key]));

	const [brands, setBrands] = useState(brandsArray);

	const [collectedBrands, setCollectedBrands] = useState([]);

	const [copied, setCopied] = useState('');

	const [search, setSearch] = useState('');

	const data = {
		brands,
		collectedBrands,
		setCollectedBrands,
		copied,
		setCopied,
		search,
		setSearch,
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCopied('');
		}, 3000);
		return () => clearTimeout(timeout);
	}, [copied]);

	useEffect(() => {
		setBrands(
			brandsArray.filter((brand) =>
				brand.title.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search]);

	return (
		<>
			<MainContext.Provider value={data}>
				<Sidebar />
				<Router>
					<Routes>
						<Route path="/" element={<Content />} />
						<Route path="/collection/:slugs" element={<Collection />} />
					</Routes>
				</Router>
				{copied && <CopiedBox color={copied} />}
			</MainContext.Provider>
		</>
	);
}

export default App;
