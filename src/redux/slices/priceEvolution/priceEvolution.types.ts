export const PRICEEVOLUTION_REQUEST = 'PRICEEVOLUTION_REQUEST';
export const PRICEEVOLUTION_SUCCESS = 'PRICEEVOLUTION_SUCCESS';
export const PRICEEVOLUTION_FAILURE = 'PRICEEVOLUTION_FAILURE';

export interface PriceEvolutionProd {
	sku: string;
	name: string;
	price: number;
	dateExtraction: string;
}

export interface PriceEvolutionState {
	loading: boolean;
	evolutionPriceProd: PriceEvolutionProd[];
	error: string;
}
