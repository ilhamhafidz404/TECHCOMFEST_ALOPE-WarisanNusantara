import React, { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { FaBowlFood, FaMapLocation } from "react-icons/fa6";

export default function MakananKhas() {
  const [modalDetail, setModalDetail] = useState(false);

  const [contentModal, setContentModal] = useState({
    title: "",
    body: "",
    resep: "",
    location: "",
    img: "",
  });

  return (
    <>
      <section className="mt-20 mb-20">
        <div className="flex items-center justify-between">
          <div className="md:flex gap-10 items-center mb-10">
            <div className="shadow py-4 w-[100px] text-center rounded bg-orange-500 text-white">
              <FaBowlFood className="mx-auto" size={30} />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold md:text-3xl text-xl mb-3 md:mt-0 mt-5 dark:text-gray-100">
                  MAKANAN KHAS DAERAH INDONESIA
                </h2>
                <p className="xl:w-[700px] md:w-[500px] w-full dark:text-gray-300 text-gray-700 md:text-sm text-[12px]">
                  Indonesia menawarkan ragam makanan khas dari setiap daerah.
                  Keberagaman ini mencerminkan kekayaan kuliner yang unik di
                  Indonesia.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <button className="px-5 text-sm py-2 rounded border text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
              Lihat Lebih Lengkap
            </button>
          </div>
        </div>
        <hr className="dark:border-orange-900" />
        <div className="mt-8 ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mr-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900/80">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/gudeg.jpeg"
              alt="Card Image 1"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl dark:text-gray-300">Gudeg</div>
              <p className="flex gap-2 items-center text-gray-700 dark:text-gray-400 text-sm">
                <FaMapLocation />
                DIY Yogyakarta
              </p>
            </div>
            <button
              onClick={() => {
                setModalDetail(true);
                setContentModal({
                  title: "Gudeg",
                  body: "Gudeg adalah hidangan khas Provinsi Daerah Istimewa Yogyakarta yang terbuat dari nangka muda yang dimasak dengan santan. Perlu waktu berjam-jam untuk membuat hidangan ini. Warna cokelat biasanya dihasilkan oleh daun jati yang dimasak bersamaan.",
                  resep:
                    "Nangka muda, santan, gula aren, cabai, aneka bumbu, ayam, telur, tempe (opsional)",
                  location: "DIY Yogyakarta",
                  img: "./images/card/gudeg.jpeg",
                });
              }}
              className="block w-full bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </button>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900/80">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/karedok.jpeg"
              alt="Card Image 2"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl dark:text-gray-300">
                Karedok
              </div>
              <p className="flex gap-2 items-center text-gray-700 dark:text-gray-400 text-sm">
                <FaMapLocation />
                Jawa Barat
              </p>
            </div>
            <button
              onClick={() => {
                setModalDetail(true);
                setContentModal({
                  title: "Karedok",
                  body: "Karedok adalah salah satu makanan khas Sunda di Indonesia. Karedok sekilas mirip dengan lotek. Karedok dibuat dengan bahan-bahan sayuran mentah.",
                  resep:
                    "mentimun, taoge, kol, kacang panjang, ubi, labu siam daun kemangi, dan terong atau leunca, sedangkan sausnya adalah bumbu kacang yang dibuat dari cabai merah, bawang putih, kencur, kacang tanah, air asam, gula kawung, garam, dan terasi.",
                  location: "Jawa Barat",
                  img: "./images/card/karedok.jpeg",
                });
              }}
              className="block w-full bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </button>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900/80">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/keraktelor.jpg"
              alt="Card Image 3"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl dark:text-gray-300">
                Kerak Telor
              </div>
              <p className="flex gap-2 items-center text-gray-700 dark:text-gray-400 text-sm">
                <FaMapLocation />
                DKI Jakarta
              </p>
            </div>
            <button
              onClick={() => {
                setModalDetail(true);
                setContentModal({
                  title: "Kerak Telor",
                  body: "Kerak telur adalah makanan asli daerah Jakarta (Betawi). Anda bisa menemukan kerak telor di sekitar Kota Tua, Jakarta Barat. Menurut sejarah, Kerak Telor sudah ada dari zaman kolonial Belanda, kerak telor diciptakan oleh masyarakat Betawi secara tak sengaja Pada tahun 1920-an.",
                  resep:
                    "Beras ketan putih, telur ayam atau bebek, ebi (udang kering yang diasinkan) yang disangrai kering ditambah bawang merah goreng, lalu diberi bumbu yang dihaluskan berupa kelapa sangrai, cabai merah, kencur, jahe, kunyit,sereh halus, merica butiran, garam dan gula pasir.",
                  location: "DKI Jakarta",
                  img: "./images/card/keraktelor.jpg",
                });
              }}
              className="block w-full bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </button>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900/80">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/mieaceh.jpg"
              alt="Card Image 4"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl dark:text-gray-300">
                Mie Aceh
              </div>
              <p className="flex gap-2 items-center text-gray-700 dark:text-gray-400 text-sm">
                <FaMapLocation />
                Aceh Darrussalam
              </p>
            </div>
            <button
              onClick={() => {
                setModalDetail(true);
                setContentModal({
                  title: "Mie Aceh",
                  body: "Mi aceh adalah masakan mi pedas khas Aceh di Indonesia. Mi aceh biasanya ditaburi dengan bawang goreng dan disajikan bersama emping, potongan bawang merah, mentimun, dan jeruk nipis. Mi aceh biasanya disajikan dalam tiga bentuk yaitu mi kuah, mi goreng basah, dan mi goreng kering.",
                  resep:
                    "Mi kuning tebal dengan irisan daging sapi, daging kambing atau makanan laut (udang dan cumi) disajikan dalam sup sejenis kari yang gurih dan pedas.",
                  location: "Aceh Darussalam",
                  img: "./images/card/mieaceh.jpg",
                });
              }}
              className="block w-full bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </button>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900/80">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/papeda.jpg"
              alt="Card Image 5"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl dark:text-gray-300">Papeda</div>
              <p className="flex gap-2 items-center text-gray-700 dark:text-gray-400 text-sm">
                <FaMapLocation />
                Papua
              </p>
            </div>
            <button
              onClick={() => {
                setModalDetail(true);
                setContentModal({
                  title: "Papeda",
                  body: "Papeda adalah makanan berupa bubur sagu khas Maluku dan Papua yang biasanya disajikan dengan ikan tongkol atau bubara yang dibumbui dengan kunyit. Papeda berwarna putih dan bertekstur lengket menyerupai lem dengan rasa yang tawar.Papeda merupakan makanan yang kaya serat, rendah kolesterol, dan cukup bernutrisi.",
                  resep:
                    "1/4 kg tepung tapioka, 15 sdm tepung terigu, 3 batang Bawang godong (iris cincang), 1 penyedap rasa, 1 garam secukupnya, secukupnya Air, 1 telor",
                  location: "Papua",
                  img: "./images/card/papeda.jpg",
                });
              }}
              className="block w-full bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </button>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900/80">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/pempek.jpg"
              alt="Card Image 6"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl dark:text-gray-300">Pempek</div>
              <p className="flex gap-2 items-center text-gray-700 dark:text-gray-400 text-sm">
                <FaMapLocation />
                Palembang
              </p>
            </div>
            <button
              onClick={() => {
                setModalDetail(true);
                setContentModal({
                  title: "Pempek",
                  body: "Pempek adalah makanan yang dibuat dari daging ikan yang digiling lembut yang dicampur tepung kanji atau tepung sagu, serta komposisi beberapa bahan lain seperti telur, bawang putih yang dihaluskan, penyedap rasa, dan garam. Pempek biasanya disajikan dengan kuah yang disebut cuko yang memiliki rasa asam, manis, dan pedas. Pempek merupakan makanan khas Palembang.",
                  resep:
                    "daging ikan giling, tepung kanji atau tepung sagu, serta telur",
                  location: "Palembang",
                  img: "./images/card/pempek.jpg",
                });
              }}
              className="block w-full bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </button>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900/80">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/rendang.jpg"
              alt="Card Image "
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl dark:text-gray-300">
                Rendang
              </div>
              <p className="flex gap-2 items-center text-gray-700 dark:text-gray-400 text-sm">
                <FaMapLocation />
                Sumatra Barat
              </p>
            </div>
            <button
              onClick={() => {
                setModalDetail(true);
                setContentModal({
                  title: "Rendang",
                  body: "Rendang adalah hidangan berbahan dasar daging yang dihasilkan dari proses memasak suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan. Proses memasaknya memakan waktu berjam-jam hingga yang tinggal hanyalah potongan daging berwarna hitam pekat dan dedak.",
                  resep: "Daging sapi, santan kelapa, cabai, bumbu",
                  location: "Sumatra Barat",
                  img: "./images/card/rendang.jpg",
                });
              }}
              className="block w-full bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </button>
          </div>
          <div className="max-w-sm rounded overflow-hidden !h-[325px]">
            <div className="grid grid-cols-2 gap-2">
              <img
                className="w-full h-[125px] object-cover"
                src="./images/card/gudeg.jpeg"
                alt="Card Image "
              />
              <img
                className="w-full h-[125px] object-cover"
                src="./images/card/papeda.jpg"
                alt="Card Image "
              />
              <img
                className="w-full h-[125px] object-cover"
                src="./images/card/rendang.jpg"
                alt="Card Image "
              />
              <img
                className="w-full h-[125px] object-cover"
                src="./images/card/pempek.jpg"
                alt="Card Image "
              />
            </div>
            <button className="block w-full border-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white text-center py-2 px-4 mt-4 rounded">
              Lihat Lainnya
            </button>
          </div>
        </div>
      </section>

      {modalDetail ? (
        <section className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-950 md:w-[500px] w-[95%] md:mx-0 mx-auto p-7 rounded relative">
            <button
              className="absolute right-0 top-0 m-5 dark:text-gray-200 hover:!text-orange-500"
              onClick={() => {
                setModalDetail(false);
              }}
            >
              <FaTimes />
            </button>
            <h1 className="text-2xl font-bold dark:text-gray-200">
              {" "}
              {contentModal.title}
            </h1>
            <hr className="my-3 dark:border-gray-700" />
            <div>
              <img
                src={contentModal.img}
                className="rounded h-[200px] object-cover w-full"
              />
              <p className="md:text-sm text-[13px] mt-5 dark:text-gray-300">
                {contentModal.body}
              </p>
              <p className="md:text-sm text-[13px] mt-5 dark:text-gray-300">
                <b className="text-orange-500">Bahan utama:</b>{" "}
                {contentModal.resep}
              </p>

              <hr className="my-5 dark:border-gray-700" />
              <div className="flex items-center justify-between">
                <p className="flex gap-2 items-center text-gray-700 dark:text-gray-400 text-sm">
                  <FaMapLocation />
                  {contentModal.location}
                </p>
                <button className="text-sm text-orange-500 flex items-center gap-2">
                  Detail Lainnya
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
