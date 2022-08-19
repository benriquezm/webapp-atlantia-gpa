import { createGlobalStyle } from 'styled-components';
import Title from './components/elements/Title/Title';

import LayoutPrincipal from './components/layouts/LayoutPrincipal';
import LineChart from './components/modules/Charts/LineChart/LineChart';
import PieChart from './components/modules/Charts/PieChart/PieChart';
import TableBeers from './components/modules/Tables/TableBeers/TableBeers';

const GlobalStyle = createGlobalStyle`
	body {
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
		position: relative;
		width: 1440px;
		height: 2500px;
		background: #F0F6FF;
		font-family: 'Montserrat', sans-serif;
	}
`;

const App = () => {
	return (
		<LayoutPrincipal>
			<GlobalStyle />
			<Title title='Title principal.' />
			<Title title='Title sections.' />
			<Title title='Title sections.' />
			<Title title='Title sections.' />
			<LineChart />
			<PieChart />
			<TableBeers />
		</LayoutPrincipal>
	);
};

export default App;
