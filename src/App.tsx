import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

// icons
import { FaHome, FaNewspaper, FaTags } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

// pages
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";

// components
import Switcher from "./components/swicher";
import Footer from "./layouts/footer";

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
      <Router>
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
              title={"Home"}
              placement="bottom"
              className="pr-2"
            >
              <Link to="/news">
                <span className="cursor-pointer hover:bg-white hover:text-black w-[30px] h-[30px] flex items-center justify-center rounded-full">
                  <FaNewspaper />
                </span>
              </Link>
            </BootstrapTooltip>
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
        {/*  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
        {/* <div>

        </div> */}
      </Router>

      <Footer />

      {/* <section className="relative">
        <img
          src="/images/indonesia.png"
          className="w-screen h-[600px]"
          alt="indonesia"
        />
        <span className="w-[20px] h-[20px] bg-white rounded-full absolute top-[130px] left-[50px]"></span>
      </section> */}

      {/* <FaBeer /> */}

      {/* <Button variant="contained">Hello world</Button> */}
    </>
  );
}
