import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import News from "./pages/News";
import Detail from "./pages/Detail";
import RagamIndonesia from "./pages/RagamIndonesia";
import Subscription from "./pages/Subscription";
import RagamMakanan from "./pages/RagamMakanan";
import DetailRagamMakanan from "./pages/DetailRagamMakanan";
import DetailRagamTarian from "./pages/DetailRagamTarian";
import Map from "./pages/Map";
import Event from "./pages/Event";

// components
import Footer from "./layouts/footer";
import Switcher from "./components/swicher";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ragam-indonesia" element={<RagamIndonesia />} />
          <Route path="/ragam-indonesia/makanan" element={<RagamMakanan />} />
          <Route
            path="/ragam-indonesia/makanan/detail"
            element={<DetailRagamMakanan />}
          />
          <Route
            path="/ragam-indonesia/tarian/detail"
            element={<DetailRagamTarian />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/news/read" element={<Detail />} />
          <Route path="/map" element={<Map />} />
          <Route path="/event" element={<Event />} />
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
      </section>
    </>
  );
}
