import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { GiMusicalScore } from "react-icons/gi";
import { MdInventory, MdOutlineHistoryEdu } from "react-icons/md";
//
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import songs from "./../data/songs.json";

export default function LaguDaerah() {
  const [selectedSong, setSelectedSong] = useState({
    name: "Tokecang",
    lyric:
      "Tokecang tokecang bala gendir tosblong <br/> Angeun kacang angeun kacang sapependil kosong <br/> Aya listrik di masigit meuni caang <br/> katingalna <br/> Aya istri jangkung alit karangan dina pipina <br/> Tokecang tokecang bala gendir tosblong <br/> Angeun kacang angeun kacang sapependil kosong",
    from: "Jawa Barat",
    creator: "R.C Hardjosubroto",
    song: "tokecang.mp3",
    history:
      "Lagu Tokecang merupakan salah satu lagu tradisional dari Sunda, Jawa Barat, Indonesia. Meskipun tidak ada catatan yang pasti tentang sejarah lagu ini, lagu tradisional seperti Tokecang umumnya diwariskan secara lisan dari generasi ke generasi. Oleh karena itu, seringkali sulit untuk menentukan asal usul atau pencipta yang tepat untuk lagu-lagu tradisional seperti ini.<br /><br /> Lagu Tokecang biasanya dinyanyikan dalam bahasa Sunda, dan liriknya menggambarkan suasana yang riang dan ceria. Lagu ini sering diiringi oleh tarian tradisional atau disertai dengan alat musik tradisional Sunda seperti angklung. Meskipun mungkin sulit untuk menelusuri sejarah tepatnya, keberadaan lagu-lagu seperti Tokecang memainkan peran penting dalam memperkaya warisan budaya Indonesia.",
    mean: "Lagu Tokecang adalah anjuran agar manusia tidak berlebihan dalam mengambil makanan, hingga tidak menyisakan untuk orang lain. <br/> Hal ini menjadi pengingat agar manusia tidak serakah, supaya nantinya tidak merugikan diri sendiri dan orang di sekitar.<br/> Selain itu, manusia harus selalu berbagi dan peduli dan tidak terjebak dengan hanya memikirkan diri sendiri.",
  });

  const [musicPlayer, setMusicPlayer] = useState("tokecang.mp3");

  const changeMusic = (song: any) => {
    setMusicPlayer("");

    setTimeout(() => {
      setMusicPlayer(song);
    }, 500);
  };

  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChangeAccordionItem =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {/*  */}

      <section className="mt-20">
        <div className="md:flex gap-10 items-center mb-10">
          <div className="shadow py-4 w-[100px] text-center rounded bg-purple-500 text-white">
            <GiMusicalScore className="mx-auto" size={30} />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold md:text-3xl text-2xl mb-3 md:mt-0 mt-5 dark:text-gray-100">
                LAGU DAERAH INDONESIA
              </h2>
              <p className="xl:w-[700px] md:w-[500px] w-full dark:text-gray-300 text-gray-700 md:text-sm text-[12px]">
                Indonesia punya lebih dari 439 lagu tradisional, masing-masing
                menceritakan kisah unik sebagai simbol keanekaragaman seni dan
                warisan budaya yang memperkaya bangsa.
              </p>
            </div>
            {/* <img
                src="https://react.dev/images/home/community/react_conf_nat.webp"
                className="object-cover w-[300px] h-[100px] object-center"
                alt=""
              /> */}
          </div>
        </div>
        <hr className="dark:border-purple-900" />
        <div className="md:grid xl:grid-cols-4 md:grid-cols-2 gap-10 mt-10">
          <div className="md:h-[500px] h-[200px] md:mb-0 mb-5 overflow-auto rounded shadow bg-gray-50 dark:bg-gray-950">
            {songs.map((song) => (
              <div
                className={
                  song.name === selectedSong.name
                    ? "bg-purple-500/20 px-5 py-3"
                    : "px-5 py-3 hover:bg-purple-500/10 cursor-pointer"
                }
                onClick={() => {
                  changeMusic(song.song);
                  setSelectedSong(song);
                }}
              >
                <div>
                  <h6 className="text-xl font-semibold dark:text-gray-100">
                    {song.name}
                  </h6>
                  <small className="text-gray-500 block dark:text-gray-300">
                    Lagu Daerah {song.from}
                  </small>
                  <small className="text-gray-500 block dark:text-gray-300">
                    Cipt: {song.creator}
                  </small>
                </div>
              </div>
            ))}
          </div>
          <div className="md:mb-0 mb-5">
            <div className="mb-5">
              <h5 className="font-semibold text-xl mb-3 uppercase dark:text-gray-200">
                LAGU {selectedSong.name}
              </h5>

              {musicPlayer === "tokecang.mp3" ? (
                <audio controls>
                  <source src={`/songs/tokecang.mp3`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : musicPlayer === "amparAmparPisang.mp3" ? (
                <audio controls>
                  <source
                    src={`/songs/amparAmparPisang.mp3`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              ) : musicPlayer === "apuse.mp3" ? (
                <audio controls>
                  <source src={`/songs/apuse.mp3`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : musicPlayer === "bungongJumpa.mp3" ? (
                <audio controls>
                  <source src={`/songs/bungongJumpa.mp3`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : musicPlayer === "gundulGundulPacul.mp3" ? (
                <audio controls>
                  <source
                    src={`/songs/gundulGundulPacul.mp3`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              ) : musicPlayer === "rasaSayange.mp3" ? (
                <audio controls>
                  <source src={`/songs/rasaSayange.mp3`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : musicPlayer === "sajojo.mp3" ? (
                <audio controls>
                  <source src={`/songs/sajojo.mp3`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : musicPlayer === "yamkoRambeYamko.mp3" ? (
                <audio controls>
                  <source
                    src={`/songs/yamkoRambeYamko.mp3`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                ""
              )}
            </div>

            <h5 className="font-semibold text-xl dark:text-gray-200">LIRIK</h5>
            <small className="dark:text-gray-300">
              Ciptaan: {selectedSong.creator}
            </small>

            <p
              className="mt-5 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: selectedSong.lyric }}
            ></p>
          </div>
          <div className="col-span-2">
            <h5 className="font-semibold text-xl mb-3 uppercase">
              INFORMASI LAINNYA
            </h5>

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChangeAccordionItem("panel1")}
            >
              <AccordionSummary
                expandIcon={<FaChevronDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <div className="flex items-center gap-3">
                    <MdInventory size={25} />
                    <p>Makna Lagu</p>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p
                    dangerouslySetInnerHTML={{ __html: selectedSong.mean }}
                  ></p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChangeAccordionItem("panel2")}
            >
              <AccordionSummary
                expandIcon={<FaChevronDown />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <div className="flex items-center gap-3">
                    <MdOutlineHistoryEdu size={30} />
                    <p>Sejarah</p>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p
                    dangerouslySetInnerHTML={{ __html: selectedSong.history }}
                  ></p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
