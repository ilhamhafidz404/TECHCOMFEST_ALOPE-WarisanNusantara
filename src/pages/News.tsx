import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function News() {
  return (
    <>
      <header className="container mx-auto grid grid-cols-4 gap-10 pt-20">
        <div
          className="col-span-3 h-[600px] bg-cover bg-center relative z-10 flex items-end p-10 after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:-z-10"
          style={{
            backgroundImage:
              "url(" + "https://picsum.photos/id/237/2000/900" + ")",
          }}
        >
          <div className="w-[80%]">
            <h6 className="text-emerald-500 mb-3 font-semibold">
              RAGAM BUDAYA
            </h6>
            <h2 className="text-3xl font-bold text-white ">
              UPACARA SEREN TAUN DI CIGUGUR UNTUK MENSYUKURI HASIL PANEN
            </h2>
            <p className="text-gray-200 mt-3 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              praesentium ratione commodi at quibusdam ipsa cum reiciendis
              tempore, error a fugiat eum impedit et doloribus qui omnis nihil
              aspernatur repudiandae?
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://picsum.photos/id/237/2000/900"
              className="w-full h-[250px] rounded object-cover"
            />
          </div>
          <br />
          <div className="my-5">
            <small className="text-red-500">Indonesia Kaya</small>
            <h5 className="font-bold text-2xl">Judul Artikel</h5>
          </div>
          <div className="my-5">
            <small className="text-indigo-500">Indonesia Kaya</small>
            <h5 className="font-bold text-2xl">Judul Artikel</h5>
          </div>
          <div className="my-5">
            <small className="text-yellow-500">Indonesia Kaya</small>
            <h5 className="font-bold text-2xl">Judul Artikel</h5>
          </div>
        </div>
      </header>

      <main className="mx-auto container mt-20">
        <section>
          <div className="grid grid-cols-4 gap-10">
            <div className="col-span-3">
              <div className="flex justify-between items-center mb-5">
                <h2>TRENDING</h2>
                <a href="">View More</a>
              </div>
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <img src="https://picsum.photos/id/237/2000/900" alt="" />
                  <h3 className="text-xl font-bold mt-2">Judul Artikel</h3>
                </div>
                <div>
                  <img src="https://picsum.photos/id/237/2000/900" alt="" />
                  <h3 className="text-xl font-bold mt-2">Judul Artikel</h3>
                </div>
                <div>
                  <img src="https://picsum.photos/id/237/2000/900" alt="" />
                  <h3 className="text-xl font-bold mt-2">Judul Artikel</h3>
                </div>
              </div>
            </div>
            <div className="border p-10 relative">
              <div className="bg-purple-500 w-[50px] h-[50px] text-white flex items-center justify-center absolute top-0 left-[20px] -translate-y-1/2">
                <FaEnvelope size={20} />
              </div>
              <h3 className="mb-5 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis,
              </h3>
              <input
                type="text"
                className="border w-full py-3 px-3"
                placeholder="Email Address"
              />
              <button className="bg-purple-500 px-5 py-2 rounded-full text-white mt-5">
                Subscribe
              </button>
            </div>
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
