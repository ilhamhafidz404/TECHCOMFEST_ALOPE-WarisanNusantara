import { useEffect, useState } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";

import content from "./../data/content.json";
import { Link } from "react-router-dom";
import DarkNavbar from "../layouts/darkNavbar";

export default function DetailRagamTarian(language: any) {
  const [lang, setLang] = useState("ID");

  useEffect(() => {
    setLang(language.language);
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DarkNavbar />

      <div className="grid lg:grid-cols-5 pt-20 pb-10 md:px-20 px-5 mb-8 items-center bg-gray-100 dark:bg-gray-950 relative">
        <span className="h-full lg:w-[700px] w-full absolute right-0 lg:bg-gradient-to-l bg-gradient-to-b from-purple-500/70 to-red-500/0"></span>
        <div className="lg:col-span-3 order-2 lg:order-1 relative z-10 lg:text-left text-center">
          <p className="font-semibold mb-2 text-purple-500 md:md:text-base text-[13px] text-sm">
            TARIAN
          </p>
          <h1 className="font-bold md:text-3xl text-xl mb-8 text-gray-900 dark:text-gray-200">
            JAIPONG <br />
            TARIAN DAERAH JAWA BARAT
          </h1>
          <p className="mr-3 md:text-sm text-[12px] text-gray-800 dark:text-gray-300">
            Tarian ini terkenal dengan irama yang dinamis dan gerakan yang
            energetik
          </p>
        </div>
        <div className="py-8 lg:col-span-2 relative z-10 lg:order-2 order-1">
          <img
            src="/images/tarian/jaipong.jpg"
            className="w-full h-[350px] rounded object-cover"
            alt="seren taun"
          />
        </div>
      </div>

      <main className="grid lg:grid-cols-3 md:px-20 px-5 gap-20 mt-20 mb-20">
        <div className="lg:col-span-2 text-gray-800 dark:text-gray-200">
          <p className="md:text-base text-[13px] mb-10 leading-8">
            Tari Jaipong adalah tarian tradisional yang berasal dari Jawa Barat,
            Indonesia. Tarian ini terkenal dengan irama yang dinamis dan gerakan
            yang energetik. Jaipong sering dipentaskan dalam berbagai acara
            budaya, upacara adat, dan perayaan masyarakat di Jawa Barat.
          </p>

          <p className="md:text-base text-[13px] mb-10 leading-8">
            Sejarah Jaipong dimulai pada tahun 1960-an, ketika seorang seniman
            bernama Gugum Gumbira menciptakan tarian ini sebagai bentuk ekspresi
            seni baru yang menggabungkan elemen-elemen tradisional Sunda dengan
            unsur-unsur modern. Jaipong berkembang pesat dan menjadi bagian
            penting dari warisan budaya Jawa Barat.
          </p>

          <p className="md:text-base text-[13px] mb-10 leading-8">
            Gerakan Jaipong terinspirasi oleh kehidupan sehari-hari, termasuk
            aktivitas pertanian, kehidupan pedesaan, dan ekspresi kegembiraan.
            Penari Jaipong menggunakan gerakan tubuh, tangan, dan kaki yang
            dinamis untuk mengekspresikan berbagai nuansa dan emosi melalui
            tarian ini.
          </p>

          <p className="md:text-base text-[13px] mb-10 leading-8">
            Tarian Jaipong sering diiringi oleh musik tradisional Sunda, seperti
            gamelan dan kendang. Instrumen-instrumen ini memberikan nuansa khas
            yang mendukung keindahan gerakan tari Jaipong. Musik dan tari saling
            melengkapi, menciptakan pengalaman seni yang memukau bagi penonton.
          </p>

          <p className="md:text-base text-[13px] mb-10 leading-8">
            Jaipong bukan hanya tarian semata, tetapi juga sebuah bentuk seni
            yang merayakan keindahan dan keberagaman budaya Indonesia. Tarian
            ini menjadi simbol kebanggaan masyarakat Jawa Barat dan terus
            dilestarikan sebagai bagian tak terpisahkan dari identitas budaya
            Indonesia.
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

      <section className="lg:grid hidden grid-cols-3 gap-10 px-20 mt-10">
        <div className="col-span-3">
          <h3 className="text-2xl inline-block font-semibold transition-all hover:pr-3 border-b-4 border-purple-500 dark:text-gray-200">
            TARIAN LAINNYA
          </h3>
        </div>
        <div>
          <img
            src="/images/festivalbali.jpeg"
            alt="news1"
            className="h-[250px] object-cover w-full rounded"
          />
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
            {lang === "ID" ? "Festival Bali Arts" : "Bali Arts Festival"}
          </h3>
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
            {lang === "ID"
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
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
            {lang === "ID"
              ? "Festival Dalang Cilik"
              : "'Dalang Cilik' Festival"}
          </h3>
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
            {lang === "ID"
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
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
            {lang === "ID" ? "Festival Babarit" : "Babarit Festival"}
          </h3>
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
            {lang === "ID"
              ? content.news.sub.sub3.id
              : content.news.sub.sub3.en}
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
