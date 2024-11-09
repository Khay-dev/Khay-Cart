/* eslint-disable @next/next/no-img-element */

"use client";
import Link from "next/link";
import type React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import type { Product, ProductProps} from "../types";
import { Skeleton } from "@/components/ui/skeleton";
import { SideBar } from "../men/page";
const MenProductsPage: React.FC = () => {
	const { data, isLoading, error } = useQuery<Product[]>({
		queryKey: ["menData"],
		queryFn: () =>
			fetch("https://fakestoreapi.com/products/category/women's clothing").then(
				(res) => res.json(),
			),
	});	return (
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
				Home / Women
			</span>
			<h1 className="text-black font-inter font-normal text-[32px]">
				Women’s Clothing & Apparel
			</h1>
			<p>Featured</p>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
				{displayedProducts.length > 0 ? (
					displayedProducts.map((item) => (
						<WomenItems key={item.id} item={item} />
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

function WomenItems({ item }: { item: Product }) {
	return (
		<Link href={`/women/${item.id}`}>
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
