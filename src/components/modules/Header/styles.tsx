import styled from 'styled-components';

interface IHeaderLogoProps {
	urlLogo: string;
}

export const HeaderStyle = styled.header`
	/* Rectangle 1 */

	position: absolute;
	width: 1440px;
	height: 70px;
	left: 0px;
	top: 0px;

	/* Blue/500 */

	background: #006fff;
`;

export const HeaderLogo = styled.img<IHeaderLogoProps>`
	/* logo 1 */

	position: absolute;
	width: 155px;
	height: 62.29px;
	left: 30px;
	top: 4px;

	background: url(${(props) => props.urlLogo});
`;
