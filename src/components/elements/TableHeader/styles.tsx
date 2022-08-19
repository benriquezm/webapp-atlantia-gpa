import styled from 'styled-components';

export const TableHeaderStyle = styled.div`
	/* Table/Header */

	/* Auto layout */

	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 23px 0px;
	gap: 8px;

	position: absolute;
	width: 1384px;
	height: 71px;
	left: 28px;
	top: 700px;

	/* Gray/400 */

	background: #a6a6a7;
	border-radius: 4px 4px 0px 0px;
`;

interface ITableCellContentProps {
	width: string;
	height: string;
}

export const TableCellContent = styled.div<ITableCellContentProps>`
	/* Nombre */

	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;

	/* Title/Items */

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 160%;
	/* or 32px */

	text-align: center;

	/* Blue Dark/900 */

	color: #01172c;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;
`;
