import { useEffect, useState } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";

import content from "./../data/content.json";
import { Link } from "react-router-dom";

export default function DetailRagamMakanan(language: any) {
  const [lang, setLang] = useState("ID");

  useEffect(() => {
    setLang(language.language);
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-5 pt-20 pb-10 md:px-20 px-5 mb-8 items-center bg-gray-100 dark:bg-gray-950 relative">
        <span className="h-full lg:w-[700px] w-full absolute right-0 lg:bg-gradient-to-l bg-gradient-to-b from-orange-500/70 to-red-500/0"></span>
        <div className="lg:col-span-3 order-2 lg:order-1 relative z-10 lg:text-left text-center">
          <p className="font-semibold mb-2 text-orange-500 md:md:text-base text-[13px] text-sm">
            MAKANAN
          </p>
          <h1 className="font-bold md:text-3xl text-xl mb-8 text-gray-900 dark:text-gray-200">
            KAREDOK <br />
            MAKANAN KHAS DARI JAWA BARAT
          </h1>
          <p className="mr-3 md:text-sm text-[12px] text-gray-800 dark:text-gray-300">
            <span className="text-orange-500 font-bold">Bahan utama</span>:
            mentimun, taoge, kol, kacang panjang, ubi, labu siam <br /> daun
            kemangi, dan terong atau leunca.
          </p>
        </div>
        <div className="py-8 lg:col-span-2 relative z-10 lg:order-2 order-1">
          <img
            src="/images/makanan/karedok.jpeg"
            className="w-full h-[350px] rounded object-cover"
            alt="karedok"
          />
        </div>
      </div>

      <main className="grid lg:grid-cols-3 md:px-20 px-5 gap-20 mt-20 mb-20">
        <div className="lg:col-span-2 text-gray-800 dark:text-gray-200">
          <p className="md:text-base text-[13px] mb-10 leading-8">
            Karedok adalah hidangan khas Jawa Barat yang terkenal dengan
            kelezatan dan keunikannya. Terdiri dari aneka sayuran segar seperti
            kacang panjang, tauge, timun, dan kubis yang dicampur dengan bumbu
            kacang pedas. Hidangan ini sering disajikan sebagai lalapan atau
            bisa juga sebagai sambal untuk nasi. Karedok tidak hanya menggoda
            lidah dengan cita rasa pedas dan gurih, tetapi juga memberikan
            sensasi kesegaran dari kecrispyan sayuran mentah yang digunakan.
          </p>

          <p className="md:text-base text-[13px] mb-10 leading-8">
            Proses pembuatan Karedok dimulai dengan mencuci bersih sayuran yang
            akan digunakan. Setelah itu, sayuran dipotong kecil-kecil sesuai
            selera. Bumbu kacang yang menyertai Karedok terbuat dari kacang
            tanah yang digiling halus, dicampur dengan cabai, terasi, gula,
            garam, dan air asam. Semua bahan ini kemudian dicampur rata dengan
            sayuran yang telah dipersiapkan.
          </p>

          <p className="md:text-base text-[13px] mb-10 leading-8">
            Keunikan Karedok tidak hanya terletak pada rasa dan tata cara
            penyajiannya, tetapi juga dalam nilai tradisionalnya. Hidangan ini
            mewakili keberagaman sayuran lokal dan kearifan lokal dalam
            mengolahnya. Karedok adalah bukti dari kekayaan kuliner Indonesia
            yang memadukan cita rasa tinggi dengan nilai-nilai tradisional.
          </p>

          <p className="md:text-base text-[13px] mb-10 leading-8">
            Karedok sering dihidangkan dalam acara-acara spesial dan merupakan
            favorit di banyak rumah makan dan warung di Jawa Barat. Kombinasi
            sayuran segar, bumbu kacang yang khas, dan citarasa yang unik
            membuat Karedok menjadi hidangan yang menarik untuk dinikmati oleh
            pecinta kuliner.
          </p>

          <p className="md:text-base text-[13px] mb-10 leading-8">
            Sebagai warisan kuliner tradisional, Karedok tidak hanya memberikan
            pengalaman kuliner yang lezat, tetapi juga menjadi bagian dari
            identitas budaya Jawa Barat yang patut dilestarikan dan diapresiasi.
            Menikmati Karedok bukan hanya soal rasa, tetapi juga menghargai
            sejarah dan keberlanjutan warisan kuliner Indonesia.
          </p>
        </div>
        <div>
          <div className="bg-gray-50 dark:bg-gray-950 p-10 rounded">
            <img
              src="/images/avatar.png"
              className="w-[70px] rounded"
              alt="avatar"
            />
            <h1 className="font-bold mt-4 text-gray-800 dark:text-gray-300">
              Ilham Hafidz
            </h1>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">
              Ilham Hafidz merupakan penulis aktif mengenai kebudayaan indonesia
              pada website Warisan Nusantara.
            </p>
            <div className="mt-12">
              <span className="bg-red-500/20 text-red-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                UPACARA
              </span>
              <span className="bg-yellow-500/20 text-yellow-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                INDONESIA DIMATA DUNIA
              </span>
              <br />
              <span className="bg-emerald-500/20 text-emerald-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                MUSIK & LAGU
              </span>
              <span className="bg-indigo-500/20 text-indigo-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                FUN EVENT
              </span>
              <span className="bg-purple-500/20 text-purple-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                MAKANAN
              </span>
            </div>
          </div>
        </div>
      </main>

      <hr className="w-[90%] mx-auto dark:border-gray-900" />

      <section className="lg:grid hidden grid-cols-4 gap-10 px-20 mt-10">
        <div className="col-span-4">
          <h3 className="text-2xl inline-block font-semibold transition-all hover:pr-3 border-b-4 border-orange-500 dark:text-gray-200">
            MAKANAN KHAS LAINNYA
          </h3>
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/makanan/gudeg.jpeg"
            alt="makanan1"
            className="h-[250px] object-cover w-full rounded"
          />
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">Gudeg</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
            Makanan Khas DIY Yogyakarta
          </p>
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/makanan/pempek.jpg"
            alt="makanan2"
            className="h-[250px] object-cover w-full rounded"
          />
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">Pempek</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
            Makanan Khas Palembang
          </p>
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/makanan/mieaceh.jpg"
            alt="makanan2"
            className="h-[250px] object-cover w-full rounded"
          />
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
            Mie Aceh
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
            Makanan Khas Aceh Darussalam
          </p>
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/makanan/papeda.jpg"
            alt="makanan2"
            className="h-[250px] object-cover w-full rounded"
          />
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">Papeda</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
            Makanan Khas Papua
          </p>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="lg:px-20 md:px-10 px-3 md:py-14 py-10 lg:flex lg:justify-between lg:items-center bg-gradient-to-r from-red-500/90 to-red-400/90 text-white relative overflow-hidden">
        <span
          id="blink"
          className="w-[1000px] h-[1000px] rounded-full absolute -rotate-[60deg]"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(255, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <div className="relative z-10">
          <h3 className="font-bold md:text-2xl text-xl lg:text-left text-center">
            LOGIN UNTUK MENDAPATKAN NOTIFIKASI BERITA BARU
          </h3>
          <p className="text-gray-200 mt-2 md:md:text-base text-[13px] text-sm md:mb-0 mb-10 lg:text-left text-center">
            Setiap ada berita, event serta konten baru akan diberitahu lewat
            email
          </p>
        </div>
        <div className="relative z-10 lg:mt-0 mt-10 flex justify-center">
          <Link
            to={"/subcription"}
            className="bg-white md:px-7 px-5 md:py-3 py-2 md:text-base text-sm border-2 border-white rounded-full text-red-500 font-semibold hover:bg-transparent hover:text-white"
          >
            Subscription
          </Link>
        </div>
      </section>
    </>
  );
}
