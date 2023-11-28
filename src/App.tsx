import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

// icons
import {
  FaBars,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaNewspaper,
  FaTags,
  FaYoutube,
} from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

// pages
// import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";

// components
import Switcher from "./components/swicher";
import Footer from "./layouts/footer";
import { useState } from "react";

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
  const toggleNavigation = () => {
    document.getElementById("navigation")?.classList.toggle("hidden");
  };

  const [open, setOpen] = useState(false);

  const changeHeaderImg = (img: any) => {
    const headerImg = document.getElementById(
      "headerImg"
    ) as HTMLImageElement | null;

    if (headerImg) {
      headerImg.src = img;
    }
  };
  return (
    <>
      <Router>
        <nav className="fixed left-0 right-0 bg-black z-50 text-white py-5 px-20">
          <section className="flex justify-between">
            <div className="w-1/4">
              <button
                onClick={() => {
                  toggleNavigation();
                }}
              >
                <FaBars />
              </button>
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
              <BootstrapTooltip
                title={"Tag"}
                placement="bottom"
                className="pr-2"
              >
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
        {/*  */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>

      <header className="grid lg:grid-cols-2 relative z-10">
        <span
          className="w-[1000px] h-[1000px] rounded-full absolute -left-[500px] -top-[500px] -rotate-[60deg]"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(239, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <section className="relative p-10 flex lg:flex-col sm:flex-row flex-col lg:items-end items-center lg:justify-end justify-between lg:order-1 order-2 lg:gap-0 gap-10">
          <div className="absolute top-1/2 left-[40px] -translate-y-1/2 z-10 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5 hidden">
            <div className="w-[1px] h-[200px] rounded-full bg-black/70 cursor-pointer"></div>
            <div
              className="w-[25px] h-[25px] rounded-full bg-black/70 cursor-pointer flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <FaInstagram className="text-white" />
            </div>
            <div className="w-[25px] h-[25px] rounded-full bg-[#1873eb] cursor-pointer flex items-center justify-center">
              <FaFacebookF className="text-white" />
            </div>
            <div className="w-[25px] h-[25px] rounded-full bg-[#f70000] cursor-pointer flex items-center justify-center">
              <FaYoutube className="text-white" />
            </div>
            <div className="w-[1px] h-[200px] rounded-full bg-black/70 cursor-pointer"></div>
          </div>
          <div className="lg:w-[70%] sm:w-[60%] w-full sm:order-1 order-2 lg:mb-20 lg:absolute lg:top-1/2 lg:-translate-y-1/2">
            <p className="text-sm text-gray-800 lg:text-right text-left">
              Indonesia, dengan 300 suku lebih, menyimpan kekayaan budaya unik
              dalam bahasa, adat, seni, dan kuliner. Warisan ini tidak hanya
              tanggung jawab kita, tapi juga peluang emas untuk merajut kisah
              modern Indonesia.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-3 lg:gap-5 gap-3 sm:order-2 order-1">
            <div
              className="cursor-pointer transition-all hover:scale-110 after:transition-all relative after:content-[''] after:inset-0 after:absolute after:bg-black/30 after:rounded-md hover:after:scale-0 after:scale-100 lg:col-span-1 sm:col-span-2"
              onClick={() => setOpen(true)}
            >
              <img
                src="/images/header/subheader2.jpg"
                alt="subheader1"
                className="lg:w-[170px] w-full lg:h-[170px] h-[100px] rounded-md object-cover"
              />
            </div>
            <div
              className="cursor-pointer transition-all hover:scale-110 after:transition-all relative after:content-[''] after:inset-0 after:absolute after:bg-black/30 after:rounded-md hover:after:scale-0 after:scale-100"
              onClick={() => setOpen(true)}
            >
              <img
                src="/images/header/subheader1.jpg"
                alt="subheader1"
                className="lg:w-[170px] w-full lg:h-[170px] h-[100px] rounded-md object-cover"
              />
            </div>
            <div
              className="cursor-pointer transition-all hover:scale-110 after:transition-all relative after:content-[''] after:inset-0 after:absolute after:bg-black/30 after:rounded-md hover:after:scale-0 after:scale-100"
              onClick={() => setOpen(true)}
            >
              <img
                src="/images/header/subheader3.jpg"
                alt="subheader1"
                className="lg:w-[170px] w-full lg:h-[170px] h-[100px] rounded-md object-cover"
              />
            </div>

            {/*  */}

            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={[
                { src: "/images/header/subheader1.jpg" },
                { src: "/images/header/subheader2.jpg" },
                { src: "/images/header/subheader3.jpg" },
              ]}
            />
          </div>
          <h1 className="absolute right-[10px] top-[30%] text-8xl font-semibold text-red-500 lg:block hidden">
            INDONESIA
          </h1>
        </section>
        <section className="lg:h-[800px] h-[550px] relative after:content-[''] after:absolute after:inset-0 after:bg-black/30 lg:order-2 order-1">
          <img
            id="headerImg"
            src="/images/header/1.jpg"
            alt="headerImg"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-1/2 sm:right-[40px] right-[20px] -translate-y-1/2 z-10 flex flex-col justify-center items-center gap-10">
            <div className="w-[1px] lg:h-[200px] h-[100px] rounded-full bg-white/70 cursor-pointer"></div>
            <div
              className="w-[15px] h-[15px] rounded-full bg-white/70 cursor-pointer flex items-center justify-center"
              onClick={() => {
                changeHeaderImg("/images/header/1.jpg");
              }}
            >
              <h6 className="text-3xl text-white font-bold">1</h6>
            </div>
            <div
              className="w-[15px] h-[15px] rounded-full bg-white/70 cursor-pointer flex items-center justify-center"
              onClick={() => {
                changeHeaderImg("/images/header/2.jpg");
              }}
            >
              <h6 className="text-3xl text-white font-bold">2</h6>
            </div>
            <div
              className="w-[15px] h-[15px] rounded-full bg-white/70 cursor-pointer flex items-center justify-center"
              onClick={() => {
                changeHeaderImg("/images/header/3.jpg");
              }}
            >
              <h6 className="text-3xl text-white font-bold">3</h6>
            </div>
            <div className="w-[1px] lg:h-[200px] h-[100px] rounded-full bg-white/70 cursor-pointer"></div>
          </div>
          <h1 className="absolute lg:left-[10px] sm:left-[40px] left-1/2 sm:-translate-x-0 -translate-x-1/2 md:top-[30%] top-1/2 md:text-8xl sm:text-7xl text-6xl sm:text-left text-center font-semibold text-white z-10">
            <span className="text-red-500 block lg:hidden">INDONESIA</span>
            PUSAKA
          </h1>
        </section>
      </header>

      <br />
      <br />
      <br />
      <br />

      <section className="container mx-auto grid grid-cols-2 px-20 gap-28 items-center mt-20 relative">
        <span
          className="w-[1000px] h-[1000px] rounded-full absolute -right-[250px] -top-[500px] -rotate-[0deg]"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(239, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <img
          src="/images/plane.png"
          alt=""
          className="absolute w-[200px] -top-[100px]"
        />

        <div>
          <h2 className="font-bold text-3xl mb-5">
            EXPLORASI KEINDAHAN DAN KEUNIKAN BUDAYA{" "}
            <span className="relative pe-32">
              NUSANTARA
              <img
                src="/images/Decore.png"
                className="absolute bottom-[10px] h-[23px] left-[-25px] w-full -z-10"
              />
            </span>
          </h2>
          <p className="text-sm text-gray-800 mb-10">
            Jangan lewatkan pesona luar biasa dari keberagaman budaya Nusantara!
            Mari kita sambut dan abadikan kekayaan ini, mulai dari kebiasaan
            yang unik hingga seni yang memukau. Rasakan pengalaman tak
            terlupakan dengan menjaga dan merayakan kebudayaan Nusantara
            bersama-sama. Ayo, mari jaga dan lestarikan warisan budaya kita
            untuk masa depan yang lebih berwarna!
          </p>
          <a
            href=""
            className="px-5 py-2 bg-red-500 rounded-full text-white text-sm"
          >
            Explorasi Sekarang
          </a>
        </div>
        <div className="h-[400px] flex gap-5">
          <div className="h-full w-[40%] -translate-y-10">
            <img
              src="/images/gallery/11.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-full w-[40%] translate-y-10">
            <img
              src="/images/gallery/11.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2">
        <div className="row-span-2 md:order-1 md:block hidden">
          <img
            src="/images/gallery/11.jpg"
            alt="gallery11"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:order-2 md:block hidden">
          <img
            src="/images/gallery/1.jpg"
            alt="gallery1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:order-3 md:block hidden">
          <img
            src="/images/gallery/2.jpg"
            alt="gallery2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:order-4 order-1">
          <img
            src="/images/gallery/3.jpg"
            alt="gallery3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:order-5 md:order-7 order-2">
          <img
            src="/images/gallery/4.jpg"
            alt="gallery4"
            className="w-full h-full object-cover"
          />
        </div>

        {/*  */}

        <div className="lg:order-6 md:order-8 md:block hidden">
          <img
            src="/images/gallery/5.jpg"
            alt="gallery5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-2 border-red-500 border-dashed p-5 flex flex-col justify-center lg:order-7 md:order-5  order-3  lg:col-span-1 md:col-span-2">
          <h2 className="font-semibold text-xl">
            INDONESIA KAYA AKAN KERAGAMAN BUDAYA
          </h2>
          <p className="text-sm mt-3 text-gray-700">
            Keragaman ini tidak hanya sekadar warisan, melainkan sumber
            inspirasi yang tak terbatas untuk terus dijelajahi dan dikembangkan.
          </p>
        </div>
        <div className="lg:order-8  order-5 lg:block md:hidden">
          <img
            src="/images/gallery/6.jpg"
            alt="gallery6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-2 lg:order-9 md:order-6  order-4">
          <img
            src="/images/gallery/12.jpg"
            alt="gallery12"
            className="w-full h-full object-cover"
          />
        </div>

        {/*  */}

        <div className="lg:order-10 md:block hidden order-9">
          <img
            src="/images/gallery/7.jpg"
            alt="gallery7"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:order-11 lg:block hidden">
          <img
            src="/images/gallery/8.jpg"
            alt="gallery8"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:order-12 lg:block hidden">
          <img
            src="/images/gallery/9.jpg"
            alt="gallery9"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:order-last lg:block hidden">
          <img
            src="/images/gallery/10.jpg"
            alt="gallery10"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
