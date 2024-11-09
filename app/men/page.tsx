/* eslint-disable @next/next/no-img-element */

"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import type React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import type { Product, ProductProps, size } from "../types";
import { Skeleton } from "@/components/ui/skeleton";

const MenProductsPage: React.FC = () => {
	const { data, isLoading, error } = useQuery<Product[]>({
		queryKey: ["menData"],
		queryFn: () =>
			fetch("https://fakestoreapi.com/products/category/men's clothing").then(
				(res) => res.json(),
			),
	});
	return (
		<div>
			<Navbar />
			<div className="flex flex-col justify-between gap-y-10 lg:flex-row w-11/12 mx-auto my-20">
				<SideBar productData={data ?? []} />
				<MainBar productData={data ?? []} isLoading={isLoading} error={error} />
			</div>
			<Footer />
		</div>
	);
};

const SideBar: React.FC<ProductProps> = ({ productData }) => {
	const waistSizes: size[] = [
		{
			value: "36",
		},
		{
			value: "38",
		},
		{
			value: "40",
		},
		{
			value: "42",
		},
		{
			value: "44",
		},
		{
			value: "46",
		},
		{
			value: "48",
		},
		{
			value: "50",
		},
	];

	const ClothesSizes: size[] = [
		{
			value: "XXS",
		},
		{
			value: "XS",
		},
		{
			value: "S",
		},
		{
			value: "M",
		},
		{
			value: "L",
		},
		{
			value: "XL",
		},
		{
			value: "XXL",
		},
		{
			value: "XXXL",
		},
	];
	const [showSize, setShowSize] = useState<boolean>(false);

	const handleShowSize = () => {
		setShowSize(!showSize);
	};
	return (
		<div>
			<div className="hidden lg:flex flex-col gap-y-5 basis-1/5 shrink-0 sticky top-5">
				<span className="font-inter font-normal text-xs text-black">
					{productData.length} Products{" "}
				</span>
				<div className="h-px bg-[#DDDBDC] w-full" />
				<div className="flex flex-col gap-y-5">
					<h1 className="font-inter font-semibold text-sm mb-2">Size</h1>
					<div>
						<p className="font-inter font-normal text-xs text-black">Waist</p>
						<div className="mt-2 grid grid-cols-4 gap-1">
							{waistSizes.map((waistSize) => (
								<button
									type="button"
									key={waistSize.value}
									className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs hover:bg-text hover:text-gray-300"
								>
									{waistSize.value}
								</button>
							))}
						</div>
					</div>
					<div>
						<p className="font-inter font-normal text-xs text-black">
							Clothing
						</p>
						<div className="mt-2 grid grid-cols-4 gap-1">
							{ClothesSizes.map((clotheSize) => (
								<button
									type="button"
									key={clotheSize.value}
									className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs  hover:bg-text hover:text-white"
								>
									{clotheSize.value}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex lg:hidden flex-col gap-y-5 basis-1/5 shrink-0">
				<span className="font-inter font-normal text-xs text-black">
					249 Products
				</span>
				<div className="flex flex-col gap-y-5">
					<div className="flex items-center justify-between">
						<h1 className="font-inter font-semibold text-sm mb-2 text-black">
							Size
						</h1>
						<button type="button" onClick={handleShowSize}>
							{showSize ? (
								<IoIosArrowDown className="font-inter font-semibold text-sm mb-2 text-black" />
							) : (
								<IoIosArrowUp className="font-inter font-semibold text-sm mb-2 text-black" />
							)}
						</button>
					</div>
					{showSize && (
						<div className="flex flex-col gap-y-10">
							<div>
								<p className="font-inter font-normal text-xs text-black">
									Waist
								</p>
								<div className="mt-2 grid grid-cols-4 gap-1">
									{waistSizes.map((waistSize) => (
										<button
											type="button"
											key={waistSize.value}
											className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs"
										>
											{waistSize.value}
										</button>
									))}
								</div>
							</div>
							<div>
								<p className="font-inter font-normal text-xs text-black">
									Clothing
								</p>
								<div className="mt-2 grid grid-cols-4 gap-1">
									{ClothesSizes.map((clotheSize) => (
										<button
											type="button"
											key={clotheSize.value}
											className="bg-[#F5F4F4] p-3 font-inter font-normal text-xs"
										>
											{clotheSize.value}
										</button>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const MainBar = ({ productData, isLoading, error }: ProductProps) => {
	if (isLoading)
		return (
			<div className="basis-4/5 shrink-0 w-full">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
					<Skeleton className="w-full h-[500px] aspect-[330/392]" />
					<Skeleton className="w-full h-[500px] aspect-[330/392]" />
					<Skeleton className="w-full h-[500px] aspect-[330/392]" />
				</div>
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
	const displayedProducts = productData ? productData.slice(0, 27) : [];

	return (
		<div className="basis-4/5 shrink-0 w-full">
			<span className="text-gray font-inter font-normal text-xs">
				Home / Men
			</span>
			<h1 className="text-black font-inter font-normal text-[32px]">
				Men’s Clothing & Apparel
			</h1>
			<p>Featured</p>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
				{displayedProducts.length > 0 ? (
					displayedProducts.map((item) => (
						<MenItems key={item.id} item={item}/>
					))
				) : (
					<div className="flex items-center justify-center w-full h-full">
						<p className="text-gray-500 text-center">No products available</p>
					</div>
				)}
			</div>
		</div>
	);
};


function MenItems({item}: {item: Product}){
	return(
		<Link href={`/men/${item.id}`}>
			<div className="w-full cursor-pointer ">
				<div className="w-full aspect-[330/392]">
					<img
						src={item.image || "/assets/image.png"}
						alt={item.title}
						className="w-full h-full object-cover rounded-md border border-gray-100 p-2 shadow-sm"
						onError={(e) => {
							e.currentTarget.style.display = "none";
						}}
					/>
				</div>{" "}
				<div className="mt-3.5 flex justify-between">
					<div className="flex flex-col gap-y-1.5 w-full">
						<h3 className="text-xs text-primary font-inter font-normal w-[90%] ">
							{item.title}
						</h3>
					</div>
					<span className="text-xs font-semibold  font-inter text-primary">
						${item.price}
					</span>
				</div>
			</div>
		</Link>
	)
}





export default MenProductsPage;
