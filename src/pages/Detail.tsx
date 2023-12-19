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
          <p className="text-medium mb-3">
            Baik laki-aki ataupun perempuan memiliki 20 sifat wujud manusia,
            adalah : 1. getih atau darah, 2. daging, 3. bulu, 4. kuku, 5.
            rambut, 6. kulit, 7. urat, 8. polo atau otak, 9. bayah atau paru,
            10. ari atau hati, 11. kalilipa atau limpa, 12. mamaras atau maras,
            13. hamperu ataun empedu, 14. tulang, 15. sumsum, 16. lamad atau
            lemak, 17. gegembung atau lambung. 18. peujit atau usus. 19. ginjal
            dan 20. jantung.
          </p>
          <p className="text-medium mb-3">
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
