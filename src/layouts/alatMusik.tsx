import { useState, useEffect, useRef } from "react";

import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { MdOutlinePiano } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";

import musics from "./../data/musics.json";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function AlatMusik() {
  const [selectedAlatMusik, setSelectedAlatMusik] = useState({
    name: "Angklung",
    from: "Jawa Barat",
    image: "angklung.jpg",
  });

  const [isPlaying, setIsPlaying] = useState(false);

  // Gunakan useRef untuk menyimpan referensi ke objek audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAlatMusik = (alatMusik: string) => {
    // Hentikan musik sebelumnya jika sedang diputar
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }

    // Mulai pemutaran musik baru
    const audioAlatMusikBaru = new Audio(alatMusik);

    audioAlatMusikBaru.addEventListener("ended", () => {
      // Setelah musik selesai, atur state isPlaying ke false
      setIsPlaying(false);
    });

    audioAlatMusikBaru.play();
    setIsPlaying(true);

    // Simpan referensi objek audio ke useRef
    audioRef.current = audioAlatMusikBaru;
  };

  const pauseAlatMusik = () => {
    // Hentikan musik yang sedang diputar
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, [selectedAlatMusik]);
  return (
    <>
      <section className="mt-20">
        <div className="md:flex gap-10 items-center mb-10">
          <div className="shadow py-4 w-[100px] text-center rounded bg-indigo-500 text-white">
            <MdOutlinePiano className="mx-auto" size={30} />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold md:text-3xl text-2xl mb-3 md:mt-0 mt-5 dark:text-gray-100">
                ALAT MUSIK TRADISIONAL INDONESIA
              </h2>
              <p className="xl:w-[700px] md:w-[500px] w-full dark:text-gray-300 text-gray-700 md:text-sm text-[12px]">
                Indonesia kaya budaya dengan 439 lagu tradisional, masing-masing
                sebagai simbol keanekaragaman seni dan warisan bangsa.
              </p>
            </div>
            {/* <img
                src="https://react.dev/images/home/community/react_conf_nat.webp"
                className="object-cover w-[300px] h-[100px] object-center"
                alt=""
              /> */}
          </div>
        </div>
        <hr className="mb-5 dark:border-indigo-900" />
        <div className="grid lg:grid-cols-5 gap-20 items-center">
          <div className="lg:col-span-2">
            <img
              src={`/images/alatMusik/${selectedAlatMusik.image}`}
              className="w-full lg:h-[400px] h-full object-cover rounded"
              alt="gambarAlatMusik"
            />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 lg:col-span-3 md:gap-5 gap-2">
            {musics.map((row) => (
              <div
                key={row.name} // Add a unique key for each item
                className={
                  row.name === selectedAlatMusik.name
                    ? "bg-gradient-to-r from-indigo-500/70 to-indigo-200/20 dark:from-indigo-800/70 dark:to-gray-900  text-white shadow p-4 rounded flex justify-between items-center cursor-pointer"
                    : "shadow p-4 rounded flex justify-between items-center cursor-pointer dark:bg-gray-950"
                }
                onClick={() => setSelectedAlatMusik(row)}
              >
                <div>
                  <h3 className="dark:text-gray-100 md:text-base text-sm font-semibold">
                    {row.name}
                  </h3>
                  <small className="dark:text-gray-300 md:text-sm text-[12px]">
                    {row.from}
                  </small>
                </div>
                {selectedAlatMusik.name === row.name ? (
                  <BootstrapTooltip
                    title={isPlaying ? "Pause Music" : "Play Music"}
                    placement="top"
                    className="pr-2"
                    onClick={() => {
                      isPlaying
                        ? pauseAlatMusik()
                        : playAlatMusik(`/sounds/${row.sound}`);
                    }}
                  >
                    <span className="bg-white dark:bg-gray-800 shadow text-indigo-500 dark:text-white flex items-center justify-center w-[30px] h-[30px] rounded-full">
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </span>
                  </BootstrapTooltip>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>

        {/* <audio controls>
            <source src={`/songs/yamkoRambeYamko.mp3`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio> */}
      </section>
    </>
  );
}
