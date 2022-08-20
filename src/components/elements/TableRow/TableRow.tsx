import { TableRowContent, TableRowImgContent, TableRowImgWrapper, TableRowStyle } from './styles';
import { Beer } from '../../../redux/slices/beerProducts/beerProducts.types';

/** TODO separate method toFixed and Match.floor and convert in functions helpers */
const TableRow = (props: Beer) => {
	const { sku, name, persistence, averagePrice, productImage, averagePosition } = props;
	return (
		<>
			<TableRowStyle>
				<TableRowImgWrapper>
					<TableRowImgContent urlLogo={productImage} />
				</TableRowImgWrapper>
				<TableRowContent width='306' height='25' order='1' isCustom={false}>
					{name}
				</TableRowContent>
				<TableRowContent
					width='223'
					height='25'
					order='2'
					aligmentType='center'
					isCustom={false}
				>
					{sku}
				</TableRowContent>
				<TableRowContent
					width='223'
					height='25'
					order='3'
					aligmentType='center'
					isNegative={Math.sign(persistence) === -1 ? true : false}
					isCustom={true}
				>
					{`${Math.floor(persistence * 100)} %`}
				</TableRowContent>
				<TableRowContent
					width='206'
					height='25'
					order='4'
					aligmentType='center'
					isCustom={false}
				>
					{`$ ${averagePrice.toFixed(2)}`}
				</TableRowContent>
				<TableRowContent
					width='206'
					height='25'
					order='5'
					aligmentType='center'
					isCustom={false}
				>
					{averagePosition}
				</TableRowContent>
			</TableRowStyle>
		</>
	);
};

export default TableRow;
