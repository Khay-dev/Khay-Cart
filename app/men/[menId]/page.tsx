/* eslint-disable @next/next/no-img-element */

"use client";
import { toast, Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

interface rating {
	rate: number;
	count: number;
}

interface Product {
	id: number;
	title: string;
	price: string;
	category: string;
	description: string;
	image: string;
	rating: rating;
}

interface ProductProps {
	productData?: Product;
	menId?: string;
	isLoading?: boolean;
	error?: unknown;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const MenProductPage = ({ params }: any) => {
	const productId = params.menId;
	const { data, isLoading, error } = useQuery<Product>({
		queryKey: ["singeMenData"],
		queryFn: () =>
			fetch(`https://fakestoreapi.com/products/${productId}`).then((res) =>
				res.json(),
			),
	});
	return (
		<div className="mx-auto h-full px-0 w-full">
			<Navbar />
			<div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-6 w-full mx-auto lg:my-20  container">
				<ProductDetailsSidebar
					productData={data}
					isLoading={isLoading}
					error={error}
				/>
				<ProductDetailMainbar
					productData={data}
					isLoading={isLoading}
					error={error}
					menId={productId}
				/>
			</div>
			<Footer />
		</div>
	);
};

const ProductDetailsSidebar = ({
	productData,
	isLoading,
	error,
}: ProductProps) => {
	if (isLoading)
		return (
			<div className=" basis-[60%] shrink-0">
				<Skeleton className="w-11/12 h-screen lg:grid grid-cols-1 gap-2" />
			</div>
		);
	if (error)
		return (
			<div className="flex items-center justify-center w-full h-full">
				<p className="text-red-500 text-center">
					{`An error has occurred: ${(error as Error).message}`}
				</p>
			</div>
		);
	if (!productData) {
		return (
			<div className="flex items-center justify-center w-full h-full">
				<p className="text-gray-500 text-center">No product data found</p>
			</div>
		);
	}
	return (
		<div className=" basis-[60%] shrink-0">
			<div className="w-full lg:w-11/12 lg:grid grid-cols-1 gap-2  mt-5 lg:mt-0">
				<div className="w-full aspect-[280/220]  flex items-center justify-center">
					<img
						src={productData.image || "/assets/image.png"}
						alt={productData.title}
						className="max-w-full max-h-full object-contain "
						onError={(e) => {
							e.currentTarget.style.display = "none";
						}}
					/>
				</div>
			</div>
		</div>
	);
};

interface CartData {
	userId: number;
	date: string;
	products: { menId: number; quantity: number }[];
}

const ProductDetailMainbar = ({ productData, isLoading }: ProductProps) => {
	const addToCartMutation = useMutation<CartData, Error, CartData>({
		mutationFn: async (cartData: CartData) => {
			const response = await fetch("https://fakestoreapi.com/carts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(cartData),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
		onSuccess: (data) => {
			toast.success("Product added to cart successfully!");
		},
		onError: (error) => {
			toast.error(`Failed to add product to cart: ${error.message}`);
		},
	});

	const handleAddToCart = async () => {
		if (!productData) {
			toast.error("Product data is not available.");
			return;
		}

		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, "0");
		const day = String(today.getDate()).padStart(2, "0");

		const formattedDate = `${year}-${month}-${day}`;

		// Prepare cart data
		const cartData: CartData = {
			userId: 5,
			date: formattedDate,
			products: [{ menId: productData.id, quantity: 1 }],
		};

		// Trigger the mutation
		addToCartMutation.mutate(cartData);
	};

	if (!productData) {
		return (
			<div className="flex flex-col gap-y-5 basis-[35%] h-fit shrink-0 ">
				<Skeleton className="w-full h-10" />
				<Skeleton className="w-full h-6" />
				<Skeleton className="w-full h-6" />
				<Skeleton className="w-full h-6" />
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-y-5 basis-[35%] h-fit shrink-0 ">
			<div>
				<span className="font-inter font-normal text-xs text-gray">
					<Link href="/men">Men</Link> / {productData.category}
				</span>
				<div className="flex gap-x-2 justify-between">
					<h1 className="font-inter font-normal text-xl text-black max-w-[90%]">
						{productData.title}
					</h1>
					<h4 className="font-inter font-normal text-md text-black">
						${productData.price}
					</h4>
				</div>
				<div className="flex items-center mt-2 ">
					<span className="text-neutral-500 font-inter text-xs font-normal">
						{`${productData.rating.rate} (${productData.rating.count} Reviews)`}
					</span>
				</div>
			</div>
			<div className="mt-5">
				<p className="font-inter font-semibold text-xs text-black">Size</p>
				<div className="flex mt-3 gap-x-3">
					<button
						type="button"
						className="bg-gray-100 p-3 h-[40px] w-[40px] flex items-center justify-center text-primary font-inter font-normal text-xs"
					>
						XS
					</button>
					<button
						type="button"
						className=" bg-gray-100 p-3 h-[40px] w-[40px] flex items-center justify-center text-primary font-inter font-normal text-xs"
					>
						S
					</button>
					<button
						type="button"
						className="bg-gray-100 p-3 h-[40px] w-[40px] flex items-center justify-center text-primary font-inter font-normal text-xs"
					>
						M
					</button>
					<button
						type="button"
						className="bg-gray-100 p-3 h-[40px] w-[40px] flex items-center justify-center text-primary font-inter font-normal text-xs"
					>
						L
					</button>
					<button
						type="button"
						className="bg-gray-100 p-3 h-[40px] w-[40px] flex items-center justify-center text-primary font-inter font-normal text-xs"
					>
						XL
					</button>
					<button
						type="button"
						className="bg-gray-100 p-3 h-[40px] w-[40px] flex items-center justify-center text-primary font-inter font-normal text-xs"
					>
						XXL
					</button>
				</div>
				<button
					type="button"
					className="w-full bg-primary text-white mt-10 py-3 font-inter font-normal text-sm"
					onClick={handleAddToCart}
				>
					{isLoading ? "Adding..." : "ADD TO CART"}
				</button>
			</div>
			<div className="bg-primary-ash h-px mt-3" />
			<div>
				<h5 className="font-inter font-semibold text-base">About Product</h5>
				<p className="font-inter font-normal text-black text-sm mt-3">
					{productData.description}
				</p>
			</div>
			<Toaster />
		</div>
	);
};

export default MenProductPage;
