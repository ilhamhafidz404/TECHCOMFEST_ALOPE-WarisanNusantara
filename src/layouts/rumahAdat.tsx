// import React from "react";
import { FaHome } from "react-icons/fa";

import ReactCardSlider from "react-card-slider-component";
import { useEffect } from "react";

export default function RumahAdat() {
  let rumahAdatName = document.getElementById("rumahAdatName") as HTMLElement;
  let rumahAdatDesc = document.getElementById("rumahAdatDesc") as HTMLElement;
  let rumahAdatImage = document.getElementById(
    "rumahAdatImage"
  ) as HTMLImageElement;

  useEffect(() => {
    rumahAdatName = document.getElementById("rumahAdatName") as HTMLElement;
    rumahAdatDesc = document.getElementById("rumahAdatDesc") as HTMLElement;
    rumahAdatImage = document.getElementById(
      "rumahAdatImage"
    ) as HTMLImageElement;
  }, []);

  const changeImage1 = () => {
    rumahAdatName.innerHTML = "RUMAH KRONG BADE";
    rumahAdatDesc.innerHTML =
      "Rumah Aceh atau yang lebih dikenal dengan nama 'Rumoh Aceh' merupakan rumah adat dari suku Aceh. Rumah ini bertipe rumah panggung dengan 3 bagan utama dan 1 bagian tambahan. Tiga bagian utama dari rumah Aceh yaitu seuramoë keuë, seuramoë teungoh dan seuramoë likôt. Sedangkan 1 bagian tambahannya yaitu rumoh dap";
    rumahAdatImage.src = "/images/rumahAdat/aceh.png";
  };
  const changeImage2 = () => {
    rumahAdatName.innerHTML = "RUMAH JOGLO";
    rumahAdatDesc.innerHTML =
      "Rumah adat Joglo ini merupakan rumah adat dari Provinsi Jawa Timur, Jawa Tengah dan Yogyakarta. Walau termasuk budaya dari 3 daerah yang berbeda, tidak banyak perbedaan antara satu sama lainnya. <br /><br/> Dari rumah Joglo ini sendiri memilki fungsi dan bagian-bagian yang berbeda-beda. Ada yang digunakan sebagai tempat untuk bertamu bahkan untuk sekedar bersantai-santai. Terdapat bagian yang bernama pendapa, yaitu sebuah ruangan yang biasanya digunakan untuk acara-acara besar seperti wayang kulit, tari, gamelan dan lain-lain.";
    rumahAdatImage.src = "/images/rumahAdat/jogloJawaTimur.jpg";
  };
  const changeImage3 = () => {
    rumahAdatName.innerHTML = "RUMAH ADAT KASEPUH";
    rumahAdatDesc.innerHTML =
      "Rumah adat kasepuhan ini berasal dari Jawa Barat, tepatnya di kota Cirebon. <br/><br/> Rumah Adat Kasepuhan dianggap sebagai perluasan wilayah dari Keraton Pakungwati yang didirikan pada 1452. Dulunya, Keraton Kasepuhan Cirebon dibangun sebagai pusat pelatihan tentara kerajaan. Ditambah, fungsi dari keraton ini juga sebagai tempat pengadilan perkara hukum adat. <br/><br/> Diketahui, dalam keraton ini, terdapat beberapa ruangan khusus, seperti ruang pengadilan, ruang pendopo atau jinem, ruang Pringgodani yang ditempati sultan, dan ruang prabayasa untuk menerima tamu.";
    rumahAdatImage.src = "/images/rumahAdat/keratonJakarta.jpg";
  };
  const changeImage4 = () => {
    rumahAdatName.innerHTML = "SULAH NYANDA";
    rumahAdatDesc.innerHTML =
      "Rumah ini merupakan rumah adat suku Baduy di Provinsi Banten.  adat Joglo ini merupakan rumah adat dari Provinsi Jawa Timur, Jawa Tengah dan Yogyakarta. Walau termasuk budaya dari 3 daerah yang berbeda, tidak banyak perbedaan antara satu sama lainnya. <br /><br/> Dari rumah Joglo ini sendiri memilki fungsi dan bagian-bagian yang berbeda-beda. Ada yang digunakan sebagai tempat untuk bertamu bahkan untuk sekedar bersantai-santai. Terdapat bagian yang bernama pendapa, yaitu sebuah ruangan yang biasanya digunakan untuk acara-acara besar seperti wayang kulit, tari, gamelan dan lain-lain.";
    rumahAdatImage.src = "/images/rumahAdat/badui.jpg";
  };
  const changeImage5 = () => {
    rumahAdatName.innerHTML = "GADANG";
    rumahAdatDesc.innerHTML =
      "Rumah adat Joglo ini merupakan rumah adat dari Provinsi Jawa Timur, Jawa Tengah dan Yogyakarta. Walau termasuk budaya dari 3 daerah yang berbeda, tidak banyak perbedaan antara satu sama lainnya. <br /><br/> Dari rumah Joglo ini sendiri memilki fungsi dan bagian-bagian yang berbeda-beda. Ada yang digunakan sebagai tempat untuk bertamu bahkan untuk sekedar bersantai-santai. Terdapat bagian yang bernama pendapa, yaitu sebuah ruangan yang biasanya digunakan untuk acara-acara besar seperti wayang kulit, tari, gamelan dan lain-lain.";
    rumahAdatImage.src = "/images/rumahAdat/gadang.jpg";
  };
  const changeImage6 = () => {
    rumahAdatName.innerHTML = "HONAI";
    rumahAdatDesc.innerHTML =
      "Rumah adat Joglo ini merupakan rumah adat dari Provinsi Jawa Timur, Jawa Tengah dan Yogyakarta. Walau termasuk budaya dari 3 daerah yang berbeda, tidak banyak perbedaan antara satu sama lainnya. <br /><br/> Dari rumah Joglo ini sendiri memilki fungsi dan bagian-bagian yang berbeda-beda. Ada yang digunakan sebagai tempat untuk bertamu bahkan untuk sekedar bersantai-santai. Terdapat bagian yang bernama pendapa, yaitu sebuah ruangan yang biasanya digunakan untuk acara-acara besar seperti wayang kulit, tari, gamelan dan lain-lain.";
    rumahAdatImage.src = "/images/rumahAdat/honai.jpg";
  };
  const changeImage7 = () => {
    rumahAdatName.innerHTML = "MUSALAKI";
    rumahAdatDesc.innerHTML =
      "Rumah adat Joglo ini merupakan rumah adat dari Provinsi Jawa Timur, Jawa Tengah dan Yogyakarta. Walau termasuk budaya dari 3 daerah yang berbeda, tidak banyak perbedaan antara satu sama lainnya. <br /><br/> Dari rumah Joglo ini sendiri memilki fungsi dan bagian-bagian yang berbeda-beda. Ada yang digunakan sebagai tempat untuk bertamu bahkan untuk sekedar bersantai-santai. Terdapat bagian yang bernama pendapa, yaitu sebuah ruangan yang biasanya digunakan untuk acara-acara besar seperti wayang kulit, tari, gamelan dan lain-lain.";
    rumahAdatImage.src = "/images/rumahAdat/musalaki.webp";
  };
  const changeImage8 = () => {
    rumahAdatName.innerHTML = "RUMAH PANJANG";
    rumahAdatDesc.innerHTML =
      "Rumah adat Joglo ini merupakan rumah adat dari Provinsi Jawa Timur, Jawa Tengah dan Yogyakarta. Walau termasuk budaya dari 3 daerah yang berbeda, tidak banyak perbedaan antara satu sama lainnya. <br /><br/> Dari rumah Joglo ini sendiri memilki fungsi dan bagian-bagian yang berbeda-beda. Ada yang digunakan sebagai tempat untuk bertamu bahkan untuk sekedar bersantai-santai. Terdapat bagian yang bernama pendapa, yaitu sebuah ruangan yang biasanya digunakan untuk acara-acara besar seperti wayang kulit, tari, gamelan dan lain-lain.";
    rumahAdatImage.src = "/images/rumahAdat/panjang.jpg";
  };
  const changeImage9 = () => {
    rumahAdatName.innerHTML = "RAKIT";
    rumahAdatDesc.innerHTML =
      "Rumah adat Joglo ini merupakan rumah adat dari Provinsi Jawa Timur, Jawa Tengah dan Yogyakarta. Walau termasuk budaya dari 3 daerah yang berbeda, tidak banyak perbedaan antara satu sama lainnya. <br /><br/> Dari rumah Joglo ini sendiri memilki fungsi dan bagian-bagian yang berbeda-beda. Ada yang digunakan sebagai tempat untuk bertamu bahkan untuk sekedar bersantai-santai. Terdapat bagian yang bernama pendapa, yaitu sebuah ruangan yang biasanya digunakan untuk acara-acara besar seperti wayang kulit, tari, gamelan dan lain-lain.";
    rumahAdatImage.src = "/images/rumahAdat/rakit.jpg";
  };
  const changeImage10 = () => {
    rumahAdatName.innerHTML = "RUMAH SUNDA";
    rumahAdatDesc.innerHTML =
      "Rumah adat Joglo ini merupakan rumah adat dari Provinsi Jawa Timur, Jawa Tengah dan Yogyakarta. Walau termasuk budaya dari 3 daerah yang berbeda, tidak banyak perbedaan antara satu sama lainnya. <br /><br/> Dari rumah Joglo ini sendiri memilki fungsi dan bagian-bagian yang berbeda-beda. Ada yang digunakan sebagai tempat untuk bertamu bahkan untuk sekedar bersantai-santai. Terdapat bagian yang bernama pendapa, yaitu sebuah ruangan yang biasanya digunakan untuk acara-acara besar seperti wayang kulit, tari, gamelan dan lain-lain.";
    rumahAdatImage.src = "/images/rumahAdat/sunda.jpg";
  };

  const slides = [
    {
      image: "/images/rumahAdat/aceh.png",
      clickEvent: changeImage1,
    },
    {
      image: "/images/rumahAdat/jogloJawaTimur.jpg",
      clickEvent: changeImage2,
    },
    {
      image: "/images/rumahAdat/keratonJakarta.jpg",
      clickEvent: changeImage3,
    },
    {
      image: "/images/rumahAdat/badui.jpg",
      clickEvent: changeImage4,
    },
    {
      image: "/images/rumahAdat/gadang.jpg",
      clickEvent: changeImage5,
    },
    {
      image: "/images/rumahAdat/honai.jpg",
      clickEvent: changeImage6,
    },
    {
      image: "/images/rumahAdat/musalaki.webp",
      clickEvent: changeImage7,
    },
    {
      image: "/images/rumahAdat/panjang.jpg",
      clickEvent: changeImage8,
    },
    {
      image: "/images/rumahAdat/rakit.jpg",
      clickEvent: changeImage9,
    },
    {
      image: "/images/rumahAdat/sunda.jpg",
      clickEvent: changeImage10,
    },
  ];

  return (
    <>
      <section className="mt-20">
        <div className="md:flex gap-10 items-center mb-10">
          <div className="shadow py-4 w-[100px] text-center rounded bg-emerald-500 text-white">
            <FaHome className="mx-auto" size={30} />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold md:text-3xl text-2xl mb-3 md:mt-0 mt-5 dark:text-gray-100">
                RUMAH ADAT INDONESIA
              </h2>
              <p className="xl:w-[700px] md:w-[500px] w-full dark:text-gray-300 text-gray-700 md:text-sm text-[12px]">
                Indonesia, dengan 34 rumah adat dari setiap provinsi,
                memancarkan keberagaman budaya dan menjadi karya seni yang
                memperkaya warisan tradisional.
              </p>
            </div>
          </div>
        </div>
        <hr className="dark:border-emerald-900" />
        <div className="grid lg:grid-cols-2 mt-5 items-center gap-20 mb-10">
          <div className="lg:order-1 order-2">
            <h4
              id="rumahAdatName"
              className="md:text-2xl text-xl font-bold dark:text-gray-200"
            >
              RUMAH ADAT ACEH
            </h4>
            <p
              id="rumahAdatDesc"
              className="md:w-[90%] mt-3 dark:text-gray-300 text-gray-700 md:text-base text-sm"
            >
              Rumah Aceh atau yang lebih dikenal dengan nama "Rumoh Aceh"
              merupakan rumah adat dari suku Aceh. Rumah ini bertipe rumah
              panggung dengan 3 bagan utama dan 1 bagian tambahan. Tiga bagian
              utama dari rumah Aceh yaitu seuramoë keuë, seuramoë teungoh dan
              seuramoë likôt. Sedangkan 1 bagian tambahannya yaitu rumoh dap
            </p>
          </div>
          <div className="lg:order-2 order-1">
            <img
              id="rumahAdatImage"
              src="/images/rumahAdat/aceh.png"
              alt="rumah adat"
              className="w-full h-[400px] object-cover rounded"
            />
          </div>
        </div>

        <ReactCardSlider slides={slides} />
      </section>
    </>
  );
}
