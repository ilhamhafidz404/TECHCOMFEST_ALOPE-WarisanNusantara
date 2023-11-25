import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import Button from "@mui/material/Button";

// pages
import About from "./pages/About";
import IndonesiaKaya from "./layouts/indonesiaKaya";
import LaguDaerah from "./layouts/laguDaerah";
import AlatMusik from "./layouts/alatMusik";
import HeaderSlider from "./layouts/headerSlider";
import InfiniteSlider from "./layouts/infiniteSlider";
import RumahAdat from "./layouts/rumahAdat";
import Footer from "./layouts/footer";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav className="fixed left-0 right-0 bg-black z-50 text-white py-5 px-20 flex justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div>
          <h2 className="font-bold text-2xl font-dancing-script">
            Indonesia Culture
          </h2>
        </div>
        <div className="flex gap-10">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>

      <HeaderSlider />

      <main className="container mx-auto sm:px-10 px-4">
        <IndonesiaKaya />
        <LaguDaerah />
        <AlatMusik />
        <RumahAdat />
      </main>
      <InfiniteSlider />

      <Footer />

      {/* <section className="relative">
        <img
          src="/images/indonesia.png"
          className="w-screen h-[600px]"
          alt="indonesia"
        />
        <span className="w-[20px] h-[20px] bg-white rounded-full absolute top-[130px] left-[50px]"></span>
      </section>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>

      <FaBeer />

      <Button variant="contained">Hello world</Button> */}
    </>
  );
}
