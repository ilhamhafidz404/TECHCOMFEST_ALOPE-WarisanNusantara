import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBeer, FaHome } from "react-icons/fa";

// icons
import ChevronRightIcon from "./components/icons/chevronRight.jsx";
import ChevronLeftIcon from "./components/icons/chevronLeftIcon.jsx";

// react icons
import { GiMusicalScore } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { GiHeartInside } from "react-icons/gi";
import { MdOutlinePiano } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";

// pages
import About from "./pages/About";

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

const sliderControlCondition = () => {
  const dot1 = document.querySelector("#dot1");
  const dot2 = document.querySelector("#dot2");
  dot1?.classList.toggle("bg-white/80");
  dot1?.classList.toggle("bg-white/50");
  dot2?.classList.toggle("bg-white/80");
  dot2?.classList.toggle("bg-white/50");

  const next = document.querySelector("#next");
  const prev = document.querySelector("#prev");
  next?.classList.toggle("hidden");
  prev?.classList.toggle("hidden");
};

const nextSlider = () => {
  const slider1 = document.querySelector("#slider1");
  const slider2 = document.querySelector("#slider2");

  slider1?.classList.toggle("!-left-[100vw]");
  setTimeout(() => {
    slider1?.classList.toggle("hidden");
    slider1?.classList.toggle("flex");
  }, 400);

  slider2?.classList.toggle("-right-[100vw]");
  slider2?.classList.toggle("-right-0");
  setTimeout(() => {
    slider2?.classList.toggle("hidden");
    slider2?.classList.toggle("flex");
  }, 400);

  sliderControlCondition();
};

const prevSlider = () => {
  const slider1 = document.querySelector("#slider1");
  const slider2 = document.querySelector("#slider2");

  slider1?.classList.toggle("!-left-[100vw]");
  setTimeout(() => {
    slider1?.classList.toggle("hidden");
    slider1?.classList.toggle("flex");
  }, 400);

  slider2?.classList.toggle("-right-[100vw]");
  slider2?.classList.toggle("-right-0");
  setTimeout(() => {
    slider2?.classList.toggle("hidden");
    slider2?.classList.toggle("flex");
  }, 400);

  sliderControlCondition();
};

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
          <h2 className="text-xl font-bold">INDONESIA CULTURE</h2>
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

      <header className="h-[700px] relative bg-[#190e0b] pt-[50px]">
        <section
          id="slider1"
          className="transition-all duration-500 left-0 h-full flex justify-between bg-cover bg-center relative text-white after:content-[''] after:bg-black/50 after:absolute after:inset-0"
        >
          <div className="flex justify-between items-center left-0 right-0 absolute top-1/2 -translate-y-1/2 ml-40 z-10">
            <div>
              <h1 className="text-4xl font-bold uppercase">TARI Jaipong</h1>
              <p className="max-w-[600px]">
                Tari Jaipong merupakan sebuah tarian tradisional yang berasal
                dari daerah Karawang, Jawa Barat. Awalnya tari ini dikenal
                masyarakat dengan nama Tari Banjet. Tarian jaipong adalah sebuah
                inovasi yang dibuat oleh seorang seniman yang berasal dari
                daerah Karawang bernama H. Suanda.
              </p>
              <div className="flex items-center mt-10">
                <button className="border-2 border-red-500 px-5 py-2 rounded mr-5 inline-flex items-center gap-2 hover:bg-red-500">
                  Lihat Selengkapnya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <button className="inline-flex gap-2 border-2 border-red-500 bg-red-500 hover:bg-red-400 px-5 py-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Video
                </button>
              </div>
            </div>
            <div className="mr-40">
              <div className="font-bold text-xl mb-4  relative">
                <h4 className="flex gap-2 items-center relative z-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Video Dokumentasi
                </h4>
                <span className="block w-[100px] h-[8px] rounded bg-red-500 absolute left-[40px] bottom-1"></span>
              </div>
              <iframe
                width="450"
                height="255"
                src="https://www.youtube.com/embed/fV0aVmWWRuk?si=_PUcR32HtHlMO7b5"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section
          id="slider2"
          className="transition-all duration-500 -right-[100vw] hidden h-full justify-between bg-cover bg-center relative text-white after:content-[''] after:bg-black/50 after:absolute after:inset-0"
        >
          <div className="flex justify-between items-center left-0 right-0 absolute top-1/2 -translate-y-1/2 ml-40 z-10">
            <div>
              <h1 className="text-4xl font-bold uppercase">ANGKLUNG</h1>
              <p className="max-w-[700px]">
                Alat musik angklung berasal dari Jawa Barat ini terbuat dari
                bambu dan dimainkan dengan cara digoyangkan. Angklung terdiri
                dari dua hingga empat tabung bambu yang digantung dalam bingkai
                bambu pula. Keduanya diikat dengan tali rotan, lalu dipangkas
                atau dipotong sampai menghasilkan nada tertentu.
              </p>
              <div className="flex items-center mt-10">
                <button className="border-2 border-red-500 px-5 py-2 rounded mr-5 inline-flex items-center gap-2 hover:bg-red-500">
                  Lihat Selengkapnya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <button className="inline-flex gap-2 border-2 border-red-500 bg-red-500 hover:bg-red-400 px-5 py-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Dengarkan
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="absolute bottom-0 ml-40 mb-5 flex gap-2">
          <span
            id="dot1"
            className="w-[15px] h-[15px] bg-white/80 block rounded-full"
          ></span>
          <span
            id="dot2"
            className="w-[15px] h-[15px] bg-white/50 block rounded-full"
          ></span>
        </section>

        <section id="sliderControlArrow" className="">
          <button
            id="next"
            className="absolute top-1/2 -right-[20px] duration-300 -translate-y-1/2 opacity-0 cursor-pointer z-10"
            onClick={() => nextSlider()}
          >
            <ChevronRightIcon />
          </button>
          <button
            id="prev"
            className="hidden absolute top-1/2 -left-[20px] duration-300 -translate-y-1/2 opacity-0 cursor-pointer"
            onClick={() => prevSlider()}
          >
            <ChevronLeftIcon />
          </button>
        </section>
      </header>

      <main className="container mx-auto">
        <section className="grid md:grid-cols-2 gap-10 py-7 mt-20 place-items-center md:px-0 px-10">
          <div>
            <h2 className="font-bold text-3xl mb-3">
              INDONESIA KAYA AKAN BUDAYA DAN KEBERAGAMAN-NYA
            </h2>
            <p>
              Indonesia adalah negara yang kaya akan budaya dan keberagaman.
              Dari Sabang sampai Merauke, setiap daerah memiliki warisan budaya
              yang unik dan beragam. Keberagaman ini mencakup bahasa, adat
              istiadat, seni, dan kuliner yang membuat Indonesia begitu
              istimewa.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-7">
              <div className="shadow py-4 px-2 text-center rounded border-b-4 border-red-500 hover:bg-red-500 hover:text-white duration-500 cursor-pointer">
                <FaLanguage className="mx-auto" size={30} />
                <h6 className="mt-3">BAHASA</h6>
              </div>
              <div className="shadow py-4 px-2 text-center rounded border-b-4 border-indigo-500 hover:bg-indigo-500 hover:text-white duration-500 cursor-pointer">
                <MdOutlinePiano className="mx-auto" size={30} />
                <h6 className="mt-3">ALAT MUSIK</h6>
              </div>
              <div className="shadow py-4 px-2 text-center rounded border-b-4 border-emerald-500 hover:bg-emerald-500 hover:text-white duration-500 cursor-pointer">
                <FaHome className="mx-auto" size={30} />

                <h6 className="mt-3">RUMAH ADAT</h6>
              </div>
              <div className="shadow py-4 px-2 text-center rounded border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-white duration-500 cursor-pointer">
                <GiHeartInside className="mx-auto" size={30} />
                <h6 className="mt-3">SENI TARI</h6>
              </div>
              <div className="shadow py-4 px-2 text-center rounded border-b-4 border-purple-500 hover:bg-purple-500 hover:text-white duration-500 cursor-pointer">
                <GiMusicalScore className="mx-auto" size={30} />
                <h6 className="mt-3">LAGU DAERAH</h6>
              </div>
              <div className="shadow py-4 px-2 text-center rounded border-b-4 border-orange-500 hover:bg-orange-500 hover:text-white duration-500 cursor-pointer">
                <FaBowlFood className="mx-auto" size={30} />
                <h6 className="mt-3">MAKANAN KHAS</h6>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="mt-20 bg-gray-200 pt-20">
        <h3 className="text-center text-4xl font-bold">KEGIATAN KAMI</h3>
        <p className="w-[900px] text-center mx-auto mt-5 mb-10">
          Kami memiliki dedikasi tinggi untuk melestarikan kekayaan budaya
          Indonesia yang luar biasa. Melalui berbagai kegiatan, kami berupaya
          untuk memahami, merawat, dan menghidupkan kembali warisan budaya yang
          berharga ini.
        </p>
        <div className="slider h-[500px] overflow-x-hidden py-10 relative">
          <div className="slide-track flex gap-20 items-center">
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_india_selfie.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_india_hallway.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_india_team.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_conf_nat.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_conf_fun.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_india_sunil.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_conf_hallway.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_conf_elizabet.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* <nav className="h-[700px] relative">
        

        <section className="absolute bottom-0 ml-40 mb-5 flex gap-2">
          <span className="w-[15px] h-[15px] bg-white/80 block rounded-full"></span>
          <span className="w-[15px] h-[15px] bg-white/50 block rounded-full"></span>
          <span className="w-[15px] h-[15px] bg-white/50 block rounded-full"></span>
        </section>

        <section id="sliderControlArrow" className="">
          <button
            id="next"
            className="absolute top-1/2 -right-[20px] duration-300 -translate-y-1/2 opacity-0 cursor-pointer z-10"
          >
            <ChevronRightIcon />
          </button>
          <button
            id="prev"
            className="absolute top-1/2 -left-[20px] duration-300 -translate-y-1/2 opacity-0 cursor-pointer"
          >
            <ChevronLeftIcon />
          </button>
        </section>
      </nav> */}

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
    </>
  );
}
