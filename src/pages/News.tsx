import React from "react";
import {
  FaArrowRight,
  FaCalendar,
  FaEnvelope,
  FaFire,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function News() {
  return (
    <>
      <header className=" mt-5 mx-auto grid lg:grid-cols-4 gap-10 pt-20 lg:px-20 md:px-5">
        <span
          className="w-[1000px] h-[1000px] rounded-full absolute -left-[500px] -top-[500px] -rotate-[60deg]"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(239, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <div
          className="lg:col-span-3 lg:h-[600px] md:h-[400px] bg-cover relative z-10 flex items-end p-10 after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:-z-10 bg-bottom"
          style={{
            backgroundImage: "url(" + "/images/news/serenTaun.jpg" + ")",
          }}
        >
          <div className="w-[80%]">
            <h6 className="text-red-500 mb-3 font-semibold">UPACARA</h6>
            <h2 className="lg:text-3xl text-2xl font-bold text-white ">
              UPACARA SEREN TAUN DI CIGUGUR UNTUK MENSYUKURI HASIL PANEN
            </h2>
            <p className="text-gray-200 mt-3 text-sm lg:block hidden">
              Seren Taun adalah upacara adat panen padi masyarakat Sunda yang
              dilakukan setiap tahun. Upacara ini berlangsung khidmat dan
              semarak di berbagai desa adat Sunda. Upacara adat sebagai syukuran
              masyarakat agraris.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 grid-cols-2 lg:gap-0 gap-10">
          <div>
            <div className="lg:h-[250px] h-[230px] after:rounded relative after:ontent-[''] after:bg-black/40 after:absolute after:inset-0">
              <img
                src="/images/news/borobudur.jpg"
                className="w-full lg:h-[250px] h-[230px] rounded object-cover"
              />
            </div>
          </div>
          {/* <br /> */}
          <div>
            <div className="lg:my-5 my-3">
              <small className="text-red-500">UPACARA</small>
              <h5 className="font-semibold lg:text-2xl text-base text-gray-800 dark:text-gray-200">
                Peringati 32 Tahun Candi Borobudur
              </h5>
            </div>
            <div className="lg:my-5 my-3">
              <small className="text-indigo-500">FUN EVENT</small>
              <h5 className="font-semibold lg:text-2xl tex-base text-gray-800 dark:text-gray-200">
                2.000 Pelari Meriahkan "Borobudur Fun Run"
              </h5>
            </div>
            <div className="lg:my-5 my-3">
              <small className="text-yellow-500 uppercase">
                Indonesia Dimata Dunia
              </small>
              <h5 className="font-semibold lg:text-2xl tex-base text-gray-800 dark:text-gray-200">
                Candi Borobudur Situs Warisan Dunia
              </h5>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto  mt-20 lg:px-20 px-10">
        <section>
          <div className="grid lg:grid-cols-4 gap-10">
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-5">
                <span className="flex gap-2 items-center text-red-500 text-xl font-semibold">
                  <FaFire />
                  <h2>TRENDING</h2>
                </span>
                <span className="flex items-center gap-2 text-sm hover:underline dark:text-gray-200">
                  <a href="">View More</a>
                  <FaArrowRight size={13} />
                </span>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
                <div>
                  <img
                    src="/images/news/unesco.jpeg"
                    alt="subheader1"
                    className="h-[200px] object-cover"
                  />
                  <h3 className="font-bold mt-2 dark:text-gray-200">
                    Bahasa Indonesia Menjadi Bahasa Resmi ke-10 di UNIESCO
                  </h3>
                </div>
                <div>
                  <img
                    src="/images/news/pertunjukkan-budaya-indonesia-pukau-warga-turki.jpeg"
                    alt="subheader2"
                    className="h-[200px] object-cover"
                  />
                  <h3 className="font-bold mt-2 dark:text-gray-200">
                    Pertunjukkan Budaya Indonesia Pukau Warga Turki
                  </h3>
                </div>
                <div className="lg:block hidden">
                  <img
                    src="/images/news/borobudur.jpg"
                    alt="subheader3"
                    className="h-[200px] object-cover"
                  />
                  <h3 className="font-bold mt-2 dark:text-gray-200">
                    Candi Borobudur Situs Warisan Dunia
                  </h3>
                </div>
              </div>
            </div>
            <div className="border p-7 relative dark:border-gray-800">
              <div className="bg-red-500 w-[50px] h-[50px] text-white flex items-center justify-center absolute top-0 left-[20px] lg:-translate-y-1/2">
                <FaEnvelope size={20} />
              </div>
              <h3 className="mb-5 lg:mt-6 mt-12 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis,
              </h3>
              <input
                type="text"
                className="border w-full py-3 px-3 dark:bg-gray-800 dark:border-gray-900 dark:text-gray-200"
                placeholder="Email Address"
              />
              <button className="bg-red-500 px-10 py-2 rounded-full text-white mt-5 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <hr className="my-10 dark:border-gray-800" />
        <section className="grid lg:grid-cols-4 gap-20 mt-10">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-5 items-center lg:gap-10 gap-5 mb-5">
              <div className="col-span-2">
                <img
                  src="/images/news/pertunjukkan-budaya-indonesia-pukau-warga-turki.jpeg"
                  className="w-full h-[250px] rounded object-cover"
                />
              </div>
              <div className="col-span-3">
                <small className="text-yellow-500 font-semibold">
                  INDONESIA DI MATA DUNIA
                </small>
                <h3 className="text-xl font-bold mb-3 dark:text-gray-200">
                  Pertunjukkan Budaya Indonesia Pukau Warga Turki{" "}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 lg:text-base text-sm">
                  Acara yang dimulai pada jam 6 sore hingga 10 malam waktu Turki
                  menyita perhatian ratusan penonton dari berbagai kalangan,
                  termasuk dosen-dosen dari Sakarya University, mahasiswa Turki,
                  mahasiswa Indonesia, dan sejumlah tamu undangan.
                </p>

                <div className="mt-5 flex gap-10">
                  <p className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 items-center">
                    <FaMapMarkedAlt />
                    <span>Sakarya University, Turki</span>
                  </p>
                  <p className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 items-center">
                    <FaCalendar />
                    <span>17 Oktober 2023</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 items-center lg:gap-10 gap-5 mb-5">
              <div className="col-span-2">
                <img
                  src="/images/news/gordang-sambilan.jpeg"
                  className="w-full h-[250px] rounded object-cover"
                />
              </div>
              <div className="col-span-3">
                <small className="text-emerald-500 font-semibold uppercase">
                  Musik dan Lagu
                </small>
                <h3 className="text-xl font-bold mb-3 dark:text-gray-200">
                  Fungsi Gordang Sambilan Sebelum Masyarakat Mandailing Kenal
                  Islam
                </h3>
                <p className="text-gray-700 dark:text-gray-300 lg:text-base text-sm">
                  Gordang Sambilan saat itu juga dipergunakan untuk menggelar
                  upacara mangido udan (meminta hujan) untuk mengatasi
                  kekeringan yang melanda di daerah tersebut.
                </p>

                <div className="mt-5 flex gap-10">
                  <p className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 items-center">
                    <FaMapMarkedAlt />
                    <span>Mandailing, Sumatra Utara</span>
                  </p>
                  <p className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 items-center">
                    <FaCalendar />
                    <span>17 Oktober 2023</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 items-center lg:gap-10 gap-5 mb-5">
              <div className="col-span-2">
                <img
                  src="/images/news/batik.jpg"
                  className="w-full h-[250px] rounded object-cover"
                />
              </div>
              <div className="col-span-3">
                <small className="text-purple-500 font-semibold">PAKAIAN</small>
                <h3 className="text-xl font-bold mb-3 dark:text-gray-200">
                  Hari Batik Nasional 2 Oktober, Mari Lebih Mengenal Batik
                </h3>
                <p className="text-gray-700 dark:text-gray-300 lg:text-base text-sm">
                  Batik merupakan salah satu jenis karya seni rupa yang
                  berkembang di Indonesia. Batik sendiri dipercaya sudah ada
                  sejak zaman Majapahit dan populer pada akhir abad XVIII atau
                  permulaan abad XIX.
                </p>

                <div className="mt-5 flex gap-10">
                  <p className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 items-center">
                    <FaMapMarkedAlt />
                    <span>Bandung, Jawa Barat</span>
                  </p>
                  <p className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 items-center">
                    <FaCalendar />
                    <span>17 Oktober 2023</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-1 justify-center mt-10">
              <a
                href="#"
                className="text-black py-1 px-4 rounded hover:text-white hover:bg-red-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-red-400"
              >
                &laquo;
              </a>
              <a href="#" className="text-white bg-red-500 py-1 px-4 rounded">
                1
              </a>
              <a
                href="#"
                className="text-black py-1 px-4 rounded hover:text-white hover:bg-red-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-red-400"
              >
                2
              </a>
              <a
                href="#"
                className="text-black py-1 px-4 rounded hover:text-white hover:bg-red-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-red-400"
              >
                3
              </a>
              <a
                href="#"
                className="text-black py-1 px-4 rounded hover:text-white hover:bg-red-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-red-400"
              >
                4
              </a>
              <a
                href="#"
                className="text-black py-1 px-4 rounded hover:text-white hover:bg-red-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-red-400"
              >
                5
              </a>
              <a
                href="#"
                className="text-black py-1 px-4 rounded hover:text-white hover:bg-red-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-red-400"
              >
                6
              </a>
              <a
                href="#"
                className="text-black py-1 px-4 rounded hover:text-white hover:bg-red-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-red-400"
              >
                &raquo;
              </a>
            </div>
          </div>
          <div className="lg:block hidden">
            <img
              src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-promo-potrait-banner-img.jpg"
              alt=""
            />
          </div>
        </section>
      </main>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="px-20 py-14 flex justify-between items-center bg-gradient-to-r from-red-500/90 to-red-400/90 text-white relative overflow-hidden">
        <span
          id="blink"
          className="w-[1000px] h-[1000px] rounded-full absolute -rotate-[60deg]"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(255, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <div className="relative z-10">
          <h3 className="font-bold text-2xl">
            LOGIN UNTUK MENDAPATKAN NOTIFIKASI BERITA BARU
          </h3>
          <p className="text-gray-200 mt-2">
            Setiap ada berita, event serta konten baru akan diberitahu lewat
            email
          </p>
        </div>
        <div className="relative z-10">
          <a href="">Registrasi Sekarang</a>
        </div>
      </section>
    </>
  );
}
