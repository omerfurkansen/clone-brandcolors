import getContrastYIQ from '../helpers';

const CopiedBox = ({ color }) => {
	return (
		<div
			className="copied-box"
			style={{
				'--bgColor': `#${color}`,
				'--textColor': `${getContrastYIQ(color)}`,
			}}
		>
			Copied to{' '}
			<span
				style={{
					fontFamily: 'monospace',
				}}
			>
				{color}
			</span>{' '}
			clipboard.
		</div>
	);
};

export default CopiedBox;
