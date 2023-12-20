import React from "react";
import { FaBowlFood, FaMapLocation } from "react-icons/fa6";

export default function MakananKhas() {
  return (
    <>
      <section className="mt-20 mb-20">
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
            {/* <img
                src="https://react.dev/images/home/community/react_conf_nat.webp"
                className="object-cover w-[300px] h-[100px] object-center"
                alt=""
              /> */}
          </div>
        </div>
        <hr className="dark:border-orange-900" />
        <div className="mt-8 ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mr-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/gudeg.jpeg"
              alt="Card Image 1"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Gudeg</div>
              <p className="flex gap-2 items-center text-gray-700 text-sm">
                <FaMapLocation />
                DIY Yogyakarta
              </p>
            </div>
            <a
              href="#"
              className="block bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </a>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/karedok.jpeg"
              alt="Card Image 2"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Karedok</div>
              <p className="flex gap-2 items-center text-gray-700 text-sm">
                <FaMapLocation />
                Jawa Barat
              </p>
            </div>
            <a
              href="#"
              className="block bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </a>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/keraktelor.jpg"
              alt="Card Image 3"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Kerak Telor</div>
              <p className="flex gap-2 items-center text-gray-700 text-sm">
                <FaMapLocation />
                DKI Jakarta
              </p>
            </div>
            <a
              href="#"
              className="block bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </a>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/mieaceh.jpg"
              alt="Card Image 4"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Mie Aceh</div>
              <p className="flex gap-2 items-center text-gray-700 text-sm">
                <FaMapLocation />
                Aceh Darrussalam
              </p>
            </div>
            <a
              href="#"
              className="block bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </a>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/papeda.jpg"
              alt="Card Image 5"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Papeda</div>
              <p className="flex gap-2 items-center text-gray-700 text-sm">
                <FaMapLocation />
                Papua
              </p>
            </div>
            <a
              href="#"
              className="block bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </a>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/pempek.jpg"
              alt="Card Image 6"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Pempek</div>
              <p className="flex gap-2 items-center text-gray-700 text-sm">
                <FaMapLocation />
                Palembang
              </p>
            </div>
            <a
              href="#"
              className="block bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </a>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/rendang.jpg"
              alt="Card Image "
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Rendang</div>
              <p className="flex gap-2 items-center text-gray-700 text-sm">
                <FaMapLocation />
                Sumatra Barat
              </p>
            </div>
            <a
              href="#"
              className="block bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </a>
          </div>
          <div className="max-w-sm rounded overflow-hidden !h-[325px]">
            <div className="grid grid-cols-2 gap-2">
              <img
                className="w-full h-[125px] object-cover"
                src="./images/card/rendang.jpg"
                alt="Card Image "
              />
              <img
                className="w-full h-[125px] object-cover"
                src="./images/card/rendang.jpg"
                alt="Card Image "
              />
              <img
                className="w-full h-[125px] object-cover"
                src="./images/card/rendang.jpg"
                alt="Card Image "
              />
              <img
                className="w-full h-[125px] object-cover"
                src="./images/card/rendang.jpg"
                alt="Card Image "
              />
            </div>
            <a
              href="#"
              className="block bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-4 mt-4"
            >
              Detail
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
