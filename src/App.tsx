import { createGlobalStyle } from 'styled-components';
import { TitlePrincipalStyle } from './components/elements/Title/styles';
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
			<Title
				title='General Performance Analysis'
				isPrincipal={true}
				width='752'
				height='40'
				left='28'
				top='91'
			/>
			<Title
				title='Price Evolution'
				isPrincipal={false}
				width='687'
				height='40'
				left='28'
				top='175'
			/>
			<Title
				title='Presence Share By Product'
				isPrincipal={false}
				width='500'
				height='40'
				left='915'
				top='174'
			/>
			<Title
				title='Comparative Analysis'
				isPrincipal={false}
				width='687'
				height='40'
				left='28'
				top='660'
			/>
			<LineChart />
			<PieChart />
			<TableBeers />
		</LayoutPrincipal>
	);
};

export default App;
