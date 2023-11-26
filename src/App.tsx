// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaTags } from "react-icons/fa";
// import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

// pages
// import About from "./pages/About";
import IndonesiaKaya from "./layouts/indonesiaKaya";
import LaguDaerah from "./layouts/laguDaerah";
import AlatMusik from "./layouts/alatMusik";
import HeaderSlider from "./layouts/headerSlider";
import InfiniteSlider from "./layouts/infiniteSlider";
import RumahAdat from "./layouts/rumahAdat";
import Footer from "./layouts/footer";
import { IoLanguage } from "react-icons/io5";

import Switcher from "./components/swicher";

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Topics() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

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
  return (
    <>
      <nav className="fixed left-0 right-0 bg-black z-50 text-white py-5 px-20 flex justify-between">
        <div className="w-1/4">
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
        <div className="w-1/2">
          <h2 className="font-bold text-2xl font-dancing-script w-full text-center">
            Indonesia Culture
          </h2>
        </div>
        <div className="flex gap-10 items-center justify-end w-1/4">
          <BootstrapTooltip
            title={"Dark Mode"}
            placement="bottom"
            className="pr-2"
          >
            <span className="cursor-pointer hover:bg-white hover:text-black w-[30px] h-[30px] flex items-center justify-center rounded-full">
              <Switcher />
            </span>
          </BootstrapTooltip>
          <BootstrapTooltip title={"Tag"} placement="bottom" className="pr-2">
            <span className="cursor-pointer hover:bg-white hover:text-black w-[30px] h-[30px] flex items-center justify-center rounded-full">
              <FaTags size={20} />
            </span>
          </BootstrapTooltip>
          <BootstrapTooltip
            title={"Inggris"}
            placement="bottom"
            className="pr-2"
          >
            <span className="cursor-pointer hover:bg-white hover:text-black w-[30px] h-[30px] flex items-center justify-center rounded-full">
              <IoLanguage size={20} />
            </span>
          </BootstrapTooltip>
        </div>
      </nav>

      <HeaderSlider />

      <main className="container mx-auto sm:px-10 px-4 dark:bg-black">
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
