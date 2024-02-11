import React from 'react'

export default function Event() {
  return (
    <>
    <div className="mt-5">
      <hr />
      <h1 className="font-bold m-4">Februari 2024</h1>
      <hr />
    </div>
    <div className="h-screen pl-10 pr-5 flex">
      <div className="mt-5">
        <img className="h-[326px] w-[326px]" src="./../images/gambar.jpg" alt="" />
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
            <li className="mb-3">3 Februari @ 3:00 pm - 4:00 am</li>
            <li>Galeri Indonesia Karya</li>
          </ul>
          <ul className="ml-5">
            <li>Semua Umur</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
