import getContrastYIQ from '../helpers';
import ClipboardButton from 'react-clipboard.js';
import { GrCheckmark } from 'react-icons/gr';
import { MdContentCopy } from 'react-icons/md';
import { useContext } from 'react';
import MainContext from '../MainContext';

const Brand = ({ brand }) => {
	const { collectedBrands, setCollectedBrands, setCopied } =
		useContext(MainContext);

	const toggleSelected = () => {
		collectedBrands.includes(brand)
			? setCollectedBrands(collectedBrands.filter((b) => b !== brand))
			: setCollectedBrands([...collectedBrands, brand]);
	};

	const DateToString = (date) => {
		let splitDate = date.split(' ')[0].split('-');
		return `${splitDate[1]}/${splitDate[2]}/${splitDate[0][2]}${splitDate[0][3]}`;
	};

	return (
		<div
			onClick={() => toggleSelected()}
			className={collectedBrands.includes(brand) ? 'brand selected' : 'brand'}
		>
			<h4>
				{brand.title}
				{collectedBrands.includes(brand) ? <GrCheckmark /> : ''}
			</h4>

			<div className="brand-colors">
				{brand.colors.map((color, index) => {
					return (
						<ClipboardButton
							key={`${brand.slug}${index}`}
							component="span"
							data-clipboard-text={color}
							onClick={(e) => e.stopPropagation()}
							onSuccess={() => setCopied(color)}
							style={{
								'--bgColor': `#${color}`,
								'--textColor': `${getContrastYIQ(color)}`,
							}}
						>
							<MdContentCopy className="copy-image" />#{color}
						</ClipboardButton>
					);
				})}
			</div>
			{collectedBrands.includes(brand) ? (
				<footer onClick={(e) => e.stopPropagation()}>
					<span
						style={{
							textDecoration: 'none',
							cursor: 'text',
						}}
					>
						Updated {DateToString(brand.modified)}
					</span>
					{brand.brand_url ? (
						<span>
							<a href={brand.brand_url} target="_blank" rel="noreferrer">
								Brand URL
							</a>
						</span>
					) : (
						''
					)}
					{brand.source_url ? (
						<span>
							<a href={brand.source_url} target="_blank" rel="noreferrer">
								Source URL
							</a>
						</span>
					) : (
						''
					)}
				</footer>
			) : (
				''
			)}
		</div>
	);
};

export default Brand;
