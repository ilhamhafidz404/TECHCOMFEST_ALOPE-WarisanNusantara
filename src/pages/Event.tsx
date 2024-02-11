import React from "react";

// component
import DarkNavbar from "../layouts/darkNavbar";

// icons
import { FaCalendar } from "react-icons/fa";

export default function Event() {
  return (
    <>
      <DarkNavbar />

      <main className="mt-28 mb-28 px-20">
        <div className="mt-5">
          <hr />
          <h1 className="font-bold m-4">Februari 2024</h1>
          <hr />
        </div>
        <div className="flex items-center">
          <div className="mt-5">
            <img
              className="h-[250px] w-[320px] object-cover rounded border border-black"
              src="/images/card/arsitektur.jpg"
              alt=""
            />
          </div>
          <div className="pl-6 mt-5">
            <div className="text-orange-700">
              <p className="font-bold text-xl mb-3">Pertunjukan Berikutnya</p>
            </div>
            <div className="font-serif text-2xl mb-5">
              <p>Ngerjain PR Oleh Putri Ayudya Dan Randhy Prasetya</p>
            </div>
            <div className="flex font-sans">
              <ul>
                <li className="mb-3 flex items-center gap-2">
                  <FaCalendar />3 Februari @ 3:00 pm - 4:00 am
                </li>
                <li>Galeri Indonesia Karya</li>
              </ul>
              <ul className="ml-5">
                <li>Semua Umur</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
