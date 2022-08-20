export const FETCH_BEERPRODUCTS_REQUEST = 'FETCH_BEERPRODUCTS_REQUEST';
export const FETCH_BEERPRODUCTS_SUCCESS = 'FETCH_BEERPRODUCTS_SUCCESS';
export const FETCH_BEERPRODUCTS_FAILURE = 'FETCH_BEERPRODUCTS_FAILURE';

export interface Beer {
	id?: number;
	sku: string;
	name: string;
	persistence: number;
	averagePrice: number;
	productImage: string;
	averagePosition: number;
}

export interface BeerProductsState {
	loading: boolean;
	beerProducts: Beer[];
	error: string;
}
