import TableHeader from '../../../elements/TableHeader/TableHeader';
import TableRow from '../../../elements/TableRow/TableRow';
import { TableBeersStyles } from './styles';

const TableBeers = () => {
	return (
		<TableBeersStyles>
			<TableHeader />
			<TableRow />
			<TableRow />
			<TableRow />
			<TableRow />
		</TableBeersStyles>
	);
};

export default TableBeers;
