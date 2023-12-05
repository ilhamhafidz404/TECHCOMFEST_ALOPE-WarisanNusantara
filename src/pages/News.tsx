import React from "react";
import { FaArrowRight, FaCalendar, FaEnvelope, FaFire } from "react-icons/fa";

export default function News() {
  return (
    <>
      <header className="container mx-auto grid lg:grid-cols-4 gap-10 pt-20 lg:px-20 md:px-5">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              praesentium ratione commodi at quibusdam ipsa cum reiciendis
              tempore, error a fugiat eum impedit et doloribus qui omnis nihil
              aspernatur repudiandae?
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
              <h5 className="font-semibold lg:text-2xl text-base text-gray-800">
                Peringati 32 Tahun Candi Borobudur
              </h5>
            </div>
            <div className="lg:my-5 my-3">
              <small className="text-indigo-500">FUN EVENT</small>
              <h5 className="font-semibold lg:text-2xl tex-base text-gray-800">
                2.000 Pelari Meriahkan "Borobudur Fun Run"
              </h5>
            </div>
            <div className="lg:my-5 my-3">
              <small className="text-yellow-500 uppercase">
                Indonesia Dimata Dunia
              </small>
              <h5 className="font-semibold lg:text-2xl tex-base text-gray-800">
                Candi Borobudur Situs Warisan Dunia
              </h5>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto container mt-20 lg:px-20 px-10">
        <section>
          <div className="grid lg:grid-cols-4 gap-10">
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-5">
                <span className="flex gap-2 items-center text-red-500 text-xl font-semibold">
                  <FaFire />
                  <h2>TRENDING</h2>
                </span>
                <span className="flex items-center gap-2 text-sm hover:underline">
                  <a href="">View More</a>
                  <FaArrowRight size={13} />
                </span>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
                <div>
                  <img src="/images/news/unesco.jpeg" alt="" />
                  <h3 className="font-bold mt-2">
                    Bahasa Indonesia Menjadi Bahasa Resmi ke-10 di UNIESCO
                  </h3>
                </div>
                <div>
                  <img src="/images/news/unesco.jpeg" alt="" />
                  <h3 className="font-bold mt-2">
                    Bahasa Indonesia Menjadi Bahasa Resmi ke-10 di UNIESCO
                  </h3>
                </div>
                <div className="lg:block hidden">
                  <img src="/images/news/unesco.jpeg" alt="" />
                  <h3 className="font-bold mt-2">
                    Bahasa Indonesia Menjadi Bahasa Resmi ke-10 di UNIESCO
                  </h3>
                </div>
              </div>
            </div>
            <div className="border p-7 relative">
              <div className="bg-red-500 w-[50px] h-[50px] text-white flex items-center justify-center absolute top-0 left-[20px] lg:-translate-y-1/2">
                <FaEnvelope size={20} />
              </div>
              <h3 className="mb-5 lg:mt-6 mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis,
              </h3>
              <input
                type="text"
                className="border w-full py-3 px-3"
                placeholder="Email Address"
              />
              <button className="bg-red-500 px-10 py-2 rounded-full text-white mt-5 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <hr className="my-10" />
        <section className="grid grid-cols-4 gap-20 mt-10">
          <div className="col-span-3">
            <div className="grid grid-cols-5 items-center gap-10 mb-5">
              <div className="col-span-2">
                <img
                  src="/images/news/serenTaun.jpg"
                  className="w-full h-[250px] rounded object-cover"
                />
              </div>
              <div className="col-span-3">
                <small className="text-indigo-500 font-semibold">
                  TRADISI INDONESIA
                </small>
                <h3 className="text-xl font-bold mb-3">JUDUL ARTIKEL</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae exercitationem magni aut natus similique qui ad
                  voluptatum beatae veritatis iusto. Aliquam repellendus unde
                  molestiae necessitatibus soluta illo cum ea magnam!
                </p>

                <p className="flex gap-2 mt-5">
                  <FaCalendar />
                  <span>17 Oktober 2023</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 items-center gap-10 mb-5">
              <div className="col-span-2">
                <img
                  src="https://picsum.photos/id/237/2000/900"
                  className="w-full h-[250px] rounded object-cover"
                />
              </div>
              <div className="col-span-3">
                <small className="text-indigo-500 font-semibold">
                  TRADISI INDONESIA
                </small>
                <h3 className="text-xl font-bold mb-3">JUDUL ARTIKEL</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae exercitationem magni aut natus similique qui ad
                  voluptatum beatae veritatis iusto. Aliquam repellendus unde
                  molestiae necessitatibus soluta illo cum ea magnam!
                </p>

                <p className="flex gap-2 mt-5">
                  <FaCalendar />
                  <span>17 Oktober 2023</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 items-center gap-10 mb-5">
              <div className="col-span-2">
                <img
                  src="https://picsum.photos/id/237/2000/900"
                  className="w-full h-[250px] rounded object-cover"
                />
              </div>
              <div className="col-span-3">
                <small className="text-indigo-500 font-semibold">
                  TRADISI INDONESIA
                </small>
                <h3 className="text-xl font-bold mb-3">JUDUL ARTIKEL</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae exercitationem magni aut natus similique qui ad
                  voluptatum beatae veritatis iusto. Aliquam repellendus unde
                  molestiae necessitatibus soluta illo cum ea magnam!
                </p>

                <p className="flex gap-2 mt-5">
                  <FaCalendar />
                  <span>17 Oktober 2023</span>
                </p>
              </div>
            </div>
          </div>
          <div>
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
      <br />
      <br />
    </>
  );
}
