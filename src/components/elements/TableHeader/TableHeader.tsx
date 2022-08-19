import { TableCellContent, TableHeaderStyle } from './styles';

const TableHeader = () => {
	return (
		<>
			<TableHeaderStyle>
				<TableCellContent width='450' height='25'>
					Nombre
				</TableCellContent>
				<TableCellContent width='200' height='25'>
					SKU
				</TableCellContent>
				<TableCellContent width='295' height='25'>
					% Presencia
				</TableCellContent>
				<TableCellContent width='179' height='25'>
					Av. Price
				</TableCellContent>
				<TableCellContent width='241' height='25'>
					Av. Position
				</TableCellContent>
			</TableHeaderStyle>
		</>
	);
};

export default TableHeader;
