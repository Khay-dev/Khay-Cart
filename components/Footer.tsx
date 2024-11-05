import Link from "next/link";
import { HiMiniArrowRight } from "react-icons/hi2";
import React from "react";

const Footer = () => {
    return (
					<>
						<footer className="bg-[#DDDBDC] text-[#262626]  flex flex-col">
							<div className="flex flex-col-reverse md:flex-row items-start justify-between w-full lg:p-11 px-7 py-10 gap-y-8  md:gap-y-0">
								<div className="flex flex-col flex-wrap md:flex-row gap-y-7 w-full md:w-[60%] items-start lg:flex-nowrap">
									<div className="flex flex-col gap-y-3 items-start w-[195px]">
										<p className="font-bold text-base ">Account</p>
										<Link
											href={""}
											className="font-normal text-sm tracking-wider"
										>
											{" "}
											Log In
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											{" "}
											Sign Up
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Redeem Gift Card
										</Link>
									</div>
									<div className="flex flex-col gap-y-3 items-start  w-[194px]">
										<p className="font-bold text-base ">Company</p>
										<Link
											href={""}
											className="font-normal text-sm tracking-wider "
										>
											About
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											{" "}
											Factories
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											DEI
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Careers
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											International
										</Link>
									</div>
									<div className="flex flex-col gap-y-3 items-start  w-[194px]">
										<p className="font-bold text-base ">Get Help</p>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Help Center
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Return Policy
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Shipping Info
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Bulk Orders
										</Link>
									</div>
									<div className="flex flex-col gap-y-3 items-start  w-[194px]">
										<p className="font-bold text-base ">Connect</p>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Facebook
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Instagram
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											X
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Affliates
										</Link>
										<Link
											href={""}
											className="font-normal text-sm  tracking-wider"
										>
											Our Stores
										</Link>
									</div>
								</div>

								<div className="flex h-fit md:w-full lg:w-[30%]">
									<input
										type="text"
										placeholder="Email address"
										className="px-[18px] py-[13px] font-normal font-inter text-sm w-full border border-primary-ash"
									/>
									<button type="button"  className="px-[18px] py-[18px] bg-primary">
										<svg
											width="24"
											height="25"
											viewBox="0 0 24 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
                                            <title>yoo</title>
											<g clip-path="url(#clip0_376_1628)">
												<path
													d="M3.75 12.5H20.25"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M13.5 5.75L20.25 12.5L13.5 19.25"
													stroke="white"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</g>
											<defs>
												<clipPath id="clip0_376_1628">
													<rect
														width="24"
														height="24"
														fill="white"
														transform="translate(0 0.5)"
													/>
												</clipPath>
											</defs>
										</svg>
									</button>
								</div>
							</div>
							<div className=" text-center my-5 text-xs font-normal">
								<p>© 2024, All Rights Reserved</p>
							</div>
						</footer>
					</>
				);
};

export default Footer;
