import { useEffect, useState } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";

import content from "./../data/content.json";
import { Link } from "react-router-dom";

export default function Detail(language: any) {
  const [lang, setLang] = useState("ID");

  useEffect(() => {
    setLang(language.language);
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-5 pt-20 pb-10 md:px-20 px-5 mb-8 items-center bg-gray-100 dark:bg-gray-950 relative">
        <span className="h-full lg:w-[700px] w-full absolute right-0 lg:bg-gradient-to-l bg-gradient-to-b from-red-500/70 to-red-500/0"></span>
        <div className="lg:col-span-3 order-2 lg:order-1 relative z-10 lg:text-left text-center">
          <p className="font-semibold mb-2 text-red-500 md:md:text-base text-[13px] text-sm">
            UPACARA
          </p>
          <h1 className="font-bold md:text-3xl text-xl mb-8 text-gray-900 dark:text-gray-200">
            UPACARA SEREN TAUN DI CIGUGUR <br /> UNTUK MENSYUKURI HASIL PANEN
          </h1>
          <p className="mr-3 md:text-sm text-[12px] text-gray-800 dark:text-gray-300">
            Ditulis oleh{" "}
            <span className="text-red-500 font-semibold">Ilham Hafidz</span> |{" "}
            <span className="text-gray-500 dark:text-gray-400 italic">
              Diperbaharui pada 19 Desember 2023
            </span>
          </p>
          <p className="mr-3 text-sm text-gray-800 dark:text-gray-300">
            Diterbitkan pada 18 Desember 2023 | 10 Menit Baca
          </p>
        </div>
        <div className="py-8 lg:col-span-2 relative z-10 lg:order-2 order-1">
          <img
            src="/images/news/serenTaun.jpg"
            className="w-full h-[350px] rounded object-cover"
            alt="seren taun"
          />
        </div>
      </div>

      <main className="grid lg:grid-cols-3 md:px-20 px-5 gap-20 mt-20 mb-20">
        <div className="lg:col-span-2 text-gray-800 dark:text-gray-200">
          <p className="md:text-base text-[13px] mb-10 leading-8">
            Upacara seren taun: ungkapan syukur masyarakat Sunda atas pertanian
            setahun. Dilaksanakan tiap 22 Bulan Rayagung dengan ritual,
            kesenian, dan hubungan manusia dengan Tuhan, sesama, dan alam.
          </p>
          <p className="md:text-base text-[13px] mb-10 leading-8">
            Upacara Seren Taun: Ngajayak (Menjemput Padi) dimulai tanggal 18
            Rayagung, penumbukan padi, puncaknya tanggal 22 Rayagung. Ngajayak
            pada "dalapan welas" (18) mencerminkan welas asih Tuhan bagi
            kehidupan umat-Nya di seluruh dunia.
          </p>
          <p className="md:text-base text-[13px] mb-10 leading-8">
            Puncak Seren Taun pada tanggal 22 Rayagung, diwakili oleh penumbukan
            22 kwintal padi, memiliki makna khusus. Angka 22 terdiri dari 20
            kwintal padi yang ditumbuk dan dibagikan ke masyarakat, serta 2
            kwintal sebagai benih. Angka 20 mencerminkan unsur anatomi tubuh
            manusia.
          </p>
          <p className="md:text-base text-[13px] mb-10 leading-8">
            Baik laki-aki ataupun perempuan memiliki 20 sifat wujud manusia,
            adalah : 1. getih atau darah, 2. daging, 3. bulu, 4. kuku, 5.
            rambut, 6. kulit, 7. urat, 8. polo atau otak, 9. bayah atau paru,
            10. ari atau hati, 11. kalilipa atau limpa, 12. mamaras atau maras,
            13. hamperu ataun empedu, 14. tulang, 15. sumsum, 16. lamad atau
            lemak, 17. gegembung atau lambung. 18. peujit atau usus. 19. ginjal
            dan 20. jantung.
          </p>
          <p className="md:text-base text-[13px] mb-10 leading-8">
            Ke 20 sifat diatas menyatukan organ dan sel tubuh dengan fungsi yang
            beraneka ragam, atau dengan kata lain tubuh atau jasmani dipandang
            sebagai suatu struktur hidup yang memiliki proses seperti hukum
            adikodrati. Hukum adikodrati ini kemudian menjelma menjadi jirim (
            raga ), jisim ( nurani ) dan pengakuan ( aku ). Sedangkan bilangan 2
            mengacu pada pengertian bahwa kehidupan siang dan malam, suka duka,
            baik buruk dan sebaginya.
          </p>
        </div>
        {/* <div className="">
          <p className="text-medium mb-3">
            Harvest Festival: A Sundanese expression of gratitude for a year of
            agriculture. Celebrated every 22nd month of the Sundanese calendar
            with rituals, arts, and the connection between humans and God,
            fellow beings, and nature.
          </p>
          <p className="text-medium mb-3">
            Harvest Festival: The "Seren Taun" ceremony, specifically the
            "Ngajayak" (Harvesting Rice), commences on the 18th day of Rayagung,
            with the rice pounding reaching its peak on the 22nd day of
            Rayagung. The "Ngajayak" on the eighteenth day signifies God's
            compassion for the lives of His people worldwide.
          </p>
          <p className="text-medium mb-3">
            The peak of Seren Taun on the 22nd day of Rayagung, represented by
            the pounding of 22 quintals of rice, holds a special meaning. The
            number 22 comprises 20 quintals of rice that are pounded and
            distributed to the community, while 2 quintals serve as seeds. The
            number 20 reflects the anatomical elements of the human body.
          </p>
          <p className="text-medium mb-3">
            Both males and females possess 20 physical characteristics of the
            human form, namely: 1. blood, 2. flesh, 3. feathers, 4. nails, 5.
            hair, 6. skin, 7. veins, 8. brain, 9. lungs, 10. liver, 11. spleen,
            12. pancreas, 13. gall bladder, 14. bones, 15. marrow, 16. fat, 17.
            stomach, 18. intestines, 19. kidneys, and 20. heart.
          </p>
          <p className="text-medium mb-3">
            The 20 characteristics mentioned above unite the organs and cells of
            the body with diverse functions, or in other words, the body or the
            physical form is seen as a living structure that undergoes processes
            akin to natural laws. These natural laws then transform into the
            physical body, the spiritual essence, and
            acknowledgment. Meanwhile, the number 2 refers to the
            understanding that life involves day and night, joy and sorrow, good
            and bad, and so on.
          </p>
        </div> */}
        <div>
          <div className="bg-gray-50 dark:bg-gray-950 p-10 rounded">
            <img
              src="/images/avatar.png"
              className="w-[70px] rounded"
              alt="avatar"
            />
            <h1 className="font-bold mt-4 text-gray-800 dark:text-gray-300">
              Ilham Hafidz
            </h1>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">
              Ilham Hafidz merupakan penulis aktif mengenai kebudayaan indonesia
              pada website Warisan Nusantara.
            </p>
            <div className="mt-12">
              <span className="bg-red-500/20 text-red-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                UPACARA
              </span>
              <span className="bg-yellow-500/20 text-yellow-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                INDONESIA DIMATA DUNIA
              </span>
              <br />
              <span className="bg-emerald-500/20 text-emerald-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                MUSIK & LAGU
              </span>
              <span className="bg-indigo-500/20 text-indigo-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                FUN EVENT
              </span>
              <span className="bg-purple-500/20 text-purple-500 font-semibold px-2 py-1 rounded text-[12px] mx-1 mb-2 inline-block">
                MAKANAN
              </span>
            </div>
          </div>
        </div>
      </main>

      <hr className="w-[90%] mx-auto dark:border-gray-900" />

      <section className="lg:grid hidden grid-cols-3 gap-10 px-20 mt-10">
        <div className="col-span-3">
          <h3 className="text-2xl inline-block font-semibold transition-all hover:pr-3 border-b-4 border-red-500 dark:text-gray-200">
            BERITA LAINNYA
          </h3>
        </div>
        <div>
          <img
            src="/images/festivalbali.jpeg"
            alt="news1"
            className="h-[250px] object-cover w-full rounded"
          />
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
            {lang === "ID" ? "Festival Bali Arts" : "Bali Arts Festival"}
          </h3>
          <div className="my-5 flex gap-5">
            <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
              <FaUser />
              <small>Ilham Hafidz</small>
            </span>
            <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
              <FaCalendar />
              <small>07 Des 2023</small>
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
            {lang === "ID"
              ? content.news.sub.sub1.id
              : content.news.sub.sub1.en}
          </p>
        </div>
        <div>
          <img
            src="/images/dalangcilik.jpg"
            alt="news2"
            className="h-[250px] object-cover w-full rounded"
          />
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
            {lang === "ID"
              ? "Festival Dalang Cilik"
              : "'Dalang Cilik' Festival"}
          </h3>
          <div className="my-5 flex gap-5">
            <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
              <FaUser />
              <small>Ilham Hafidz</small>
            </span>
            <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
              <FaCalendar />
              <small>07 Des 2023</small>
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
            {lang === "ID"
              ? content.news.sub.sub2.id
              : content.news.sub.sub2.en}
          </p>
        </div>
        <div>
          <img
            src="/images/babarit.jpeg"
            alt="news3"
            className="h-[250px] object-cover w-full rounded"
          />
          <h3 className="mt-3 text-xl font-bold dark:text-gray-200">
            {lang === "ID" ? "Festival Babarit" : "Babarit Festival"}
          </h3>
          <div className="my-5 flex gap-5">
            <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
              <FaUser />
              <small>Ilham Hafidz</small>
            </span>
            <span className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
              <FaCalendar />
              <small>07 Des 2023</small>
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
            {lang === "ID"
              ? content.news.sub.sub3.id
              : content.news.sub.sub3.en}
          </p>
        </div>
      </section>

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
            to={"/subcription"}
            className="bg-white md:px-7 px-5 md:py-3 py-2 md:text-base text-sm border-2 border-white rounded-full text-red-500 font-semibold hover:bg-transparent hover:text-white"
          >
            Subscription
          </Link>
        </div>
      </section>
    </>
  );
}
