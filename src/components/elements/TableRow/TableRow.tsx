import { TableRowContent, TableRowImgContent, TableRowImgWrapper, TableRowStyle } from './styles';

const TableRow = () => {
	return (
		<>
			<TableRowStyle>
				<TableRowImgWrapper>
					<TableRowImgContent urlLogo='cerveza.png' />
				</TableRowImgWrapper>
				<TableRowContent width='306' height='25' order='1'>
					Cerveza XX Ambar 325 ml
				</TableRowContent>
				<TableRowContent width='223' height='25' order='2' aligmentType='center'>
					039430430493093
				</TableRowContent>
				<TableRowContent width='223' height='25' order='3' aligmentType='center'>
					35%
				</TableRowContent>
				<TableRowContent width='206' height='25' order='4' aligmentType='center'>
					$55.00
				</TableRowContent>
				<TableRowContent width='206' height='25' order='5' aligmentType='center'>
					1
				</TableRowContent>
			</TableRowStyle>
		</>
	);
};

export default TableRow;
