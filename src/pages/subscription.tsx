import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

export default function Subscription() {
  const DummyContent = () => (
    <p style={{ padding: "18px" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  );

  return (
    <>
      <header className="grid grid-cols-2 gap-10 items-center px-20">
        <div>
          <h2 className="text-5xl font-bold mb-5">SUBSCRIPTION</h2>
          <p className="text-sm text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi esse
            deserunt iste laborum laudantium commodi illo non id fugit ratione
            eaque optio, totam error saepe vitae, unde inventore voluptatum
            repellendus.
          </p>
          <div className="mt-10">
            <h3 className="font-bold mb-3">Subscribe lewat :</h3>
            <div className="flex gap-10">
              <div>
                <img
                  src="/images/icons/gmail.png"
                  alt="gmailIcon"
                  className="w-[30px]"
                />
                <p>Gmail</p>
              </div>
              <div>
                <img
                  src="/images/icons/gmail.png"
                  alt="gmailIcon"
                  className="w-[30px]"
                />
                <p>Gmail</p>
              </div>
              <div>
                <img
                  src="/images/icons/gmail.png"
                  alt="gmailIcon"
                  className="w-[30px]"
                />
                <p>Gmail</p>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <p className="flex gap-3 items-center mt-5">
            <FaCalendarAlt /> Mendapatkan notifikasi ketika ada berita baru
          </p>
        </div>
        <div>
          <img src="/images/subscription.png" alt="" />
        </div>
      </header>
      <main className="grid grid-cols-3 gap-10 px-20 my-20">
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Frequently <br /> Asked Question
          </h2>
          <p className="text-sm text-gray-800 mb-10">
            Jika ada pertanyaan lainnya, silahkan hubungi <br /> tim kami di
            support@alope.com
          </p>
          <button className="text-sm border-2 text-gray-700 border-gray-700 px-5 py-3">
            Lihat semua FAQ
          </button>
        </div>
        <div className="col-span-2">
          <div>
            <Accordion atomic={true}>
              <AccordionItem title="Title 1">
                <DummyContent />
              </AccordionItem>

              <AccordionItem title="Title 2">
                <DummyContent />
              </AccordionItem>

              <AccordionItem title="Title 3">
                <DummyContent />
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </>
  );
}
