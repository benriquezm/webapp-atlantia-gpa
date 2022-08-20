import styled from 'styled-components';

export const TableRowStyle = styled.div`
	/* Row */

	box-sizing: border-box;

	/* Auto layout */

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 15px 0px 15px 15px;
	gap: 20px;

	position: relative;
	width: 1384px;
	height: 161px;
	left: 28px;
	top: 771px;

	background: #ffffff;
	:nth-child(2n-1) {
		background: #e9e9e9;
	}
	/* Gray/100 */

	border: 1px solid #e9e9e9;
`;
interface IGetColor {
	isNegative: boolean;
}

interface ITableRowContentProps {
	width: string;
	height: string;
	order: string;
	aligmentType?: string;
	isNegative?: boolean;
	isCustom: boolean;
}

const getColor = (isNegative: any, isCustom: any) => {
	let color = '';
	if (isNegative && isCustom) {
		color = '#D6215B';
	} else if (!isNegative && isCustom) {
		color = '#23B794';
	} else {
		color = '#565657';
	}
	return color;
};

export const TableRowContent = styled.div<ITableRowContentProps>`
	/* Cerveza description */

	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;

	/* Title/Items */

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 160%;
	/* or 32px */
	text-align: ${(props) => props.aligmentType};

	/* Gray/900 */

	/*color: #565657;*/
	color: ${(props) => getColor(props.isNegative, props.isCustom)}};

	/* Inside auto layout */

	flex: none;
	order: ${(props) => props.order};
	flex-grow: 0;
`;

interface ITableRowImgContentProps {
	urlLogo: string;
}

export const TableRowImgWrapper = styled.div`
	/* Img-XX-Ambar */

	width: 121px;
	height: 131px;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;
`;

export const TableRowImgContent = styled.div<ITableRowImgContentProps>`
	/* Img-Cerveza */

	/*position: absolute;*/
	left: 0%;
	right: 0%;
	top: 0%;
	bottom: 0%;
	width: 121px;
	height: 131px;

	background: url(${(props) => props.urlLogo}) no-repeat;
`;
