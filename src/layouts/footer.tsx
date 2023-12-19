export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <section className="container lg:px-20 md:px-10 px-5 py-12 mx-auto">
        <div className="lg:flex">
          <div className="min-w-[300px]">
            <h3 className="text-3xl font-bold mb-20 md:text-left text-center font-dancing-script">
              Warisan Nusantara
            </h3>
          </div>
          <div className="w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
              <div className="border-t-4 border-red-500">
                <h4 className="text-xl font-semibold mb-4 mt-3">
                  Informasi Lainnya
                </h4>
                <ul className="text-sm">
                  <li className="mb-2 text-gray-300">
                    <a href="/">Tentang Kami</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Hubungi Kami</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Peraturan dan Ketentuan</a>
                  </li>
                </ul>
              </div>
              <div className="border-t-4 border-indigo-500">
                <h4 className="text-xl font-semibold mb-4 mt-3">Ikuti Kami</h4>
                <ul className="text-sm">
                  <li className="mb-2 text-gray-300">
                    <a href="/">Instagram</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Facebook</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Youtube</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Twitter</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Tiktok</a>
                  </li>
                </ul>
              </div>
              <div className="border-t-4 border-emerald-500">
                <h4 className="text-xl font-semibold mb-4 mt-3">
                  Ragam Indonesia
                </h4>
                <ul className="text-sm">
                  <li className="mb-2 text-gray-300">
                    <a href="/">Lagu & Musik</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Arsitektur Bangunan</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Makanan Khas</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Seni Tari</a>
                  </li>
                </ul>
              </div>
              <div className="border-t-4 border-yellow-500">
                <h4 className="text-xl font-semibold mb-4 mt-3">
                  Berita Budaya
                </h4>
                <ul className="text-sm">
                  <li className="mb-2 text-gray-300">
                    <a href="/">Indonesia Dimata Dunia</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Bahasa Indonesia Mendunia</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Tari Budaya di Turki</a>
                  </li>
                </ul>
              </div>
              <div className="border-t-4 border-purple-500">
                <h4 className="text-xl font-semibold mb-4 mt-3">
                  Indonesia Kaya
                </h4>
                <ul className="text-sm">
                  <li className="mb-2 text-gray-300">
                    <a href="/">Tentang Kami</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Hubungi Kami</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Peraturan dan Ketentuan</a>
                  </li>
                </ul>
              </div>
              <div className="border-t-4 border-orange-500">
                <h4 className="text-xl font-semibold mb-4 mt-3">
                  Indonesia Kaya
                </h4>
                <ul className="text-sm">
                  <li className="mb-2 text-gray-300">
                    <a href="/">Tentang Kami</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Hubungi Kami</a>
                  </li>
                  <li className="mb-2 text-gray-300">
                    <a href="/">Peraturan dan Ketentuan</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 text-center">
          <hr className="mb-3 my-14 border-gray-600" />
          <p className="md:text-base text-sm">
            &copy; 2023 ALOPE On Techcomfest
          </p>
        </div>
      </section>
    </footer>
  );
}
