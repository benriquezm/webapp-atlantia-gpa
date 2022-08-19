import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		position: relative;
		width: 1440px;
		height: 2500px;
		background: #F0F6FF;
	}
`;

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<h1>Hello World!</h1>
		</div>
	);
};

export default App;
