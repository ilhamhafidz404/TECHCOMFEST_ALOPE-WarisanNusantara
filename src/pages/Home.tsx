import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-image-and-background-image-fade";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import content from "./../data/content.json";

// icons
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaComment,
  FaEye,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaMapMarkerAlt,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

export default function Home(language: any) {
  const [lang, setLang] = useState("ID");

  useEffect(() => {
    setLang(language.language);
  }, [language]);

  const [open, setOpen] = useState(false);

  const changeHeaderImg = (img: any) => {
    const headerImg = document.getElementById(
      "headerImg"
    ) as HTMLImageElement | null;

    if (headerImg) {
      headerImg.src = img;
    }
  };

  const [moreNews, setMoreNews] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
            <div className="w-[1px] h-[200px] rounded-full bg-black/70 dark:bg-gray-200/70 cursor-pointer"></div>
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
            <div className="w-[1px] h-[200px] rounded-full bg-black/70 dark:bg-gray-200/70 cursor-pointer"></div>
          </div>
          <div className="lg:w-[70%] sm:w-[60%] w-full sm:order-1 order-2 lg:mb-20 lg:absolute lg:top-1/2 lg:-translate-y-1/2">
            <p
              className="text-sm text-gray-800 dark:text-gray-200 lg:text-right text-left"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-once="true"
            >
              {lang == "ID" ? content.header.id : content.header.en}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-3 lg:gap-5 gap-3 sm:order-2 order-1">
            <div
              className="cursor-pointer transition-all hover:scale-110 after:transition-all relative after:content-[''] after:inset-0 after:absolute after:bg-black/30 after:rounded-md hover:after:scale-0 after:scale-100 lg:col-span-1 sm:col-span-2"
              onClick={() => setOpen(true)}
              data-aos="fade-left"
              data-aos-delay="900"
              data-aos-once="true"
            >
              <img
                src="/images/header/subheader2_thumb.jpg"
                alt="subheader1"
                className="lg:w-[170px] w-full lg:h-[170px] h-[100px] rounded-md object-cover"
              />
            </div>
            <div
              className="cursor-pointer transition-all hover:scale-110 after:transition-all relative after:content-[''] after:inset-0 after:absolute after:bg-black/30 after:rounded-md hover:after:scale-0 after:scale-100"
              onClick={() => setOpen(true)}
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <img
                src="/images/header/subheader1_thumb.jpg"
                alt="subheader1"
                className="lg:w-[170px] w-full lg:h-[170px] h-[100px] rounded-md object-cover"
              />
            </div>
            <div
              className="cursor-pointer transition-all hover:scale-110 after:transition-all relative after:content-[''] after:inset-0 after:absolute after:bg-black/30 after:rounded-md hover:after:scale-0 after:scale-100"
              onClick={() => setOpen(true)}
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <img
                src="/images/header/subheader3_thumb.jpg"
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
          <h1
            className="absolute right-[10px] top-[30%] text-8xl font-semibold text-red-500 lg:block hidden"
            data-aos="fade-right"
          >
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
          <h1
            className="absolute lg:left-[10px] left-[40px] sm:-translate-x-0 -translate-x-1/2 md:top-[30%] top-1/2 md:text-8xl sm:text-7xl text-5xl sm:text-left text-center font-semibold text-white z-10"
            data-aos="fade-left"
          >
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

        <div className="md:text-left text-center ">
          <h2
            className="font-bold md:text-3xl text-2xl mb-5 dark:text-gray-200"
            data-aos="fade-right"
            data-aos-once="true"
          >
            {lang == "ID" ? (
              <>
                {content.explore.header.id}
                <span className="relative md:pe-32 pe-16 md:pl-0 pl-16">
                  NUSANTARA
                  <img
                    src="/images/Decore.png"
                    className="absolute bottom-[10px] h-[23px] left-[-25px] w-full -z-10 sm:block hidden"
                  />
                </span>
              </>
            ) : (
              content.explore.header.en
            )}
          </h2>
          <p
            className="md:text-sm text-[12px] text-gray-800 dark:text-gray-300 mb-10"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="200"
          >
            {lang == "ID" ? content.explore.body.id : content.explore.body.en}
          </p>
          <Link
            to="/ragam-indonesia"
            className="md:px-7 py-3 px-5 inline-flex gap-3 items-center bg-red-500 hover:bg-red-400 rounded-full text-white md:text-sm text-[12px]"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <FaMapMarkerAlt size={20} />
            {lang == "ID" ? "Explorasi Sekarang" : "Explore Now"}
          </Link>
        </div>
        <div className="h-[400px] lg:flex hidden lg:justify-start gap-5">
          <div className="h-full w-[40%] -translate-y-10">
            <img
              src="/images/explore/2.jpg"
              alt=""
              className="h-full w-full object-cover"
              data-aos="fade-up"
              data-aos-once="true"
            />
          </div>
          <div className="h-full w-[40%] translate-y-10">
            <img
              src="/images/explore/1.jpg"
              alt=""
              className="h-full w-full object-cover"
              data-aos="fade-down"
              data-aos-once="true"
            />
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 gap-5 lg:px-20 md:px-14 sm:px-12 px-8 mt-36 relative">
        <span
          className="lg:w-[1200px] lg:h-[1200px] w-[500px] h-[500px] lg:rounded-full absolute lg:-left-[500px] lg:bottom-[-500px] lg:rotate-[-150deg] -left-[200px] rotate-90 lg:block hidden"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(239, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <div className="lg:col-span-4 md:col-span-2">
          <h3
            className="font-bold md:text-3xl text-2xl md:text-left text-center dark:text-gray-200"
            data-aos="fade-right"
            data-aos-once="true"
          >
            {lang == "ID" ? "ASPEK BUDAYA DI " : "CULTURAL ASPECTS IN "}{" "}
            <span className="text-red-500">INDONESIA</span>
          </h3>
          <p
            className="text-gray-800 dark:text-gray-300 lg:w-2/3 md:w-3/4 w-full md:mx-0 mx-auto md:text-left text-center md:text-sm text-[12px] mt-5"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-once="true"
          >
            {lang == "ID" ? content.cultureAspect.id : content.cultureAspect.en}
          </p>
        </div>
        <div data-aos="flip-left" data-aos-delay="250" data-aos-once="true">
          <div
            className="lg:h-[500px] md:h-[400px] h-[250px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 bg-cover bg-center p-5 md:hover:scale-110 transition-all"
            style={{
              backgroundImage: "url(/images/card/musik.jpg)",
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
                <h4 className="font-bold text-xl text-white md:mb-5 mb-2">
                  {lang == "ID" ? "LAGU & MUSIK" : "SONG & MUSIC"}
                </h4>
                <p className="text-gray-200 md:text-sm text-[12px]">
                  Nikmati keindahan seni musik Bonang di Jawa Timur. Temukan
                  harmoni yang khas dan cerita yang tersembunyi di setiap
                  nadanya.
                  {/* Experience the beauty of Bonang music in East Java. Discover the distinctive harmony and hidden stories within each note. */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-delay="500" data-aos-once="true">
          <div
            className="lg:h-[500px] md:h-[400px] h-[250px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 bg-cover bg-center p-5 md:hover:scale-110 transition-all"
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
                <h4 className="font-bold text-xl uppercase text-white md:mb-5 mb-2">
                  {lang == "ID"
                    ? "ARSITEKTUR BANGUNAN"
                    : "building architecture"}
                </h4>
                <p className="text-gray-200 md:text-sm text-[12px]">
                  Temukan keunikan dan harmoni arsitektur rumah panggung di
                  Sulawesi Selatan, simbol budaya yang kaya.
                  {/* Discover the uniqueness and harmony of the stilt house architecture in South Sulawesi, a symbol of rich cultural heritage. */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos-once="true" data-aos="flip-left" data-aos-delay="750">
          <div
            className="lg:h-[500px] md:h-[400px] h-[250px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 bg-cover bg-center p-5 md:hover:scale-110 transition-all"
            style={{
              backgroundImage: "url(/images/card/upacara.jpg)",
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
                <h4 className="font-bold text-xl text-white md:mb-5 mb-2">
                  {lang == "ID" ? "UPACARA" : "CEREMONY"}
                </h4>
                <p className="text-gray-200 md:text-sm text-[12px]">
                  Temukan ungkapan syukur atas pertanian setahun. Rasakan
                  keharmonisan manusia, Tuhan, dan alam dalam budaya unik.
                  {/* Discover the expression of gratitude for a year of agriculture. Feel the harmony between humans, God, and nature in a unique cultural context. */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos-once="true" data-aos="flip-left" data-aos-delay="1000">
          <div
            className="lg:h-[500px] md:h-[400px] h-[250px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 bg-cover bg-center p-5 md:hover:scale-110 transition-all"
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
                <h4 className="font-bold text-xl text-white md:mb-5 mb-2">
                  {lang == "ID" ? "PAKAIAN" : "CLOTHES"}
                </h4>
                <p className="text-gray-200 md:text-sm text-[12px]">
                  Dengan desain dan corak yang beragam, busana tradisional Sunda
                  mencerminkan kekayaan budaya dan identitas khas masyarakatnya.
                  {/* With diverse designs and patterns, Sundanese traditional clothing reflects the cultural richness and distinctive identity of its community. */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-2 text-center mt-8">
          <button className="bg-red-500 hover:bg-red-400 text-white md:py-3 py-2 md:px-10 px-7 md:text-sm text-[12px] rounded-full">
            {lang == "ID" ? "Lihat Lebih Banyak" : "View More"}
          </button>
        </div>
      </section>

      <section className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2 relative mt-20">
        <div className="row-span-2 md:order-1 md:block hidden">
          <img
            src="/images/gallery/11.jpg"
            alt="gallery11"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-left"
            data-aos-delay="100"
          />
        </div>
        <div className="md:order-2 md:block hidden">
          <img
            src="/images/gallery/1.jpg"
            alt="gallery1"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-left"
            data-aos-delay="200"
          />
        </div>
        <div className="md:order-3 md:block hidden">
          <img
            src="/images/gallery/2.jpg"
            alt="gallery2"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-left"
            data-aos-delay="300"
          />
        </div>
        <div className="md:order-4 order-1">
          <img
            src="/images/gallery/3.jpg"
            alt="gallery3"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-left"
            data-aos-delay="400"
          />
        </div>
        <div className="lg:order-5 md:order-7 order-2">
          <img
            src="/images/gallery/4.jpg"
            alt="gallery4"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-down"
            data-aos-delay="500"
          />
        </div>

        {/*  */}

        <div className="lg:order-6 md:order-8 md:block hidden">
          <img
            src="/images/gallery/5.jpg"
            alt="gallery5"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-right"
            data-aos-delay="800"
          />
        </div>
        <div
          className="border-2 border-red-500 border-dashed p-5 flex flex-col justify-center lg:order-7 md:order-5  order-3  lg:col-span-1 md:col-span-2"
          data-aos-once="true"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <h2 className="font-semibold text-xl dark:text-gray-200">
            {lang == "ID" ? content.gallery.id : content.gallery.en}
          </h2>
          <p className="text-sm mt-3 text-gray-700 dark:text-gray-300">
            {lang == "ID" ? content.gallery.body.id : content.gallery.body.en}
          </p>
        </div>
        <div className="lg:order-8  order-5 lg:block md:hidden">
          <img
            src="/images/gallery/6.jpg"
            alt="gallery6"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-right"
            data-aos-delay="700"
          />
        </div>
        <div className="row-span-2 lg:order-9 md:order-6  order-4">
          <img
            src="/images/gallery/12.jpg"
            alt="gallery12"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-right"
            data-aos-delay="600"
          />
        </div>

        {/*  */}

        <div className="lg:order-10 md:block hidden order-9">
          <img
            src="/images/gallery/7.jpg"
            alt="gallery7"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-left"
            data-aos-delay="300"
          />
        </div>
        <div className="lg:order-11 lg:block hidden">
          <img
            src="/images/gallery/8.jpg"
            alt="gallery8"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-left"
            data-aos-delay="400"
          />
        </div>
        <div className="lg:order-12 lg:block hidden">
          <img
            src="/images/gallery/9.jpg"
            alt="gallery9"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-left"
            data-aos-delay="500"
          />
        </div>
        <div className="lg:order-last lg:block hidden">
          <img
            src="/images/gallery/10.jpg"
            alt="gallery10"
            className="w-full h-full object-cover"
            data-aos-once="true"
            data-aos="flip-left"
            data-aos-delay="600"
          />
        </div>
      </section>

      <section className="mt-20 dark:bg-gray-950 pt-20">
        <h3
          className="text-center md:text-4xl text-2xl font-bold dark:text-gray-100"
          data-aos-once="true"
          data-aos="fade-down"
        >
          {lang == "ID"
            ? "GALERI KERAGAMAN INDONESIA"
            : "INDONESIAN DIVERSITY GALLERY"}
        </h3>
        <p
          className="lg:w-[900px] w-[90%] text-center mx-auto md:text-base text-[13px] mt-5 mb-10 dark:text-gray-300 text-gray-700"
          data-aos-once="true"
          data-aos="fade-up"
        >
          {lang == "ID" ? content.slider.id : content.slider.en}
        </p>
        <div
          className="slider md:h-[500px] h-[350px] overflow-x-hidden py-10 relative"
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="slide-track flex md:gap-20 gap-10 items-center">
            <div className="md:w-[500px] w-[200px] slide">
              <img
                src="/images/gallery/1.jpg"
                className="md:w-[500px] w-[200px] md:h-[300px] h-[150px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="md:w-[500px] w-[200px] slide">
              <img
                src="/images/gallery/8.jpg"
                className="md:w-[500px] w-[200px] md:h-[300px] h-[150px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="md:w-[500px] w-[200px] slide">
              <img
                src="/images/gallery/3.jpg"
                className="md:w-[500px] w-[200px] md:h-[300px] h-[150px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="md:w-[500px] w-[200px] slide">
              <img
                src="/images/gallery/4.jpg"
                className="md:w-[500px] w-[200px] md:h-[300px] h-[150px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="md:w-[500px] w-[200px] slide">
              <img
                src="/images/gallery/5.jpg"
                className="md:w-[500px] w-[200px] md:h-[300px] h-[150px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="md:w-[500px] w-[200px] slide">
              <img
                src="/images/gallery/10.jpg"
                className="md:w-[500px] w-[200px] md:h-[300px] h-[150px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="md:w-[500px] w-[200px] slide">
              <img
                src="/images/gallery/6.jpg"
                className="md:w-[500px] w-[200px] md:h-[300px] h-[150px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="md:w-[500px] w-[200px] slide">
              <img
                src="/images/gallery/7.jpg"
                className="md:w-[500px] w-[200px] md:h-[300px] h-[150px] object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="lg:px-20 md:px-10 px-3"
        data-aos-once="true"
        data-aos="zoom-in"
      >
        <div className="bg-red-200 dark:bg-red-400 py-12 text-center rounded-md md:px-20 px-5">
          <h4 className="text-gray-800 dark:text-gray-300">
            {lang == "ID"
              ? "INDONESIA DIMATA DUNIA"
              : "Indonesia in the eyes of the world"}
          </h4>
          <h3 className="font-bold md:text-3xl text-xl mt-5 dark:text-gray-200">
            {lang == "ID"
              ? content.indonesiaAndWorld.id
              : content.indonesiaAndWorld.en}
          </h3>
        </div>
      </section>

      <section className="mb-20">
        <div className="grid lg:grid-cols-5 gap-10 items-center lg:px-20 md:px-10 px-5 mt-10">
          <div className="h-[350px] w-full rounded-md overflow-hidden lg:col-span-2">
            <img
              src="/images/header/3.jpg"
              alt=""
              className="object-cover h-full w-full"
              data-aos-once="true"
              data-aos="fade-left"
            />
          </div>
          <div
            className="lg:col-span-3"
            data-aos-once="true"
            data-aos="fade-right"
          >
            <h5 className="text-red-500 font-semibold md:mb-5 mb-3 md:text-base text-sm">
              RAGAM BERITA
            </h5>
            <Link to="/news/read">
              <h2 className="font-bold md:text-3xl text-xl dark:text-gray-200">
                {lang == "ID"
                  ? "INDONESIA DENGAN KEBERAGAMAN BUDAYA NUSANTARA YANG MENDUNIA"
                  : "INDONESIA WITH THE WORLD'S DIVERSITY OF ARCHIPELAGO CULTURE"}
              </h2>
            </Link>
            <p className="text-gray-800 mt-5 md:text-base text-[12px] dark:text-gray-300">
              {lang == "ID"
                ? content.news.highlight.id
                : content.news.highlight.en}
            </p>
            <div className="flex gap-5 mt-10 text-gray-600 dark:text-gray-400 md:text-base text-sm">
              <span className="flex gap-2 items-center">
                <FaEye />
                <small>2.000 views</small>
              </span>
              <span className="flex gap-2 items-center">
                <FaHeart />
                <small>2.000 suka</small>
              </span>
              <span className="flex gap-2 items-center">
                <FaComment />
                <small>2.000 komentar</small>
              </span>
            </div>

            <div className="lg:flex hidden gap-5 md:justify-end justify-center mt-5">
              <button className="flex items-center justify-center rounded-full w-[30px] h-[30px] dark:bg-gray-700 dark:hover:bg-gray-800 ">
                <FaChevronLeft />
              </button>
              <button className="flex items-center justify-center rounded-full w-[30px] h-[30px] dark:bg-gray-700 dark:hover:bg-gray-800 ">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        {moreNews ? (
          <>
            <section className="lg:grid hidden grid-cols-3 gap-10 px-20 mt-10">
              <div>
                <img
                  src="/images/festivalbali.jpeg"
                  alt="news1"
                  className="h-[250px] object-cover w-full rounded"
                />

                <Link to="/news/read">
                  <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
                    {lang == "ID" ? "Festival Bali Arts" : "Bali Arts Festival"}
                  </h3>
                </Link>
                <div className="my-5 flex gap-5">
                  <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                    <FaUser />
                    <small>Ilham Hafidz</small>
                  </span>
                  <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                    <FaCalendar />
                    <small>07 Des 2023</small>
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                  {lang == "ID"
                    ? content.news.sub.sub1.id
                    : content.news.sub.sub1.en}
                </p>
              </div>
              <div>
                <img
                  src="/images/dalangcilik.jpg"
                  alt="news2"
                  className="h-[250px] object-cover w-full rounded"
                />
                <Link to="/news/read">
                  <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
                    {lang == "ID"
                      ? "Festival Dalang Cilik"
                      : "'Dalang Cilik' Festival"}
                  </h3>
                </Link>
                <div className="my-5 flex gap-5">
                  <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                    <FaUser />
                    <small>Ilham Hafidz</small>
                  </span>
                  <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                    <FaCalendar />
                    <small>07 Des 2023</small>
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                  {lang == "ID"
                    ? content.news.sub.sub2.id
                    : content.news.sub.sub2.en}
                </p>
              </div>
              <div>
                <img
                  src="/images/babarit.jpeg"
                  alt="news3"
                  className="h-[250px] object-cover w-full rounded"
                />
                <Link to="/news/read">
                  <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
                    {lang == "ID" ? "Festival Babarit" : "Babarit Festival"}
                  </h3>
                </Link>
                <div className="my-5 flex gap-5">
                  <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                    <FaUser />
                    <small>Ilham Hafidz</small>
                  </span>
                  <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                    <FaCalendar />
                    <small>07 Des 2023</small>
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                  {lang == "ID"
                    ? content.news.sub.sub3.id
                    : content.news.sub.sub3.en}
                </p>
              </div>
            </section>
            <div className="lg:block hidden text-center ">
              <button
                className="bg-red-500 border-2 border-red-500 hover:bg-red-400 hover:border-red-400 text-white mx-auto text-sm px-5 py-2 mt-10 rounded-full inline-flex items-center gap-2 mr-5"
                onClick={() => {
                  setMoreNews(false);
                }}
              >
                {lang == "ID" ? "Selih Sedikit" : "Show More"}
                <MdKeyboardDoubleArrowUp />
              </button>
              <Link
                to={"/news"}
                className="border-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-white mx-auto text-sm px-5 py-2 mt-10 rounded-full inline-flex items-center gap-2"
              >
                {lang == "ID" ? "Semua Berita" : "Show All News"}
                <MdKeyboardDoubleArrowRight />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center lg:block hidden">
            <button
              className="bg-red-500 hover:bg-red-400 text-white mx-auto text-sm px-5 py-2 mt-10 rounded-full inline-flex items-center gap-2"
              onClick={() => {
                setMoreNews(true);
              }}
            >
              {lang == "ID" ? "Lihat Lainnya" : "Show More"}
              <MdKeyboardDoubleArrowDown />
            </button>
          </div>
        )}
      </section>
    </>
  );
}
