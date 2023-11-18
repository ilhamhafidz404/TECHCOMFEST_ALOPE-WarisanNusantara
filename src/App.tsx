import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBeer, FaHome, FaPause, FaPlay } from "react-icons/fa";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const alatMusik = [
  {
    name: "Angklung",
    from: "Jawa Barat",
    image: "angklung.jpg",
    sound: "angklung.mp3",
  },
  {
    name: "Bonang",
    from: "Jawa Timur",
    image: "bonang.jpeg",
    sound: "bonang.mp3",
  },
  {
    name: "Kolintang",
    from: "Sulawesi Utara",
    image: "kolintang.png",
    sound: "kolintang.mp3",
  },
  {
    name: "Suling",
    from: "Jawa Barat",
    image: "suling.webp",
    sound: "suling.mp3",
  },
  {
    name: "Serunai",
    from: "Sumatra Barat",
    image: "serunai.jpg",
    sound: "serunai.mp3",
  },
  {
    name: "Kecrek",
    from: "Betawi",
    image: "kecrek.jpg",
    sound: "kecrek.mp3",
  },
  {
    name: "Cangor",
    from: "Jambi",
    image: "cangor.png",
    sound: "cangor.mp3",
  },
  {
    name: "Gamelan",
    from: "Jawa Tengah",
    image: "gamelan.jpg",
    sound: "gamelan.mp3",
  },
  {
    name: "Talindo",
    from: "Sulawesi Tengah",
    image: "talindo.jpg",
    sound: "angklung.mp3",
  },
];

const songs = [
  {
    name: "Tokecang",
    lyric:
      "Tokecang tokecang bala gendir tosblong <br/> Angeun kacang angeun kacang sapependil kosong <br/> <br/> Aya listrik di masigit meuni caang <br/> katingalna <br/> Aya istri jangkung alit karangan dina pipina <br/> <br/> Tokecang tokecang bala gendir tosblong <br/> Angeun kacang angeun kacang sapependil kosong",
    from: "Jawa Barat",
    creator: "R.C Hardjosubroto",
    song: "tokecang.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini. Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Lagu-lagu tradisional seperti Tokecang merupakan bagian penting dari warisan budaya Indonesia. Mereka mencerminkan kekayaan budaya dan keindahan tradisi yang telah dijaga dan dilestarikan oleh masyarakat setempat selama bertahun-tahun. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
  },
  {
    name: "Rasa Sayange",
    lyric:
      "Rasa sayange rasa sayang sayange <br/> Lihat nona dari jauh rasa sayang sayange <br/> Rasa sayange rasa sayang sayange <br/> Lihat nona dari jauh rasa sayang sayange <br/><br/> Di sana gunung disini gunung <br/> Tengah tengah bunga melati <br/> Di sana bingung disini bingung <br/> Dua dua teman sejati <br/><br/> Rasa sayange rasa sayang sayange <br/> Lihat nona dari jauh rasa sayang sayange <br/> Rasa sayange rasa sayang sayange <br/> Lihat nona dari jauh rasa sayang sayange",
    from: "Maluku",
    creator: "Paulus Pea",
    song: "rasaSayange.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini. Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Lagu-lagu tradisional seperti Tokecang merupakan bagian penting dari warisan budaya Indonesia. Mereka mencerminkan kekayaan budaya dan keindahan tradisi yang telah dijaga dan dilestarikan oleh masyarakat setempat selama bertahun-tahun. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
  },
  {
    name: "Ampar-ampar Pisang",
    lyric:
      "Ampar ampar pisang <br/> Pisangku balum masak <br/> Masak sabigi dihurung bari-bari <br/> Masak sabigi dihurung bari-bari <br/><br/> Mangga lepak mangga lepok <br/><br/> Patah kayu bengkok <br/> Bengkok dimakan api <br/> apinya canculupan <br/><br/> Patah kayu bengkok <br/> Bengkok dimakan api <br/> apinya canculupan",
    from: "Kalimantan Selatan",
    creator: "Paulus Pea AC",
    song: "amparAmparPisang.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini. Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Lagu-lagu tradisional seperti Tokecang merupakan bagian penting dari warisan budaya Indonesia. Mereka mencerminkan kekayaan budaya dan keindahan tradisi yang telah dijaga dan dilestarikan oleh masyarakat setempat selama bertahun-tahun. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
  },
  {
    name: "Bungong Jumpa",
    lyric:
      "Bungong Jeumpa Bungong Jeumpa <br/> Meugah di Aceh <br/> Bungong teuleubeh teuleubeh <br/> Indah lagoina <br/><br/> Bungong Jeumpa Bungong Jeumpa <br/> Meugah di Aceh <br/> Bungong teuleubeh teuleubeh <br/> Indah lagoina <br/><br/> Puteh kuneng meujampu mirah <br/> Bungong si-ula indah lagoina <br/> Puteh kuneng meujampu mirah <br/> Bungong si-ula indah lagoina",
    from: "Nanggoroe Aceh Darussalam",
    creator: "Ibrahim Abduh",
    song: "bungongJumpa.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini. Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Lagu-lagu tradisional seperti Tokecang merupakan bagian penting dari warisan budaya Indonesia. Mereka mencerminkan kekayaan budaya dan keindahan tradisi yang telah dijaga dan dilestarikan oleh masyarakat setempat selama bertahun-tahun. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
  },
  {
    name: "Gundul-gundul Pacul",
    lyric:
      "Gundul gundul pacul cul gelelengan <br/> Nyunggi nyunggi wakul kul gembelengan <br/> Wakul ngglimpang segane dadi sak ratan <br/> Wakul ngglimpang segane dadi sak ratan",
    from: "Jawa Tengah",
    creator: "Raden Cajetanus Hardjosoebroto",
    song: "gundulGundulPacul.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini. Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Lagu-lagu tradisional seperti Tokecang merupakan bagian penting dari warisan budaya Indonesia. Mereka mencerminkan kekayaan budaya dan keindahan tradisi yang telah dijaga dan dilestarikan oleh masyarakat setempat selama bertahun-tahun. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
  },
  {
    name: "Yamko Rambe Yamko",
    lyric:
      "Hee yamko rambe yamko aronawa kombe  <br/> Hee yamko rambe yamko aronawa kombe  <br/> <br/> Teemi nokibe kubano ko bombe ko  <br/> Yuma no bungo awe ade  <br/> Teemi nokibe kubano ko bombe ko  <br/> Yuma no bungo awe ade  <br/> <br/> Hongke hongke hongke riro  <br/> Hongke jombe jombe riro  <br/> Hongke hongke hongke riro  <br/> Hongke jombe jombe riro",
    from: "Papua",
    creator: "Dr. Yusuf Hartono",
    song: "yamkoRambeYamko.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini. Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Lagu-lagu tradisional seperti Tokecang merupakan bagian penting dari warisan budaya Indonesia. Mereka mencerminkan kekayaan budaya dan keindahan tradisi yang telah dijaga dan dilestarikan oleh masyarakat setempat selama bertahun-tahun. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
  },
  {
    name: "Sajojo",
    lyric:
      "Sajojo, sajojo <br/> Yumanamko misa papara <br/> Samuna muna-muna keke <br/> Samuna muna-muna keke <br/><br/> Sajojo, sajojo <br/> Yumanamko misa papara <br/> Samuna muna-muna keke <br/> Samuna muna-muna keke <br/><br/> Kuserai, kusaserai, rai-rai-rai-rai <br/> Kuserai, kusaserai, rai-rai-rai-rai <br/><br/> Inamgo mikim ye <br/> Kia sore, kiasa sore, ye-ye <br/><br/> Inamgo mikim ye <br/> Kia sore, kiasa sore",
    from: "Papua",
    creator: "David Rumagesan",
    song: "sajojo.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini. Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Lagu-lagu tradisional seperti Tokecang merupakan bagian penting dari warisan budaya Indonesia. Mereka mencerminkan kekayaan budaya dan keindahan tradisi yang telah dijaga dan dilestarikan oleh masyarakat setempat selama bertahun-tahun. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
  },
  {
    name: "Apuse",
    lyric:
      "Apuse kokon dao <br/> Yarabe soren doreri <br/> Wuf lenso bani nema baki pase <br/><br/> Apuse kokon dao <br/> Yarabe soren doreri <br/> Wuf lenso bani nema baki pase <br/> Arafabye aswarakwar <br/> Arafabye aswarakwar",
    from: "Papua",
    creator: "Tete Mandosir Sarumi",
    song: "apuse.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini. Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Lagu-lagu tradisional seperti Tokecang merupakan bagian penting dari warisan budaya Indonesia. Mereka mencerminkan kekayaan budaya dan keindahan tradisi yang telah dijaga dan dilestarikan oleh masyarakat setempat selama bertahun-tahun. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
  },
];

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
  const [selectedSong, setSelectedSong] = useState({
    name: "Tokecang",
    lyric:
      "Tokecang tokecang bala gendir tosblong <br/> Angeun kacang angeun kacang sapependil kosong <br/> Aya listrik di masigit meuni caang <br/> katingalna <br/> Aya istri jangkung alit karangan dina pipina <br/> Tokecang tokecang bala gendir tosblong <br/> Angeun kacang angeun kacang sapependil kosong",
    from: "Jawa Barat",
    creator: "R.C Hardjosubroto",
    song: "tokecang.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini. Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Lagu-lagu tradisional seperti Tokecang merupakan bagian penting dari warisan budaya Indonesia. Mereka mencerminkan kekayaan budaya dan keindahan tradisi yang telah dijaga dan dilestarikan oleh masyarakat setempat selama bertahun-tahun. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
  });

  const [selectedAlatMusik, setSelectedAlatMusik] = useState({
    name: "Angklung",
    from: "Jawa Barat",
    image: "angklung.jpg",
  });

  const [musicPlayer, setMusicPlayer] = useState("tokecang.mp3");

  const changeMusic = (song: any) => {
    setMusicPlayer("");

    setTimeout(() => {
      setMusicPlayer(song);
    }, 500);
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChangeAccordionItem =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [recentAlatMusik, setRecentAlatMusik] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Gunakan useRef untuk menyimpan referensi ke objek audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAlatMusik = (alatMusik: string, data: any) => {
    setSelectedAlatMusik(data);

    // Hentikan musik sebelumnya jika sedang diputar
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }

    // Mulai pemutaran musik baru
    const audioAlatMusikBaru = new Audio(alatMusik);
    setRecentAlatMusik(alatMusik);

    audioAlatMusikBaru.addEventListener("ended", () => {
      // Setelah musik selesai, atur state isPlaying ke false
      setIsPlaying(false);
    });

    audioAlatMusikBaru.play();
    setIsPlaying(true);

    // Simpan referensi objek audio ke useRef
    audioRef.current = audioAlatMusikBaru;
  };

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

      <main className="container mx-auto px-10">
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
        {/*  */}
        <section className="mt-20">
          <div className="flex gap-10 items-center mb-10">
            <div className="shadow py-4 w-[100px] text-center rounded bg-purple-500 text-white">
              <GiMusicalScore className="mx-auto" size={30} />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-3xl mb-3">
                  LAGU DAERAH INDONESIA
                </h2>
                <p className="w-[700px]">
                  Indonesia dengan kekayaan budaya yang luar biasa memiliki
                  lebih dari 439 lagu tradisional. Setiap lagu menceritakan
                  kisah unik dan memikat, menjadi simbol keanekaragaman seni dan
                  warisan budaya yang memperkaya bangsa ini.
                </p>
              </div>
              {/* <img
                src="https://react.dev/images/home/community/react_conf_nat.webp"
                className="object-cover w-[300px] h-[100px] object-center"
                alt=""
              /> */}
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-10 mt-10">
            <div className="h-[500px] overflow-auto rounded shadow">
              {songs.map((song) => (
                <div
                  className={
                    song.name == selectedSong.name
                      ? "bg-purple-500/20 px-5 py-3"
                      : "px-5 py-3 hover:bg-purple-500/10 cursor-pointer"
                  }
                  onClick={() => {
                    changeMusic(song.song);
                    setSelectedSong(song);
                  }}
                >
                  <div>
                    <h6 className="text-xl font-semibold">{song.name}</h6>
                    <small className="text-gray-500 block">
                      Lagu Daerah {song.from}
                    </small>
                    <small className="text-gray-500 block">
                      Cipt: {song.creator}
                    </small>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="mb-5">
                <h5 className="font-semibold text-xl mb-3 uppercase">
                  LAGU {selectedSong.name}
                </h5>

                {musicPlayer == "tokecang.mp3" ? (
                  <audio controls>
                    <source src={`/songs/tokecang.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer == "amparAmparPisang.mp3" ? (
                  <audio controls>
                    <source
                      src={`/songs/amparAmparPisang.mp3`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer == "apuse.mp3" ? (
                  <audio controls>
                    <source src={`/songs/apuse.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer == "bungongJumpa.mp3" ? (
                  <audio controls>
                    <source src={`/songs/bungongJumpa.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer == "gundulGundulPacul.mp3" ? (
                  <audio controls>
                    <source
                      src={`/songs/gundulGundulPacul.mp3`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer == "rasaSayange.mp3" ? (
                  <audio controls>
                    <source src={`/songs/rasaSayange.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer == "sajojo.mp3" ? (
                  <audio controls>
                    <source src={`/songs/sajojo.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer == "yamkoRambeYamko.mp3" ? (
                  <audio controls>
                    <source
                      src={`/songs/yamkoRambeYamko.mp3`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  ""
                )}
              </div>

              <h5 className="font-semibold text-xl">LIRIK</h5>
              <small>Ciptaan: {selectedSong.creator}</small>

              <p
                className="mt-5"
                dangerouslySetInnerHTML={{ __html: selectedSong.lyric }}
              ></p>
            </div>
            <div className="col-span-2">
              <h5 className="font-semibold text-xl mb-3 uppercase">
                INFORMASI LAINNYA
              </h5>

              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChangeAccordionItem("panel1")}
              >
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Makna Lagu</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChangeAccordionItem("panel2")}
              >
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Sejarah</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{selectedSong.history}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div className="flex gap-10 items-center mb-10">
            <div className="shadow py-4 w-[100px] text-center rounded bg-indigo-500 text-white">
              <MdOutlinePiano className="mx-auto" size={30} />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-3xl mb-3">
                  ALAT MUSIK TRADISIONAL INDONESIA
                </h2>
                <p className="w-[700px]">
                  Indonesia dengan kekayaan budaya yang luar biasa memiliki
                  lebih dari 439 lagu tradisional. Setiap lagu menceritakan
                  kisah unik dan memikat, menjadi simbol keanekaragaman seni dan
                  warisan budaya yang memperkaya bangsa ini.
                </p>
              </div>
              {/* <img
                src="https://react.dev/images/home/community/react_conf_nat.webp"
                className="object-cover w-[300px] h-[100px] object-center"
                alt=""
              /> */}
            </div>
          </div>
          <hr className="mb-5" />
          <div className="grid grid-cols-5 gap-20 items-center">
            <div className="col-span-2">
              <img
                src={`/images/alatMusik/${selectedAlatMusik.image}`}
                className="w-full h-[400px] object-cover rounded"
              />
            </div>
            <div className="grid grid-cols-3 col-span-3 gap-5">
              {alatMusik.map((row) => (
                <div
                  key={row.name} // Add a unique key for each item
                  className={
                    row.name == selectedAlatMusik.name
                      ? "bg-indigo-500 text-white shadow p-4 rounded flex justify-between items-center cursor-pointer"
                      : "shadow p-4 rounded flex justify-between items-center cursor-pointer"
                  }
                  onClick={() => playAlatMusik(`/sounds/${row.sound}`, row)}
                >
                  <div>
                    <h3>{row.name}</h3>
                    <small>{row.from}</small>
                  </div>
                  <div className="pr-4">
                    <span>
                      <FaPlay />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <audio controls>
            <source src={`/songs/yamkoRambeYamko.mp3`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio> */}
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

      <section className="relative">
        <img src="/images/indonesia.png" className="w-screen h-[600px]" />
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

      <Button variant="contained">Hello world</Button>
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
