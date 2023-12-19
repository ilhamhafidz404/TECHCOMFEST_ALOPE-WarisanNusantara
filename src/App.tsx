import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

// icons
import { FaBars, FaBell, FaGlobe, FaHome, FaNewspaper } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

// pages
import Home from "./pages/Home";
import News from "./pages/News";

// components
import Switcher from "./components/swicher";
import Footer from "./layouts/footer";
import { useState, useEffect } from "react";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import RagamIndonesia from "./pages/RagamIndoneisa";
import Subscription from "./pages/subscription";

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

export default function App() {
  const [language, setLanguage] = useState("ID");
  let navOpen: boolean = false;

  const toggleNavigation = () => {
    document.getElementById("navigation")?.classList.toggle("hidden");
    document.querySelector("nav")?.classList.add("!bg-black");
    document.querySelector("nav section div h2")?.classList.add("!text-white");

    navOpen = !navOpen;
  };

  const switchLanguage = () => {
    if (language == "ID") {
      setLanguage("EN");
    } else {
      setLanguage("ID");
    }
  };

  useEffect(() => {
    AOS.init();

    const nav = document.querySelector("nav") as HTMLElement;
    const modeToggle = document.querySelector("#changeMode") as HTMLElement;
    const changeLanguage = document.querySelector(
      "#changeLanguage"
    ) as HTMLElement;
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
        changeLanguage.classList.toggle("bg-white", window.scrollY < 200);
        changeLanguage.classList.toggle("!text-white", window.scrollY > 200);

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
      <Router>
        <nav className="fixed left-0 right-0 bg-transparent z-50 lg:text-black text-white lg:py-10 md:py-8 py-6 lg:px-24 md:px-12 px-5 transition-all duration-500">
          <section className="flex justify-between">
            <div className="w-1/2">
              <h2 className="font-bold lg:text-black md:text-2xl text-xl font-dancing-script w-full dark:text-gray-200">
                <Link to={"/"}>Warisan Nusantara</Link>
              </h2>
            </div>
            <div className="md:flex hidden gap-10 items-center justify-end w-1/4">
              <BootstrapTooltip
                title={"Dark Mode"}
                placement="bottom"
                className="pr-2"
              >
                <span
                  id="changeMode"
                  className="text-red-500 bg-white dark:bg-gray-900 dark:text-gray-100 hover:text-white hover:bg-red-500 transition-all cursor-pointer min-w-[30px] h-[30px] flex items-center justify-center rounded-full"
                >
                  <Switcher />
                </span>
              </BootstrapTooltip>
              <BootstrapTooltip
                title={"Inggris"}
                placement="bottom"
                className="pr-2"
              >
                <span
                  id="changeLanguage"
                  className="text-red-500 bg-white dark:bg-gray-900 dark:text-gray-100 hover:text-white hover:bg-red-500 transition-all cursor-pointer min-w-[30px] h-[30px] flex items-center justify-center rounded-full"
                  onClick={() => {
                    switchLanguage();
                  }}
                >
                  <IoLanguage size={20} />
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
          <section id="navigation" className="hidden gap-12">
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
            </div>
          </section>
        </nav>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/ragam-indonesia" element={<RagamIndonesia />} />
          <Route path="/news" element={<News />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
        <Footer />
      </Router>

      <section className="fixed bottom-0 right-0 m-5 block md:hidden z-50">
        <span
          id="changeMode"
          className="text-white bg-red-500 dark:bg-gray-900 dark:text-gray-100 hover:text-white hover:bg-red-500 transition-all cursor-pointer min-w-[30px] h-[30px] flex items-center justify-center rounded-full mb-3"
        >
          <Switcher />
        </span>
        <span
          id="changeLanguage"
          className="text-white bg-red-500 dark:bg-gray-900 dark:text-gray-100 hover:text-white hover:bg-red-500 transition-all cursor-pointer min-w-[30px] h-[30px] flex items-center justify-center rounded-full"
          onClick={() => {
            switchLanguage();
          }}
        >
          <IoLanguage size={20} />
        </span>
      </section>
    </>
  );
}
