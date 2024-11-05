import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import React from "react";
const About = () => {
	return (
		<main className="overflow-x-hidden scroll-smooth">
			<Navbar />
			<section className="h-[80vh] bg-bottom bg-cover bg-[url('/assets/about.png')] bg-no-repeat w-full lg:h-screen ">
				<div className="flex flex-col gap-y-5 items-center justify-center h-full text-center">
					<h3 className="font-normal text-4xl  lg:text-7xl font-Inter text-center text-white lg:leading-[1.12] md:leading-[1.25] lg:w-[30%] md:w-[50%]">
						We believe we can all make a difference.
					</h3>
					<p className="font-normal text-xl md:text-2xl text-center text-white  lg:w-[40%] md:w-[60%]">
						Our way: Exceptional quality. Ethical factories. Radical
						Transparency.
					</p>
				</div>
			</section>
			<section className=" lg:px-10 px-7 py-14 w-full grid place-items-center ">
				<p className=" text-2xl lg:text-3xl font-normal w-full lg:w-[60%] md:w-[70%] text-center">
					At Everlane, we want the right choice to be as easy as putting on a
					great T-shirt. That’s why we partner with the best, ethical factories
					around the world. Source only the finest materials. And share those
					stories with you down to the true cost of every product we make. It’s
					a new way of doing things. We call it Radical Transparency.
				</p>
			</section>
			<section className=" w-full h-fit flex flex-col md:flex-row lg:flex-row">
				<div className="w-full lg:w-2/4 mx-auto lg:h-auto md:h-[40vh]">
					<Image
						src={"/assets/fact.png"}
						alt={"tailor"}
						width={700}
						height={733}
					/>
				</div>
				<div className="bg-[#e6ded8] w-full lg:w-[50%] mx-auto flex flex-col md:p-8 py-7 px-7 lg:p-20 items-start justify-center h-[320px] lg:h-auto md:h-[40vh]">
					<span className="font-normal font-inter text-xs">OUR FACTORIES</span>
					<h1 className="font-normal font-inter text-3xl md:text-3xl lg:text-4xl">
						Our ethical approach.
					</h1>
					<p className="mt-5 font-normal font-inter text-sm">
						We spend months finding the best factories around the world—the same
						ones that produce your favorite designer labels. We visit them often
						and build strong personal relationships with the owners. Each
						factory is given a compliance audit to evaluate factors like fair
						wages, reasonable hours, and environment. Our goal? A score of 90 or
						above for every factory.
					</p>
				</div>
			</section>
			<section className=" w-full h-fit flex flex-col-reverse md:flex-row lg:flex-row">
				<div className="bg-[#e6ded8] w-full lg:w-[50%] mx-auto flex flex-col md:p-8 py-7 px-7 lg:p-20 items-start justify-center h-[320px] lg:h-auto md:h-[40vh]">
					<span className="font-normal font-inter text-xs">OUR QUALITY</span>
					<h1 className="font-normal font-inter text-3xl md:text-3xl lg:text-4xl">
						Designed to last.
					</h1>
					<p className="mt-5 font-normal font-inter text-sm">
						At Everlane, we’re not big on trends. We want you to wear our pieces
						for years, even decades, to come. That’s why we source the finest
						materials and factories for our timeless products— like our Grade-A
						cashmere sweaters, Italian shoes, and Peruvian Pima tees.
					</p>
				</div>
				<div className="w-full lg:w-2/4 mx-auto lg:h-auto md:h-[40vh]">
					<Image
						src={"/assets/quality.png"}
						alt={"tailor"}
						width={700}
						height={733}
					/>
				</div>
			</section>
			<section className=" bg-[url('/assets/randab.png')] bg-center bg-cover bg-no-repeat h-[400px] lg:h-[70vh] w-full"/>
			<section className=" w-full h-fit flex flex-col-reverse md:flex-row lg:flex-row">
				<div className="w-full lg:w-2/4 mx-auto lg:h-auto md:h-[40vh]">
					<Image
						src={"/assets/prices.png"}
						alt={"tailor"}
						width={700}
						height={733}
					/>
				</div>
				<div className="w-full lg:w-[50%] mx-auto flex flex-col md:p-8 py-7 px-7 lg:p-20 items-start justify-center h-[320px] lg:h-auto md:h-[40vh]">
					<span className="font-normal font-inter text-xs">OUR PRICES</span>
					<h1 className="font-normal font-inter text-3xl md:text-3xl lg:text-4xl">
						Radically Transparent.{" "}
					</h1>
					<p className="mt-5 font-normal font-inter text-sm">
						We believe our customers have a right to know how much their clothes
						cost to make. We reveal the true costs behind all of our
						products—from materials to labor to transportation—then offer them
						to you, minus the traditional retail markup.
					</p>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default About;
