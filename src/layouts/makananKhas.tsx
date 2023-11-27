import React from "react";
import { FaBowlFood } from "react-icons/fa6";

export default function MakananKhas() {
  return (
    <>
      <section className="mt-20">
        <div className="md:flex gap-10 items-center mb-10">
          <div className="shadow py-4 w-[100px] text-center rounded bg-orange-500 text-white">
            <FaBowlFood className="mx-auto" size={30} />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold text-3xl mb-3 md:mt-0 mt-5 dark:text-gray-100">
                MAKANAN KHAS DAERAH INDONESIA
              </h2>
              <p className="xl:w-[700px] md:w-[500px] w-full dark:text-gray-300 text-gray-700">
                Indonesia dengan kekayaan budaya yang luar biasa memiliki lebih
                dari 439 lagu tradisional. Setiap lagu menceritakan kisah unik
                dan memikat, menjadi simbol keanekaragaman seni dan warisan
                budaya yang memperkaya bangsa ini.
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
        <div className="mt-8 ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mr-4">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/gudeg.jpeg"
              alt="Card Image 1"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Gudeg</div>
              <p className="text-gray-700 text-base">DIY Yogyakarta</p>

              <a
                href="#"
                className="block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/karedok.jpeg"
              alt="Card Image 2"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Karedok</div>
              <p className="text-gray-700 text-base">Jawa Barat</p>

              <a
                href="#"
                className="block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/keraktelor.jpg"
              alt="Card Image 3"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Kerak Telor</div>
              <p className="text-gray-700 text-base">DKI Jakarta</p>

              <a
                href="#"
                className="block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/mieaceh.jpg"
              alt="Card Image 4"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Mie Aceh</div>
              <p className="text-gray-700 text-base">Aceh Darrussalam</p>

              <a
                href="#"
                className="block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/papeda.jpg"
              alt="Card Image 5"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Papeda</div>
              <p className="text-gray-700 text-base">Papua</p>

              <a
                href="#"
                className="block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/pempek.jpg"
              alt="Card Image 6"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Pempek</div>
              <p className="text-gray-700 text-base">Palembang</p>

              <a
                href="#"
                className="block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="./images/card/rendang.jpg"
              alt="Card Image "
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl">Rendang</div>
              <p className="text-gray-700 text-base">Sumatra Barat</p>

              <a
                href="#"
                className="block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden !h-[332px]">
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
              className="block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
