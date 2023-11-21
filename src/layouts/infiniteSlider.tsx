import React from "react";

export default function InfiniteSlider() {
  return (
    <>
      <section className="mt-20 bg-gray-200 pt-20">
        <h3 className="text-center text-4xl font-bold">KEGIATAN KAMI</h3>
        <p className="w-[900px] text-center mx-auto mt-5 mb-10">
          Kami memiliki dedikasi tinggi untuk melestarikan kekayaan budaya
          Indonesia yang luar biasa. Melalui berbagai kegiatan, kami berupaya
          untuk memahami, merawat, dan menghidupkan kembali warisan budaya yang
          berharga ini.
        </p>
        <div className="slider h-[500px] overflow-x-hidden py-10 relative">
          <div className="slide-track flex gap-20 items-center">
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_india_selfie.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_india_hallway.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_india_team.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_conf_nat.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_conf_fun.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_india_sunil.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_conf_hallway.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://react.dev/images/home/community/react_conf_elizabet.webp"
                className="w-[500px] h-[300px] object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
