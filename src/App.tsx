import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import News from "./pages/News";
import Detail from "./pages/Detail";

// components
import Footer from "./layouts/footer";
import React, { useState, useEffect } from "react";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import RagamIndonesia from "./pages/RagamIndonesia";
import Subscription from "./pages/Subscription";
import LightNavbar from "./layouts/lightNavbar";
import Switcher from "./components/swicher";
import { IoLanguage } from "react-icons/io5";
import DarktNavbar from "./layouts/darkNavbar";

export default function App() {
  const [language, setLanguage] = useState("ID");
  const [page, setpage] = useState("home");

  const switchLanguage = () => {
    if (language == "ID") {
      setLanguage("EN");
    } else {
      setLanguage("ID");
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChangeLanguage = (lang: any) => {
    setLanguage(lang);
  };
  const handleChangePage = (page: any) => {
    setpage(page);
    console.log(page);
  };

  return (
    <>
      <Router>
        {page == "home" ? (
          <LightNavbar
            changeLanguage={handleChangeLanguage}
            changePage={handleChangePage}
          />
        ) : (
          <DarktNavbar
            changeLanguage={handleChangeLanguage}
            changePage={handleChangePage}
          />
        )}

        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/ragam-indonesia" element={<RagamIndonesia />} />
          <Route path="/news" element={<News />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/news/read" element={<Detail language={language} />} />
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
