import { MdDownload, MdLink } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import MainContext from '../MainContext';
import { useState, useEffect, useContext } from 'react';

const HeaderElements = () => {
	const { brands, collectedBrands, setCollectedBrands } =
		useContext(MainContext);

	const getLink = () => {
		prompt(
			"Here's the URL to share",
			`http://${window.location.host}/collection/${collectedBrands
				.map((brand) => brand.slug)
				.join(',')}`
		);
	};

	const [downloadUrl, setDownloadUrl] = useState();
	const [downloadMethod, setdownloadMethod] = useState('css');

	useEffect(() => {
		if (collectedBrands.length > 0) {
			let output = '';
			switch (downloadMethod) {
				case 'css':
					output += ':root {\n';
					collectedBrands.map((b) => {
						let brand = brands.find((brand) => brand.slug === b.slug);
						brand.colors.map((color, key) => {
							output += `--${b.slug}-${key}: #${color};\n`;
						});
					});
					output += '}';
					break;

				case 'scss':
					collectedBrands.map((b) => {
						let brand = brands.find((brand) => brand.slug === b.slug);
						brand.colors.map((color, key) => {
							output += `$${b.slug}-${key}: #${color};\n`;
						});
					});
					break;

				case 'less':
					collectedBrands.map((b) => {
						let brand = brands.find((brand) => brand.slug === b.slug);
						brand.colors.map((color, key) => {
							output += `@${b.slug}-${key}: #${color};\n`;
						});
					});
					break;
			}

			const blob = new Blob([output]);
			const url = URL.createObjectURL(blob);
			setDownloadUrl(url);
			return () => {
				URL.revokeObjectURL(url);
				setDownloadUrl('');
			};
		}
	}, [collectedBrands, downloadMethod]);

	return (
		<>
			<div
				className={
					collectedBrands.length === 0
						? 'header-elements passive'
						: 'header-elements'
				}
			>
				{collectedBrands.length !== 0 && (
					<select onChange={(e) => setdownloadMethod(e.target.value)}>
						<option value="css">CSS</option>
						<option value="scss">SCSS</option>
						<option value="less">LESS</option>
					</select>
				)}
				<a download={`brands.${downloadMethod}`} href={downloadUrl}>
					<MdDownload className="element" />
				</a>
				<MdLink
					className="element"
					onClick={collectedBrands.length !== 0 ? getLink : undefined}
				/>
				<GrClose className="element" onClick={() => setCollectedBrands([])} />
				<div className="element counter" style={{ fontSize: 10 }}>
					{`${collectedBrands.length} ${
						collectedBrands.length === 1 ? 'brand' : 'brands'
					} collected`}
				</div>
			</div>
		</>
	);
};

export default HeaderElements;
