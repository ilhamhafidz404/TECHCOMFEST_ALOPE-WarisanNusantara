import { FaHome, FaLanguage } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiHeartInside, GiMusicalScore } from "react-icons/gi";
import { MdOutlinePiano } from "react-icons/md";

export default function IndonesiaKaya() {
  return (
    <>
      <section className="grid lg:grid-cols-2 gap-10 py-7 mt-20 place-items-center">
        <div>
          <h2 className="font-bold md:text-3xl text-xl mb-3 dark:text-gray-100">
            INDONESIA KAYA AKAN BUDAYA DAN KEBERAGAMAN-NYA
          </h2>
          <p className="dark:text-gray-300 text-gray-700 md:text-base text-[12px]">
            Indonesia adalah negara yang kaya akan budaya dan keberagaman. Dari
            Sabang sampai Merauke, setiap daerah memiliki warisan budaya yang
            unik dan beragam. Keberagaman ini mencakup bahasa, adat istiadat,
            seni, dan kuliner yang membuat Indonesia begitu istimewa.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-7">
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-red-500 hover:bg-red-500 hover:text-white duration-500 cursor-pointer dark:text-gray-200">
              <FaLanguage className="mx-auto" size={30} />
              <h6 className="mt-3 md:text-base text-sm">BAHASA</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-indigo-500 hover:bg-indigo-500 hover:text-white duration-500 cursor-pointer dark:text-gray-200">
              <MdOutlinePiano className="mx-auto" size={30} />
              <h6 className="mt-3 md:text-base text-sm">ALAT MUSIK</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-emerald-500 hover:bg-emerald-500 hover:text-white duration-500 cursor-pointer dark:text-gray-200">
              <FaHome className="mx-auto" size={30} />

              <h6 className="mt-3 md:text-base text-sm">RUMAH ADAT</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-white duration-500 cursor-pointer dark:text-gray-200">
              <GiHeartInside className="mx-auto" size={30} />
              <h6 className="mt-3 md:text-base text-sm">SENI TARI</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-purple-500 hover:bg-purple-500 hover:text-white duration-500 cursor-pointer dark:text-gray-200">
              <GiMusicalScore className="mx-auto" size={30} />
              <h6 className="mt-3 md:text-base text-sm">LAGU DAERAH</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-orange-500 hover:bg-orange-500 hover:text-white duration-500 cursor-pointer dark:text-gray-200">
              <FaBowlFood className="mx-auto" size={30} />
              <h6 className="mt-3 md:text-base text-sm">MAKANAN KHAS</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
