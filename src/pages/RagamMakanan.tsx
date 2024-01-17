import { useEffect, useState } from "react";

// icons
import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router-dom";

import foods from "./../data/foods.json";
import { FaSearch } from "react-icons/fa";

interface FoodItem {
  name: string;
  from: string;
  image: string;
}

export default function RagamMakanan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filterSearch, setFilterSearch] = useState("");
  const [filteredData, setFilteredData] = useState<FoodItem[]>([]);

  useEffect(() => {
    setFilteredData(
      foods.filter((item) =>
        item.name.toLowerCase().includes(filterSearch.toLowerCase())
      )
    );
  }, [filterSearch]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <main className="lg:px-20 md:px-10 px-5 dark:bg-black">
        <h1 className="md:flex gap-3 text-center justify-center items-center font-bold md:text-3xl text-2xl dark:text-gray-200">
          <span className="bg-orange-500 w-[50px] h-[50px] flex items-center justify-center text-white rounded-full md:mx-0 mx-auto">
            <FaBowlFood size={30} />
          </span>
          RAGAM MAKANAN KHAS
        </h1>

        <div className="flex items-center justify-center my-5">
          <div className="relative mb-10">
            <input
              type="text"
              className="border bg-gray-200 dark:border-gray-900 dark:bg-gray-800 py-2 pr-5 pl-10 rounded md:w-[500px] w-full"
              placeholder="Cari Makanan"
              onChange={(e) => setFilterSearch(e.target.value)}
            />
            <FaSearch className="absolute top-1/2 -translate-y-1/2 left-[10px] dark:text-gray-300" />
          </div>
        </div>

        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {filteredData
            ? filteredData.map((food) => (
                <div className="h-[300px] relative rounded overflow-hidden">
                  <Link to={"/ragam-indonesia/makanan/detail"}>
                    <img
                      src={`./../images/makanan/${food.image}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </Link>
                  <div className="absolute z-10 w-[90%] left-1/2 -translate-x-1/2 dark:bg-gray-900 bg-white p-5 rounded bottom-[10px] text-center">
                    <span className="bg-orange-500 absolute left-1/2 -translate-x-1/2 -top-[10px] text-white px-5 rounded py-1 text-sm">
                      {food.from}
                    </span>
                    <h3 className="mt-3 font-bold dark:text-gray-200">
                      {food.name}
                    </h3>
                    <small className="text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                    </small>
                  </div>
                </div>
              ))
            : foods.map((food) => (
                <div className="h-[300px] relative rounded overflow-hidden">
                  <Link to={"/ragam-indonesia/makanan/detail"}>
                    <img
                      src={`./../images/makanan/${food.image}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </Link>
                  <div className="absolute z-10 w-[90%] left-1/2 -translate-x-1/2 dark:bg-gray-900 bg-white p-5 rounded bottom-[10px] text-center">
                    <span className="bg-orange-500 absolute left-1/2 -translate-x-1/2 -top-[10px] text-white px-5 rounded py-1 text-sm">
                      {food.from}
                    </span>
                    <h3 className="mt-3 font-bold dark:text-gray-200">
                      {food.name}
                    </h3>
                    <small className="text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                    </small>
                  </div>
                </div>
              ))}
        </section>
      </main>

      <div className="flex gap-1 justify-center mt-10">
        <a
          href="#"
          className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-orange-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-orange-400"
        >
          &laquo;
        </a>
        <a
          href="#"
          className="text-white bg-orange-500 py-1 md:px-4 px-3 md:text-base text-sm rounded"
        >
          1
        </a>
        <a
          href="#"
          className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-orange-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-orange-400"
        >
          2
        </a>
        <a
          href="#"
          className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-orange-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-orange-400"
        >
          3
        </a>
        <a
          href="#"
          className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-orange-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-orange-400"
        >
          4
        </a>
        <a
          href="#"
          className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-orange-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-orange-400"
        >
          5
        </a>
        <a
          href="#"
          className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-orange-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-orange-400"
        >
          6
        </a>
        <a
          href="#"
          className="text-black py-1 md:px-4 px-3 md:text-base text-sm rounded hover:text-white hover:bg-orange-400 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-orange-400"
        >
          &raquo;
        </a>
      </div>

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
            to={"/subscription"}
            className="bg-white md:px-7 px-5 md:py-3 py-2 md:text-base text-sm border-2 border-white rounded-full text-red-500 font-semibold hover:bg-transparent hover:text-white"
          >
            Subscription
          </Link>
        </div>
      </section>
    </>
  );
}
