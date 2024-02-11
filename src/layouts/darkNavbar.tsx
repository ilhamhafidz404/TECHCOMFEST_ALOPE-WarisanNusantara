import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

import Switcher from "./../components/swicher";
// icons
import { FaBars, FaBell, FaGlobe, FaHome, FaNewspaper } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const DarkNavbar = () => {
  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  let navOpen: boolean = false;

  const toggleNavigation = () => {
    document.getElementById("navigation")?.classList.toggle("hidden");
    document.querySelector("nav")?.classList.add("!bg-black");
    document.querySelector("nav section div h2")?.classList.add("!text-white");

    navOpen = !navOpen;
  };

  useEffect(() => {
    const nav = document.querySelector("nav") as HTMLElement;
    const modeToggle = document.querySelector("#changeMode") as HTMLElement;
    // const changeLanguage = document.querySelector(
    //   "#changeLanguage"
    // ) as HTMLElement;
    const h2Nav = document.querySelector("nav section div h2") as HTMLElement;

    const handleScroll = () => {
      nav.classList.toggle("!py-5", window.scrollY > 200);
      nav.classList.toggle("!px-5", window.scrollY > 200);
      nav.classList.toggle("lg:!px-20", window.scrollY > 200);
      nav.classList.toggle("md:!px-16", window.scrollY > 200);

      if (!navOpen) {
        nav.classList.toggle("!bg-black", window.scrollY > 200);
        nav.classList.toggle("!text-white", window.scrollY > 200);
        //
        modeToggle.classList.toggle("bg-white", window.scrollY < 200);
        modeToggle.classList.toggle("!text-white", window.scrollY > 200);
        //
        // changeLanguage.classList.toggle("bg-white", window.scrollY < 200);
        // changeLanguage.classList.toggle("!text-white", window.scrollY > 200);

        h2Nav.classList.toggle("!text-white", window.scrollY > 200);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed left-0 right-0 bg-black z-50 lg:text-black text-white lg:py-7 md:py-6 py-5 lg:px-24 md:px-12 px-5 transition-all duration-500">
        <section className="flex justify-between">
          <div className="w-1/2">
            <h2
              className="font-bold md:text-2xl text-xl font-dancing-script w-full text-gray-200"
              style={{ fontFamily: "Dancing Script, cursive !important" }}
            >
              <Link to={"/"}>Warisan Nusantara</Link>
            </h2>
          </div>
          <div className="md:flex hidden gap-10 items-center justify-end w-1/4">
            <BootstrapTooltip
              title={"Ganti Mode"}
              placement="bottom"
              className="pr-2"
            >
              <span
                id="changeMode"
                className="!bg-gray-900 !text-gray-100 hover:text-white hover:bg-red-500 transition-all cursor-pointer min-w-[30px] h-[30px] flex items-center justify-center rounded-full"
              >
                <Switcher />
              </span>
            </BootstrapTooltip>

            <div className="w-1/4 text-right text-white">
              <button
                onClick={() => {
                  toggleNavigation();
                }}
              >
                <FaBars />
              </button>
            </div>
          </div>
          <div className="md:hidden flex gap-10 items-center justify-end w-1/4">
            <div className="w-1/4 text-right text-white">
              <button
                onClick={() => {
                  toggleNavigation();
                }}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </section>
        <section id="navigation" className="hidden md:gap-20 gap-12">
          <hr className="my-5 border-gray-800" />
          <div className="flex">
            <Link
              to="/"
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="lg:text-base text-[12px] cursor-pointer text-white flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-black md:px-3 px-2">
                <FaHome className="md:inline-block hidden" />
                Beranda
              </span>
            </Link>
            <Link
              to="/news"
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="lg:text-base text-[12px] cursor-pointer text-white flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-black md:px-3 px-2">
                <FaNewspaper className="md:inline-block hidden" />
                Berita
              </span>
            </Link>
            <Link
              to="/ragam-indonesia"
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="lg:text-base text-[12px] cursor-pointer text-white flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-black md:px-3 px-2">
                <FaGlobe className="md:inline-block hidden" />
                Ragam
              </span>
            </Link>
            <Link
              to="/map"
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="lg:text-base text-[12px] cursor-pointer text-white flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-black md:px-3 px-2">
                <FaMapLocation className="md:inline-block hidden" />
                Peta Interaktif
              </span>
            </Link>
            <Link
              to="/subscription"
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="lg:text-base text-[12px] cursor-pointer text-white flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-black md:px-3 px-2">
                <FaBell className="md:inline-block hidden" />
                Subscription
              </span>
            </Link>
            <Link
              to="/event"
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="lg:text-base text-[12px] cursor-pointer text-white flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-black md:px-3 px-2">
                <FaBell className="md:inline-block hidden" />
                Event
              </span>
            </Link>
          </div>
        </section>
      </nav>
    </>
  );
};

export default DarkNavbar;
