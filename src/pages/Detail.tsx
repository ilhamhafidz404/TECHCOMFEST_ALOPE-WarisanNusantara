export default function Detail() {
  return (
    <>
      <div className="grid grid-cols-5 px-16 my-8 items-center bg-gray-100">
        <div className="text-left col-span-3">
          <p className="font-semibold mb-2 text-red-500">UPACARA</p>
          <h1 className="font-bold text-3xl mb-8">
            UPACARA SEREN TAUN DI CIGUGUR <br /> UNTUK MENSYUKURI HASIL PANEN
          </h1>
          <p className="mr-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            non.
          </p>
          <p className="mr-3 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            corrupti?
          </p>
        </div>
        <div className="p-8 col-span-2">
          <img
            src="/images/news/serenTaun.jpg"
            className="w-full h-[350px] rounded object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 m-14">
        <div className="">
          <p className="text-medium mb-3">
            Upacara seren taun: ungkapan syukur masyarakat Sunda atas pertanian
            setahun. Dilaksanakan tiap 22 Bulan Rayagung dengan ritual,
            kesenian, dan hubungan manusia dengan Tuhan, sesama, dan alam.
          </p>
          <p className="text-medium mb-3">
            Upacara Seren Taun: Ngajayak (Menjemput Padi) dimulai tanggal 18
            Rayagung, penumbukan padi, puncaknya tanggal 22 Rayagung. Ngajayak
            pada "dalapan welas" (18) mencerminkan welas asih Tuhan bagi
            kehidupan umat-Nya di seluruh dunia.
          </p>
          <p className="text-medium mb-3">
            Puncak Seren Taun pada tanggal 22 Rayagung, diwakili oleh penumbukan
            22 kwintal padi, memiliki makna khusus. Angka 22 terdiri dari 20
            kwintal padi yang ditumbuk dan dibagikan ke masyarakat, serta 2
            kwintal sebagai benih. Angka 20 mencerminkan unsur anatomi tubuh
            manusia.
          </p>
        </div>
        {/* <div className="">
          <p className="text-medium mb-3">
            "Seren Taun Ceremony: The expression of gratitude by the Sundanese
            community for a year of agriculture. Conducted every 22nd month of
            Rayagung with rituals, arts, and the relationship between humans,
            God, fellow beings, and nature."
          </p>
          <p className="text-medium mb-3">
            "Seren Taun Ceremony: Ngajayak (Harvesting) begins on the 18th day
            of Rayagung, with rice pounding, reaching its peak on the 22nd day
            of Rayagung. Ngajayak on the "dalapan welas" (18) reflects God's
            compassion for the lives of His people worldwide."
          </p>
          <p className="text-medium mb-3">
            "The pinnacle of the Seren Taun on the 22nd day of Rayagung is
            represented by the pounding of 22 quintals of rice, holding special
            significance. The number 22 comprises 20 quintals of rice that are
            pounded and distributed to the community, and 2 quintals as seeds.
            The number 20 reflects the anatomical elements of the human body."
          </p>
        </div> */}
        <div className="ml-64">
          <img src="/images/avatar.png" className="w-[100px] rounded" />
          <h1 className="font-bold mt-4">Ilham Hafidz</h1>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
            tempore non quae. Eum, nulla?
          </p>
          <div className="mt-12">
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet.</p>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet.</p>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </>
  );
}
