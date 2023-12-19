import React, { useEffect } from "react";
import { FaBell, FaCalendarAlt } from "react-icons/fa";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

export default function Subscription() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqDescription = {
    benefitBerlangganan:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <>
      <header className="grid lg:grid-cols-2 md:gap-10 items-center px-20 lg:h-[800px] h-[700px] relative">
        <span
          className="w-[1000px] h-[1000px] rounded-full absolute -left-[500px] -top-[500px] -rotate-[60deg]"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(239, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <div>
          <h2 className="text-5xl font-bold mb-5 dark:text-gray-100">
            SUBSCRIPTION
          </h2>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi esse
            deserunt iste laborum laudantium commodi illo non id fugit ratione
            eaque optio, totam error saepe vitae, unde inventore voluptatum
            repellendus.
          </p>
          <div className="mt-10">
            <h3 className="font-semibold mb-3">Subscribe lewat :</h3>
            <div className="flex gap-10">
              <div>
                <img
                  src="/images/icons/gmail.png"
                  alt="gmailIcon"
                  className="w-[30px]"
                />
                <p className="mt-2 dark:text-gray-300 text-sm">Gmail</p>
              </div>
              <div>
                <img
                  src="/images/icons/instagram.png"
                  alt="instagramIcon"
                  className="w-[30px]"
                />
                <p className="mt-2 dark:text-gray-300 text-sm">Instagram</p>
              </div>
              <div>
                <img
                  src="/images/icons/facebook.png"
                  alt="facebookIcon"
                  className="w-[30px]"
                />
                <p className="mt-2 dark:text-gray-300 text-sm">Facebook</p>
              </div>
            </div>
          </div>
          <hr className="my-5 dark:border-gray-800" />
          <p className="flex gap-3 items-center mt-5 text-gray-700 dark:text-gray-300">
            <FaBell /> Mendapatkan notifikasi ketika ada berita baru.
          </p>
        </div>
        <div className="h-[450px] lg:flex hidden lg:justify-start gap-5">
          <div className="h-full w-[40%] -translate-y-10">
            <img
              src="/images/explore/2.jpg"
              alt=""
              className="h-full w-full object-cover"
              data-aos="fade-up"
              data-aos-once="true"
            />
          </div>
          <div className="h-full w-[40%] translate-y-10">
            <img
              src="/images/explore/1.jpg"
              alt=""
              className="h-full w-full object-cover"
              data-aos="fade-down"
              data-aos-once="true"
            />
          </div>
        </div>
      </header>
      <main className="grid lg:grid-cols-3 gap-10 px-20 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-5 dark:text-gray-100">
            Frequently <br /> Asked Question
          </h2>
          <p className="text-sm text-gray-800 dark:text-gray-300 mb-10">
            Jika ada pertanyaan lainnya, silahkan hubungi <br /> tim kami di
            support@alope.com
          </p>
          <button className="text-sm border-2 text-gray-700 dark:text-gray-200 border-gray-700 dark:border-gray-200 px-5 py-3">
            Lihat semua FAQ
          </button>
        </div>
        <div className="lg:col-span-2">
          <div>
            <Accordion atomic={true}>
              <AccordionItem title="Apa benefit dari berlangganan?">
                <p className="p-5 text-sm text-gray-800">
                  {faqDescription.benefitBerlangganan}
                </p>
              </AccordionItem>

              <AccordionItem title="Bagaimana Cara Berlangganan?">
                <p className="p-5 text-sm text-gray-800">
                  {faqDescription.benefitBerlangganan}
                </p>
              </AccordionItem>

              <AccordionItem title="Saya Ingin Berhenti Berlangganan">
                <p className="p-5 text-sm text-gray-800">
                  {faqDescription.benefitBerlangganan}
                </p>
              </AccordionItem>
              <AccordionItem title="Bagaimana Caranya Agar Saya Mendapatkan Notifikasi Pembaharuan?">
                <p className="p-5 text-sm text-gray-800">
                  {faqDescription.benefitBerlangganan}
                </p>
              </AccordionItem>
              <AccordionItem title="Bagaimana Cara Mengganti Email yang Sudah Terdaftar Subscription?">
                <p className="p-5 text-sm text-gray-800">
                  {faqDescription.benefitBerlangganan}
                </p>
              </AccordionItem>
              <AccordionItem title="Apakah Subcription Itu Berbayar?">
                <p className="p-5 text-sm text-gray-800">
                  {faqDescription.benefitBerlangganan}
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="lg:px-20 md:px-10 px-3 md:py-14 py-10 md:flex md:justify-between md:items-center bg-gradient-to-r from-red-500/90 to-red-400/90 text-white relative overflow-hidden">
        <span
          id="blink"
          className="w-[1000px] h-[1000px] rounded-full absolute -rotate-[60deg]"
          style={{
            backgroundImage:
              "radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(255, 68, 68, 0.70) 0%, rgba(239, 68, 68, 0.0) 100%)",
          }}
        ></span>

        <div className="relative z-10">
          <h3 className="font-bold md:text-2xl text-xl">
            ALOPE | WARISAN NUSANTARA
          </h3>
          <p className="text-gray-200 mt-2 md:text-base text-sm md:mb-0 mb-10">
            Mari kenali ragam budaya hasil dari warisan nusantara.
          </p>
        </div>
        <div className="relative z-10">
          <a
            href=""
            className="bg-white px-7 py-3 border-2 border-white rounded-full text-red-500 font-semibold hover:bg-transparent hover:text-white"
          >
            Explorasi Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
