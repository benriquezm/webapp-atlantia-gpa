import styled from 'styled-components';

interface ITitlePrincipalStyleProps {
	width: string;
	height: string;
	left: string;
	top: string;
}

export const TitlePrincipalStyle = styled.h1<ITitlePrincipalStyleProps>`
	/* General Perfomance Analysis */

	position: absolute;
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	left: ${(props) => props.left}px;
	top: ${(props) => props.top}px;

	/* Title/Principal */

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 40px;
	line-height: 160%;
	/* or 64px */

	/* Blue Dark/800 */

	color: #011b33;
`;

interface ITitleSectionsStyleProps {
	width: string;
	height: string;
	left: string;
	top: string;
}

export const TitleSectionsStyle = styled.h3<ITitleSectionsStyleProps>`
	/* General Perfomance Analysis */

	position: absolute;
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	left: ${(props) => props.left}px;
	top: ${(props) => props.top}px;

	/* Title/Principal */

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 160%;
	/* or 64px */

	/* Blue Dark/800 */

	color: #011b33;
`;
