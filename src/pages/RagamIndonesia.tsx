import IndonesiaKaya from "../layouts/indonesiaKaya";
import LaguDaerah from "../layouts/laguDaerah";
import AlatMusik from "../layouts/alatMusik";
import HeaderSlider from "../layouts/headerSlider";
import RumahAdat from "../layouts/rumahAdat";
import MakananKhas from "../layouts/makananKhas";
import { useEffect } from "react";

export default function RagamIndonesia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderSlider />

      <main className="lg:px-20 md:px-10 px-5 dark:bg-black">
        <IndonesiaKaya />
        <LaguDaerah />
        <AlatMusik />
        <RumahAdat />
        <MakananKhas />
      </main>
    </>
  );
}
