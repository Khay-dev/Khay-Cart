/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

interface Blog {
	blogImage: string;
	blogTitle: string;
	Blogkeyword: string;
	index: string;
}

const Stories = () => {
	const Blogs: Blog[] = [
		{
			blogImage: "/assets/blog1.png",
			blogTitle: "How To Style Winter Whites",
			Blogkeyword: "Style",
			index: crypto.randomUUID(),
		},
		{
			blogImage: "/assets/blog2.png",
			blogTitle: "We Won A Glossy Award",
			Blogkeyword: "Transparency",
			index: crypto.randomUUID(),
		},
		{
			blogImage: "/assets/blog3.png",
			blogTitle: "Matching Outfits for Everyone",
			Blogkeyword: "Style",
			index: crypto.randomUUID(),
		},
		{
			blogImage: "/assets/blog4.png",
			blogTitle: "Black Friday Fund 2023",
			Blogkeyword: "Transparency",
			index: crypto.randomUUID(),
		},
		{
			blogImage: "/assets/blog5.png",
			blogTitle: " Holiday Outfits & Ideas",
			Blogkeyword: "Style",
			index: crypto.randomUUID(),
		},
		{
			blogImage: "/assets/blog6.png",
			blogTitle: "Thanksgiving Outfit Ideas",
			Blogkeyword: "Style",
			index: crypto.randomUUID(),
		},
	];

	return (
		<main className="overflow-x-hidden scroll-smooth">
			<Navbar />
			<section className="lg:px-12 px-7 py-14">
				<div className="bg-text w-full h-2 lg:h-3.5" />
				<h1 className="font-inter font-semibold text-primary text-6xl lg:text-[160px] leading-[80px] lg:leading-[176px]">
					everworld
				</h1>
				<div className="mb-5 mt-1 lg:mt-5 lg:mb-10">
					<p className="hidden lg:block font-inter font-normal text-2xl leading-8">
						We’re on a mission to clean up a dirty industry. <br />
						These are the people, stories, and ideas that will help us get
						there.
					</p>
					<p className="block lg:hidden font-inter font-normal text-sm">
						We’re on a mission to clean up a dirty industry. <br />
						These are the people, stories, and <br /> ideas that will help us
						get there.
					</p>
				</div>
			</section>
			<section className="my-32 mt-24 lg:mt-36 w-full mx-auto lg:px-12 px-7">
				<h1 className="font-inter font-semibold text-5xl text-center lg:text-left">
					The Latest
				</h1>
				<div className="grid lg:grid-cols-3 justify-center lg:justify-between gap-x-5 gap-y-10 lg:gap-y-20 mt-5">
					{Blogs.map((blog: Blog) => (
						<div key={blog.index}>
							<img src={blog.blogImage} alt="blog" className="w-full " />
							<div className="mt-5 flex flex-col gap-y-2">
								<h3 className="font-inter font-normal text-3xl text-black">
									{blog.blogTitle}
								</h3>
								<span className="px-5 py-1 border border-primary-ash w-fit rounded-full font-inter font-semibold text-xs">
									{blog.Blogkeyword}
								</span>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="my-32 mt-24 lg:mt-36 w-full mx-auto lg:px-12 px-7">
				<h1 className="font-inter font-semibold text-5xl text-center lg:text-left">
					The Progress
				</h1>
				<div className="grid lg:grid-cols-3 justify-center lg:justify-between gap-x-5 gap-y-10 lg:gap-y-20 mt-5">
					<div>
						<img src="/assets/prog1.png" alt="prog" className="w-full " />
						<div className="mt-3 flex flex-col gap-y-2">
							<h3 className="font-inter font-normal text-3xl text-black">
								Carbon Commitment
							</h3>
						</div>
					</div>
					<div>
						<img src="/assets/prog2.png" alt="prog" className="w-full " />
						<div className="mt-3 flex flex-col gap-y-2">
							<h3 className="font-inter font-normal text-3xl text-black">
								Environmental Initiatives
							</h3>
						</div>
					</div>{" "}
					<div>
						<img src="/assets/prog3.png" alt="prog" className="w-full " />
						<div className="mt-3 flex flex-col gap-y-2">
							<h3 className="font-inter font-normal text-3xl text-black">
								Better Factories
							</h3>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-black">
				<div className="py-[90px] w-11/12 mx-auto flex flex-col gap-y-2 lg:gap-y-5">
					<h1 className="font-inter font-semibold text-3xl lg:text-[54px] text-white">
						Follow us on our socials for more
					</h1>
					<button
						type="button"
						className="bg-white text-black w-fit text-xs px-5 py-3 lg:text-sm font-inter font-semibold lg:py-5 lg:px-12 rounded-lg"
					>
						@Everlane Instagram
					</button>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default Stories;
