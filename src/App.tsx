import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBeer, FaChevronDown, FaHome, FaPause, FaPlay } from "react-icons/fa";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// icons
import ChevronRightIcon from "./components/icons/chevronRight.jsx";
import ChevronLeftIcon from "./components/icons/chevronLeftIcon.jsx";

// react icons
import { GiMusicalScore } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { GiHeartInside } from "react-icons/gi";
import {
  MdInventory,
  MdOutlineHistoryEdu,
  MdOutlinePiano,
} from "react-icons/md";
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
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini.<br /><br /> Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
    mean: "Lagu Tokecang adalah anjuran agar manusia tidak berlebihan dalam mengambil makanan, hingga tidak menyisakan untuk orang lain. <br/> Hal ini menjadi pengingat agar manusia tidak serakah, supaya nantinya tidak merugikan diri sendiri dan orang di sekitar.<br/> Selain itu, manusia harus selalu berbagi dan peduli dan tidak terjebak dengan hanya memikirkan diri sendiri.",
  },
  {
    name: "Rasa Sayange",
    lyric:
      "Rasa sayange rasa sayang sayange <br/> Lihat nona dari jauh rasa sayang sayange <br/> Rasa sayange rasa sayang sayange <br/> Lihat nona dari jauh rasa sayang sayange <br/><br/> Di sana gunung disini gunung <br/> Tengah tengah bunga melati <br/> Di sana bingung disini bingung <br/> Dua dua teman sejati <br/><br/> Rasa sayange rasa sayang sayange <br/> Lihat nona dari jauh rasa sayang sayange <br/> Rasa sayange rasa sayang sayange <br/> Lihat nona dari jauh rasa sayang sayange",
    from: "Maluku",
    creator: "Paulus Pea",
    song: "rasaSayange.mp3",
    history:
      "Lagu ini seringkali dinyanyikan oleh anak-anak sebagai tanda suka cita. Lagu ini biasa juga dinyanyikan dalam suatu acara atau saat menyambut tamu.<br/><br/> Alkisah, lagu ini diciptakan oleh Paulus Pea. Paulus Pea sendiri adalah seorang putra daerah asli Indonesia. Pada awalnya, dia menciptakan lagu ini sebagai iringan saat sedang mengajar di dalam kelas, kemudian dia meminta para guru lainnya untuk menyanyikan lagu tersebut saat di depan kelas. Dari situlah lagu ini mulai diperdengarkan dari telinga ke telinga dan menjadi lagu daerah yang sampai saat ini masih lestari dan sering didengar. <br/><br/> Menurut Museum Nusantara, lagu Rasa Sayange pertama kali direkam di studio di daerah Solo pada 1962 menggunakan piringan hitam. Lagu itu direkam sebagai bagian dari souvenir Asian Games ke-4. Menariknya, hasil rekaman pertama itu masih tersimpan dengan rapi di Perum PNRI Cabang Surakarta hingga sekarang. Ini juga yang menjadi bukti bahwa lagu Rasa Sayange asli Indonesia",
    mean: "‘Rasa Sayange’ merupakan lagu daerah Maluku yang tergolong dalam lagu anak-anak. Masyarakat Maluku secara turun-temurun menyanyikan lagu ini sebagai ungkapan kasih sayang kepada lingkungan sosial mereka. <br /> Liriknya merupakan pantun atau sajak yang dinyanyikan secara bersahutan. Pantunnya bisa kamu bikin sendiri lho, Toppers. Sampai sekarang ada berbagai versi pantun ‘Rasa Sayange’, namun tetap sesuai maksud dan tujuan dari lagu tersebut.",
  },
  {
    name: "Ampar-ampar Pisang",
    lyric:
      "Ampar ampar pisang <br/> Pisangku balum masak <br/> Masak sabigi dihurung bari-bari <br/> Masak sabigi dihurung bari-bari <br/><br/> Mangga lepak mangga lepok <br/><br/> Patah kayu bengkok <br/> Bengkok dimakan api <br/> apinya canculupan <br/><br/> Patah kayu bengkok <br/> Bengkok dimakan api <br/> apinya canculupan",
    from: "Kalimantan Selatan",
    creator: "Paulus Pea AC",
    song: "amparAmparPisang.mp3",
    history:
      "Lagu ampar ampar pisang ini pada awalnya dinyanyikan secara iseng saat masyarakat Kalimantan Selatan membuat sebuah kue/makanan yang terbuat dari pisang. Makanan ini bernama rimpi. <br /><br /> Cara membuat makanan rimpi ini adalah dengan cara pisang di diampar (disusun) kemudian dibiarkan hingga hampir matang mendekati busuk. setelah itu pisang dijemur diampar(disusun) di bawah sinar matahari sampai kira kira pisang mengeras dan mengeluarkan bau manis yang sangat khas.  Isi dari lagu ampar-ampar pisang menceritakan tentang pisang yang diampar dan dikerubuti binatang kecil kecil bisa terbang yang senang dgn aroma pisang. Binatang ini dikenal masyarakat Kalimantan dengan nama bari bari. <br /><br /> Pada akhir lagu di ceritakan tentang binatang yang ditakuti anak kecil zaman dulu (lihat kata “dikitip bidawang”) yang artinya digigit biawak. Konon, kata dikitip bidawang itu digunakan untuk menakuti anak anak yang suka mencuri pisang/kue rimpi yang masih dalam proses penjemuran.",
    mean: "‘Ampar-ampar Pisang’ terkenal sebagai lagu bermain anak-anak di masyarakat sekarang. Di sisi cerita, lagu berbahasa Banjar ini menceritakan tentang pisang yang diolah dengan cara dijemur kemudian menjadi makanan khas. <br /><br /> Selain itu, lagu ‘Ampar-ampar Pisang’ mencerminkan kebiasaan masyarakat Kalimantan Selatan yang suka menyusun buah pisang yang mulai masak. Jika sudah masak dan tinggal sebiji, anak-anak akan makan pisang tersebut seperti api memakan batang kayu.",
  },
  {
    name: "Bungong Jumpa",
    lyric:
      "Bungong Jeumpa Bungong Jeumpa <br/> Meugah di Aceh <br/> Bungong teuleubeh teuleubeh <br/> Indah lagoina <br/><br/> Bungong Jeumpa Bungong Jeumpa <br/> Meugah di Aceh <br/> Bungong teuleubeh teuleubeh <br/> Indah lagoina <br/><br/> Puteh kuneng meujampu mirah <br/> Bungong si-ula indah lagoina <br/> Puteh kuneng meujampu mirah <br/> Bungong si-ula indah lagoina",
    from: "Nanggoroe Aceh Darussalam",
    creator: "Ibrahim Abduh",
    song: "bungongJumpa.mp3",
    history:
      "Bungong Jeumpa pada awalnya hanya lagu daerah yang diciptakan oleh Ibrahim Abduh. <br /><br /> Lagu Bungong Jeumpa bermula dari Kerajaan Jeumpa yang berdiri pada abad ke-7 M. Selain bisa dinyanyikan, lagu ini pun mempunyai gerakan-gerakan tarian. <br /><br /> Tarian Bungong Jeumpa seringkali ditampilkan dalam acara kerajaan di istana. Konon, para raja menyukai tarian ini karena dianggap membawa rezeki dan keuntungan bagi kerajaannya. <br /><br /> Hingga saat ini, tarian Bungong Jeumpa masih dilestarikan warga Aceh setempat sebagai warisan budaya dari leluhurnya di zaman dahulu.",
    mean: "Bungong Jeumpa memiliki arti bunga cempaka yang menjadi simbol bunga khas Aceh. Lagu ini juga mencerminkan masyarakat Aceh yang bersyukur telah diberi tanah yang subur dan indah. <br/><br/> Nyanyian ini biasanya dibarengi dengan tarian tradisional khas Aceh dengan nama yang sama. Formasi tarian Bungong Jeumpa dilakukan duduk dan berdiri dengan gerakan tangan yang serasi bersama penari lain.",
  },
  {
    name: "Gundul-gundul Pacul",
    lyric:
      "Gundul gundul pacul cul gelelengan <br/> Nyunggi nyunggi wakul kul gembelengan <br/> Wakul ngglimpang segane dadi sak ratan <br/> Wakul ngglimpang segane dadi sak ratan",
    from: "Jawa Tengah",
    creator: "Raden Cajetanus Hardjosoebroto",
    song: "gundulGundulPacul.mp3",
    history:
      "Gundul-gundul Pacul ditulis Sunan Kalijaga bersama teman-temannya pada tahun 1.400. Meski liriknya terkesan jenaka, Sunan Kalijaga ternyata menyisipkan nasihat dan sindiran bagi penguasa. <br /><br /> Kepala adalah lambang kehormatan dan kemuliaan bagi seseorang. Sementara rambut diartikan sebagai mahkota dan lambang keindahan kepala. Maka dari itu, gundul atau kepala tanpa rambut memiliki arti kehormatan tanpa mahkota. Pacul sendiri adalah cangkul, alat petani yang terbuat dari lempeng besi segi empat. Pacul menjadi sebuah lambang bagi rakyat yang di zaman dulu didominasi para petani. <br /><br /> Gundul Pacul pun diartikan bahwa seorang pemimpin sesungguhnya bukan orang yang diberi mahkota tetapi mereka yang membawa pacul untuk mencangkul dan mengupayakan kesejahteraan bagi rakyatnya. <br /><br />",
    mean: "Meskipun liriknya simpel, akan tetapi arti lirik tersebut memiliki pesan amanat yang dalam. Adapun artinya adalah banyak pemimpin yang lupa bahwa dia tengah memegang amanat yang berat. <br/><br/> Pemimpin tidak seharusnya untuk berlaku semena-mena dengan rakyat ketika menjabat. Melainkan mereka harus menghargai rakyatnya dan mendahulukan pernyataan mereka.",
  },
  {
    name: "Yamko Rambe Yamko",
    lyric:
      "Hee yamko rambe yamko aronawa kombe  <br/> Hee yamko rambe yamko aronawa kombe  <br/> <br/> Teemi nokibe kubano ko bombe ko  <br/> Yuma no bungo awe ade  <br/> Teemi nokibe kubano ko bombe ko  <br/> Yuma no bungo awe ade  <br/> <br/> Hongke hongke hongke riro  <br/> Hongke jombe jombe riro  <br/> Hongke hongke hongke riro  <br/> Hongke jombe jombe riro",
    from: "Papua",
    creator: "Dr. Yusuf Hartono",
    song: "yamkoRambeYamko.mp3",
    history:
      "Lagu ini belum diketahui asal usul nya. tetapi jika dilihat dari ketukan dan musiknya lagu ini Papua, tetapi untuk lirik dari lagu ini belum diketahui berasal bahasa mana",
    mean: "Meski memiliki irama yang bahagia dan energik, lagu “Yamko Rambe Yamko” menceritakan tentang daerah-daerah di Papua yang mengalami perang suku. Walaupun begitu, asal usul lagu ini masih diperdebatkan. <br/><br/> Beberapa orang asal Papua, Arie Kriting salah satunya, menyatakan bahwa lagu ini bukan berasal dari salah satu bahasa Papua. Namun, menurut musisi senior, Yan Petrus Tagai, “Yamko Rambe Yamko” berasal dari Lembah Grime, Kabupaten Jayapura, Provinsi Papua. <br/> Dia juga yang menyatakan jika “Yamko Rambe Yamko” adalah lagu pengiring permainan sakral bernama “Kasep”. Terlepas dari perdebatan di masyarakat, The Resonanz Children’s Choir pada tahun 2017 berhasil membawakan lagu ini dan memenangkan juara umum dalam kompetisi paduan suara di Roma.",
  },
  {
    name: "Sajojo",
    lyric:
      "Sajojo, sajojo <br/> Yumanamko misa papara <br/> Samuna muna-muna keke <br/> Samuna muna-muna keke <br/><br/> Sajojo, sajojo <br/> Yumanamko misa papara <br/> Samuna muna-muna keke <br/> Samuna muna-muna keke <br/><br/> Kuserai, kusaserai, rai-rai-rai-rai <br/> Kuserai, kusaserai, rai-rai-rai-rai <br/><br/> Inamgo mikim ye <br/> Kia sore, kiasa sore, ye-ye <br/><br/> Inamgo mikim ye <br/> Kia sore, kiasa sore",
    from: "Papua",
    creator: "David Rumagesan",
    song: "sajojo.mp3",
    history: "-",
    mean: "“Sajojo” adalah salah satu lagu daerah populer yang berasal dari provinsi Papua. Ini adalah lagu yang berkisah mengenai seorang perempuan desa yang begitu cantik, ia dicintai oleh kedua orang tuanya dan banyak laki-laki yang mendambakannya. <br/><br/> Biasanya masyarakat Papua akan menyanyikan lagu ini sambil menari dengan penuh ceria. Gerakan tari ini cukup mudah, ada loncatan, kemudian bergerak ke depan, belakang, ke kiri, ke kanan, dengan ritme yang kompak dengan penari lainnya.",
  },
  {
    name: "Apuse",
    lyric:
      "Apuse kokon dao <br/> Yarabe soren doreri <br/> Wuf lenso bani nema baki pase <br/><br/> Apuse kokon dao <br/> Yarabe soren doreri <br/> Wuf lenso bani nema baki pase <br/> Arafabye aswarakwar <br/> Arafabye aswarakwar",
    from: "Papua",
    creator: "Tete Mandosir Sarumi",
    song: "apuse.mp3",
    history:
      "Saat itu, Korinus yang sedang menjalani masa-masa awal karier sebagai guru, sangat ingin untuk membagikan semangat dalam menuntut ilmu setinggi mungkin kepada anak-anak yang mendiami kampung itu. <br /> <br/> Lagu itu sebenarnya mau mengajak anak-anak yang mau pergi sekolah ke Manokwari, atau anak-anak pada saat itu menyebutnya Doreri, supaya mereka pergi sekolah harus ingat orang tua.",
    mean: "Apuse adalah lagu daerah asal Papua tentang seorang cucu yang hendak berpamitan kepada kakek dan neneknya karena dia akan merantau ke Teluk Doreri, Kabupaten Manokwari, Provinsi Papua Barat. <br /> Lirik 'apuse kokon dao yarabe soren doreri' menyatakan momen ketika pemuda tersebut berpamitan dengan kakek neneknya. 'Wuf lenso bani nema baki pase' memiliki arti pegang sapu tangan dan melambaikan tangan. <br /><br /> Hingga kemudian kakek dan neneknya menjawab 'Arafabye aswarakwar' yang artinya 'kasihan aku, selamat jalan cucuku'.",
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
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini.<br /><br /> Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
    mean: "Lagu Tokecang adalah anjuran agar manusia tidak berlebihan dalam mengambil makanan, hingga tidak menyisakan untuk orang lain. <br/> Hal ini menjadi pengingat agar manusia tidak serakah, supaya nantinya tidak merugikan diri sendiri dan orang di sekitar.<br/> Selain itu, manusia harus selalu berbagi dan peduli dan tidak terjebak dengan hanya memikirkan diri sendiri.",
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

  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChangeAccordionItem =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [isPlaying, setIsPlaying] = useState(false);

  // Gunakan useRef untuk menyimpan referensi ke objek audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAlatMusik = (alatMusik: string) => {
    // Hentikan musik sebelumnya jika sedang diputar
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }

    // Mulai pemutaran musik baru
    const audioAlatMusikBaru = new Audio(alatMusik);

    audioAlatMusikBaru.addEventListener("ended", () => {
      // Setelah musik selesai, atur state isPlaying ke false
      setIsPlaying(false);
    });

    audioAlatMusikBaru.play();
    setIsPlaying(true);

    // Simpan referensi objek audio ke useRef
    audioRef.current = audioAlatMusikBaru;
  };

  const pauseAlatMusik = () => {
    // Hentikan musik yang sedang diputar
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, [selectedAlatMusik]);

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
          <div className="md:flex gap-10 items-center mb-10">
            <div className="shadow py-4 w-[100px] text-center rounded bg-purple-500 text-white">
              <GiMusicalScore className="mx-auto" size={30} />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-3xl mb-3 md:mt-0 mt-5">
                  LAGU DAERAH INDONESIA
                </h2>
                <p className="xl:w-[700px] md:w-[500px] w-full">
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
          <div className="md:grid xl:grid-cols-4 md:grid-cols-2 gap-10 mt-10">
            <div className="md:h-[500px] h-[200px] md:mb-0 mb-5 overflow-auto rounded shadow">
              {songs.map((song) => (
                <div
                  className={
                    song.name === selectedSong.name
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
            <div className="md:mb-0 mb-5">
              <div className="mb-5">
                <h5 className="font-semibold text-xl mb-3 uppercase">
                  LAGU {selectedSong.name}
                </h5>

                {musicPlayer === "tokecang.mp3" ? (
                  <audio controls>
                    <source src={`/songs/tokecang.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer === "amparAmparPisang.mp3" ? (
                  <audio controls>
                    <source
                      src={`/songs/amparAmparPisang.mp3`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer === "apuse.mp3" ? (
                  <audio controls>
                    <source src={`/songs/apuse.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer === "bungongJumpa.mp3" ? (
                  <audio controls>
                    <source src={`/songs/bungongJumpa.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer === "gundulGundulPacul.mp3" ? (
                  <audio controls>
                    <source
                      src={`/songs/gundulGundulPacul.mp3`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer === "rasaSayange.mp3" ? (
                  <audio controls>
                    <source src={`/songs/rasaSayange.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer === "sajojo.mp3" ? (
                  <audio controls>
                    <source src={`/songs/sajojo.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : musicPlayer === "yamkoRambeYamko.mp3" ? (
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
                  expandIcon={<FaChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <div className="flex items-center gap-3">
                      <MdInventory size={25} />
                      <p>Makna Lagu</p>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p
                      dangerouslySetInnerHTML={{ __html: selectedSong.mean }}
                    ></p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChangeAccordionItem("panel2")}
              >
                <AccordionSummary
                  expandIcon={<FaChevronDown />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    <div className="flex items-center gap-3">
                      <MdOutlineHistoryEdu size={30} />
                      <p>Sejarah</p>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p
                      dangerouslySetInnerHTML={{ __html: selectedSong.history }}
                    ></p>
                  </Typography>
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
                alt="gambarAlatMusik"
              />
            </div>
            <div className="grid grid-cols-3 col-span-3 gap-5">
              {alatMusik.map((row) => (
                <div
                  key={row.name} // Add a unique key for each item
                  className={
                    row.name === selectedAlatMusik.name
                      ? "bg-gradient-to-r from-indigo-500/70 to-indigo-200/20 text-white shadow p-4 rounded flex justify-between items-center cursor-pointer"
                      : "shadow p-4 rounded flex justify-between items-center cursor-pointer"
                  }
                  onClick={() => setSelectedAlatMusik(row)}
                >
                  <div>
                    <h3>{row.name}</h3>
                    <small>{row.from}</small>
                  </div>
                  {selectedAlatMusik.name === row.name ? (
                    <BootstrapTooltip
                      title="Play Music"
                      placement="top"
                      className="pr-2"
                      onClick={() => {
                        isPlaying
                          ? pauseAlatMusik()
                          : playAlatMusik(`/sounds/${row.sound}`);
                      }}
                    >
                      <span className="bg-white shadow text-indigo-500 flex items-center justify-center w-[30px] h-[30px] rounded-full">
                        {isPlaying ? <FaPause /> : <FaPlay />}
                      </span>
                    </BootstrapTooltip>
                  ) : (
                    ""
                  )}
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
