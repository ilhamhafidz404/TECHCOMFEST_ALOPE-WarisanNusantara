import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

// icons
import {
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaComment,
  FaEye,
  FaFacebookF,
  FaHeart,
  FaHome,
  FaInstagram,
  FaMapMarker,
  FaMapMarkerAlt,
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
import InfiniteSlider from "./layouts/infiniteSlider";

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

      <section className="grid lg:grid-cols-2 lg:px-20 md:px-14 sm:px-12 px-8 gap-28 items-center lg:mt-20 mt-10 relative">
        <span
          className="lg:w-[1000px] lg:h-[1000px] w-[500px] h-[500px] lg:rounded-full absolute lg:-right-[250px] lg:-top-[500px] lg:-rotate-[0deg] -right-[200px] rotate-90"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(239, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <img
          src="/images/plane.png"
          alt=""
          className="absolute w-[200px] lg:-top-[100px] -top-[150px]"
        />

        <div className="md:text-left text-center">
          <h2 className="font-bold sm:text-3xl text-2xl mb-5">
            EXPLORASI KEINDAHAN DAN KEUNIKAN BUDAYA{" "}
            <span className="relative md:pe-32 pe-16 md:pl-0 pl-16">
              NUSANTARA
              <img
                src="/images/Decore.png"
                className="absolute bottom-[10px] h-[23px] left-[-25px] w-full -z-10 sm:block hidden"
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
            className="px-7 py-3 inline-flex gap-3 items-center bg-red-500 hover:bg-red-400 rounded-full text-white text-sm"
          >
            <FaMapMarkerAlt size={20} />
            Explorasi Sekarang
          </a>
        </div>
        <div className="h-[400px] lg:flex hidden lg:justify-start gap-5">
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

      <section className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 gap-5 lg:px-20 md:px-14 sm:px-12 px-8 mt-36 relative">
        <span
          className="lg:w-[1200px] lg:h-[1200px] w-[500px] h-[500px] lg:rounded-full absolute lg:-left-[500px] lg:bottom-[-500px] lg:rotate-[-150deg] -left-[200px] rotate-90"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(239, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <div className="lg:col-span-4 md:col-span-2">
          <h3 className="font-bold text-3xl md:text-left text-center">
            ASPEK BUDAYA DI <span className="text-red-500">INDONESIA</span>
          </h3>
          <p className="text-gray-800 lg:w-2/3 md:w-3/4 w-full md:mx-0 mx-auto md:text-left text-center text-sm mt-5">
            Budaya Indonesia merupakan salah satu budaya yang paling beragam di
            dunia. Hal ini disebabkan oleh faktor geografis Indonesia yang
            terdiri dari ribuan pulau dengan berbagai suku bangsa, agama, dan
            bahasa. Keanekaragaman budaya Indonesia ini tercermin dalam berbagai
            aspek kehidupan masyarakat, mulai dari bahasa, adat istiadat,
            kesenian, hingga kuliner.
          </p>
        </div>
        <div
          className="lg:h-[500px] md:h-[400px] h-[200px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 bg-cover bg-center p-5 md:hover:scale-110 transition-all"
          style={{
            backgroundImage: "url(/images/card/musik.jpg)",
          }}
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-white flex items-center gap-2">
                <FaMapMarkerAlt />
                <small>Seren Taun, Jawa Barat</small>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-5">
                LAGU & MUSIK
              </h4>
              <p className="text-gray-200 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio earum dolore
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:h-[500px] md:h-[400px] h-[200px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 bg-cover bg-center p-5 md:hover:scale-110 transition-all"
          style={{
            backgroundImage: "url(/images/card/arsitektur.jpg)",
          }}
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-white flex items-center gap-2">
                <FaMapMarkerAlt />
                <small>Rumah Panggung, Sulawesi Selatan</small>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-5">
                ARSITEKTUR BANGUNAN
              </h4>
              <p className="text-gray-200 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio earum dolore
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:h-[500px] md:h-[400px] h-[200px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 bg-cover bg-center p-5 md:hover:scale-110 transition-all"
          style={{
            backgroundImage: "url(/images/card/upacara.jpg)",
          }}
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-white flex items-center gap-2">
                <FaMapMarkerAlt />
                <small>Bonang, Jawa Timur</small>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-5">UPACARA</h4>
              <p className="text-gray-200 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio earum dolore
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:h-[500px] md:h-[400px] h-[200px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 bg-cover bg-center p-5 md:hover:scale-110 transition-all"
          style={{
            backgroundImage: "url(/images/card/pakaian.jpg)",
          }}
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-white flex items-center gap-2">
                <FaMapMarkerAlt />
                <small>Sunda, Jawa Barat</small>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-5">PAKAIAN</h4>
              <p className="text-gray-200 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio earum dolore
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-2 text-center mt-8">
          <button className="bg-red-500 hover:bg-red-400 text-white py-3 px-10 text-sm rounded-full">
            Lihat Lebih Banyak
          </button>
        </div>
      </section>

      <section className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2 relative mt-20">
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

      {/* <section className="grid grid-cols-2 mt-20 gap-10 container mx-auto px-20 items-center py-20 relative">
        <div className="relative z-10">
          <h3 className="font-bold text-5xl">
            <span className="text-red-500">INDONESIA</span> DIMATA DUNIA
          </h3>
        </div>
        <div className="bg-white/70 shadow p-5 rounded-lg flex items-center gap-7 relative z-10">
          <div className="border p-3 rounded-lg">
            <img src="/images/globe.png" className="w-[100px]" />
          </div>
          <div>
            <h6 className="font-semibold text-1xl mb-3">
              NEGARA KEPULAUAN TERBESAR DENGAN <br /> RAGAM SUKU BUDAYA{" "}
            </h6>
            <p className="text-gray-700 text-sm">
              Tercatat bahwa indonesia mempunyai 742 Suku
            </p>
          </div>
        </div>
        <div className="bg-white/70 shadow p-5 rounded-lg flex items-center gap-7 relative z-10">
          <div className="border p-3 rounded-lg">
            <img src="/images/globe.png" className="w-[100px]" />
          </div>
          <div>
            <h6 className="font-semibold text-1xl mb-3">
              Pemilik Bahasa Terbanyak di Dunia DENGAN JUMLAH SEKITAR 707
            </h6>
            <p className="text-gray-700 text-sm">
              Tercatat bahwa indonesia mempunyai 742 Suku
            </p>
          </div>
        </div>
        <div className="bg-white/70 shadow p-5 rounded-lg flex items-center gap-7 relative z-10">
          <div className="border p-3 rounded-lg">
            <img src="/images/globe.png" className="w-[100px]" />
          </div>
          <div>
            <h6 className="font-semibold text-1xl mb-3">
              Pemilik Bahasa Terbanyak di Dunia DENGAN JUMLAH SEKITAR 707
            </h6>
            <p className="text-gray-700 text-sm">
              Tercatat bahwa indonesia mempunyai 742 Suku
            </p>
          </div>
        </div>
      </section> */}

      <section className="mt-20 dark:bg-gray-950 pt-20">
        <h3 className="text-center text-4xl font-bold dark:text-gray-100">
          INDONESIA DIMATA DUNIA
        </h3>
        <p className="w-[900px] text-center mx-auto mt-5 mb-10 dark:text-gray-300 text-gray-700">
          Kami memiliki dedikasi tinggi untuk melestarikan kekayaan budaya
          Indonesia yang luar biasa. Melalui berbagai kegiatan, kami berupaya
          untuk memahami, merawat, dan menghidupkan kembali warisan budaya yang
          berharga ini.
        </p>
        <div className="slider h-[500px] overflow-x-hidden py-10 relative">
          <div className="slide-track flex gap-20 items-center">
            <div className="slide">
              <img
                src="/images/gallery/1.jpg"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="/images/gallery/8.jpg"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="/images/gallery/3.jpg"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="/images/gallery/4.jpg"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="/images/gallery/5.jpg"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="/images/gallery/10.jpg"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="/images/gallery/6.jpg"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="/images/gallery/7.jpg"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-20">
        <div className="bg-red-200 py-12 text-center rounded-md px-20">
          <h4 className="text-gray-800">INDONESIA DIMATA DUNIA</h4>
          <h3 className="font-bold text-3xl mt-5">
            "Sopan Santun dalam Keanekaragaman🤝✨, 👣Jejak Budaya yang
            Membahana di Seluruh Dunia🌍🇮🇩"
          </h3>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-5 gap-10 items-center px-20 mt-10">
          <div className="h-[350px] rounded-md overflow-hidden col-span-2">
            <img
              src="/images/header/3.jpg"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
          <div className="col-span-3">
            <h5 className="text-red-500 font-semibold mb-5">RAGAM BERITA</h5>
            <h2 className="font-bold text-3xl">
              INDONESIA DENGAN KEBERAGAMAN BUDAYA INDONESIA
            </h2>
            <p className="text-gray-800 mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nisi
              recusandae itaque atque doloremque. Veniam animi, distinctio
              blanditiis nesciunt similique doloremque expedita excepturi
              laborum esse fugit unde quis nobis suscipit.
            </p>
            <div className="flex gap-5 mt-10 text-gray-600">
              <span className="flex gap-2">
                <FaEye />
                <small>2.000 views</small>
              </span>
              <span className="flex gap-2">
                <FaHeart />
                <small>2.000 suka</small>
              </span>
              <span className="flex gap-2">
                <FaComment />
                <small>2.000 komentar</small>
              </span>
            </div>

            <div className="flex gap-5 justify-end">
              <button className="flex items-center justify-center rounded-full w-[30px] h-[30px] bg-gray-300">
                <FaChevronLeft />
              </button>
              <button className="flex items-center justify-center rounded-full w-[30px] h-[30px] bg-gray-300">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}
