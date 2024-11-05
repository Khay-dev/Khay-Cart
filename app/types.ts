export interface size {
	value: string;
}

export interface menClothes {
	index: string;
	menImage: string;
	menColor: string;
	menBrand: string;
	menPrice: string;
}

export interface Size {
	id: string;
	value: string;
}

export interface Product {
	id: number;
	image: string;
	title: string;
	category: string;
	price: string;
}

export interface ProductProps {
	productData: Product[];
	isLoading?: boolean;
	error?: unknown;
}