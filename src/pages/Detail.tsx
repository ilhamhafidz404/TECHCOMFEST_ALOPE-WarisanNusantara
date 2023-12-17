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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam
            repellat porro, et aliquam facilis, ipsum quos possimus sequi
            corrupti tenetur sit. Molestias necessitatibus, reiciendis
            asperiores, repellendus laborum velit non error illum similique
            voluptatem beatae.
          </p>
          <p className="text-medium mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam
            repellat porro, et aliquam facilis, ipsum quos possimus sequi
            corrupti tenetur sit. Molestias necessitatibus, reiciendis
            asperiores, repellendus laborum velit non error illum similique
            voluptatem beatae.
          </p>
          <p className="text-medium mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam
            repellat porro, et aliquam facilis, ipsum quos possimus sequi
            corrupti tenetur sit. Molestias necessitatibus, reiciendis
            asperiores, repellendus laborum velit non error illum similique
            voluptatem beatae.
          </p>
        </div>
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
