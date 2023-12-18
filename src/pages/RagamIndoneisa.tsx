import IndonesiaKaya from "./../layouts/indonesiaKaya";
import LaguDaerah from "./../layouts/laguDaerah";
import AlatMusik from "./../layouts/alatMusik";
import HeaderSlider from "./../layouts/headerSlider";
import InfiniteSlider from "./../layouts/infiniteSlider";
import RumahAdat from "./../layouts/rumahAdat";
import MakananKhas from "../layouts/makananKhas";
import { useEffect } from "react";

export default function RagamIndonesia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderSlider />

      <main className="container mx-auto sm:px-10 px-4 dark:bg-black">
        <IndonesiaKaya />
        <LaguDaerah />
        <AlatMusik />
        <RumahAdat />
        <MakananKhas />
      </main>
    </>
  );
}
