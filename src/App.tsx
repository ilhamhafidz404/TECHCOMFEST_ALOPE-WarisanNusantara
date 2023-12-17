import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

// icons
import { FaBars, FaHome, FaNewspaper } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

// pages
import Home from "./pages/Home";
import News from "./pages/News";
import Detail from "./pages/Detail";

// components
import Switcher from "./components/swicher";
import Footer from "./layouts/footer";
import { useState, useEffect } from "react";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import RagamIndonesia from "./pages/RagamIndoneisa";

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

  const toggleNavigation = () => {
    document.getElementById("navigation")?.classList.toggle("hidden");
    document.querySelector("nav")?.classList.add("!bg-black");
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

    const handleScroll = () => {
      nav.classList.toggle("!bg-black", window.scrollY > 200);
      nav.classList.toggle("!py-5", window.scrollY > 200);
      nav.classList.toggle("!px-20", window.scrollY > 200);
      nav.classList.toggle("!text-white", window.scrollY > 200);

      //
      modeToggle.classList.toggle("bg-white", window.scrollY < 200);
      modeToggle.classList.toggle("!text-white", window.scrollY > 200);
      //
      changeLanguage.classList.toggle("bg-white", window.scrollY < 200);
      changeLanguage.classList.toggle("!text-white", window.scrollY > 200);
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
        <nav className="fixed left-0 right-0 bg-transparent z-50 text-black py-10 px-24 transition-all duration-500">
          <section className="flex justify-between">
            <div className="w-1/2">
              <h2 className="font-bold text-2xl font-dancing-script w-full dark:text-gray-200">
                <Link to={"/"}>Warisan Nusantara</Link>
              </h2>
            </div>
            <div className="flex gap-10 items-center justify-end w-1/4">
              <BootstrapTooltip
                title={"Dark Mode"}
                placement="bottom"
                className="pr-2"
              >
                <span
                  id="changeMode"
                  className="text-red-500 bg-white dark:bg-gray-900 dark:text-gray-100 hover:text-white hover:bg-red-500 transition-all cursor-pointer  w-[30px] h-[30px] flex items-center justify-center rounded-full"
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
                  className="text-red-500 bg-white dark:bg-gray-900 dark:text-gray-100 hover:text-white hover:bg-red-500 transition-all cursor-pointer  w-[30px] h-[30px] flex items-center justify-center rounded-full"
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
          </section>
          <section id="navigation" className="hidden gap-12">
            <hr className="my-5 border-gray-800" />
            <div className="flex">
              <Link to="/">
                <span className="cursor-pointer text-white flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-black px-3">
                  <FaHome />
                  Beranda
                </span>
              </Link>
              <Link to="/news">
                <span className="cursor-pointer text-white flex gap-3 items-center justify-center rounded-full hover:bg-white hover:text-black px-3">
                  <FaNewspaper />
                  Berita
                </span>
              </Link>
            </div>
          </section>
        </nav>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/ragam-indonesia" element={<RagamIndonesia />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/read" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
