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

                    <form
                        action=""
                        className=" w-full md:w-[40%] flex items-end justify-end"
                    >
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="w-[388px] h-[53px] pl-8 text-sm tracking-wider"
                        />
                        <span className="text-xs font-thin w-[52px] h-[53px] bg-text text-white flex items-center justify-center">
                            <HiMiniArrowRight className="text-lg font-thin " />
                        </span>
                    </form>
                </div>
                <div className=" text-center my-5 text-xs font-normal">
                    <p>© 2024, All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
