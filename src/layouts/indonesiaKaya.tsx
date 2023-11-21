import { FaHome, FaLanguage } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiHeartInside, GiMusicalScore } from "react-icons/gi";
import { MdOutlinePiano } from "react-icons/md";

export default function IndonesiaKaya() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-10 py-7 mt-20 place-items-center md:px-0 px-10">
        <div>
          <h2 className="font-bold text-3xl mb-3">
            INDONESIA KAYA AKAN BUDAYA DAN KEBERAGAMAN-NYA
          </h2>
          <p>
            Indonesia adalah negara yang kaya akan budaya dan keberagaman. Dari
            Sabang sampai Merauke, setiap daerah memiliki warisan budaya yang
            unik dan beragam. Keberagaman ini mencakup bahasa, adat istiadat,
            seni, dan kuliner yang membuat Indonesia begitu istimewa.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-7">
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-red-500 hover:bg-red-500 hover:text-white duration-500 cursor-pointer">
              <FaLanguage className="mx-auto" size={30} />
              <h6 className="mt-3">BAHASA</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-indigo-500 hover:bg-indigo-500 hover:text-white duration-500 cursor-pointer">
              <MdOutlinePiano className="mx-auto" size={30} />
              <h6 className="mt-3">ALAT MUSIK</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-emerald-500 hover:bg-emerald-500 hover:text-white duration-500 cursor-pointer">
              <FaHome className="mx-auto" size={30} />

              <h6 className="mt-3">RUMAH ADAT</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-yellow-500 hover:bg-yellow-500 hover:text-white duration-500 cursor-pointer">
              <GiHeartInside className="mx-auto" size={30} />
              <h6 className="mt-3">SENI TARI</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-purple-500 hover:bg-purple-500 hover:text-white duration-500 cursor-pointer">
              <GiMusicalScore className="mx-auto" size={30} />
              <h6 className="mt-3">LAGU DAERAH</h6>
            </div>
            <div className="shadow py-4 px-2 text-center rounded border-b-4 border-orange-500 hover:bg-orange-500 hover:text-white duration-500 cursor-pointer">
              <FaBowlFood className="mx-auto" size={30} />
              <h6 className="mt-3">MAKANAN KHAS</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
