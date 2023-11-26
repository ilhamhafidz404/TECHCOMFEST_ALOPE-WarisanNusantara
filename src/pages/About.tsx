import React from "react";
import { FaAmbulance } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";

export default function About() {
  return <>
   <div
            className="mt-8 ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mr-4">
            
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full h-48 object-cover"
                    src="./images/card/gudeg.jpeg"
                    alt="Card Image 1"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">Gudeg</div>
                    <p className="text-gray-700 text-base">
                        DIY Yogyakarta
                    </p>
                    
                    <a
                        href="#"
                        className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Learn More
                    </a>
                </div>
            </div>

            
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full h-48 object-cover"
                    src="./images/card/karedok.jpeg"
                    alt="Card Image 2"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">Karedok</div>
                    <p className="text-gray-700 text-base">
                        Jawa Barat
                    </p>
                    
                    <a
                        href="#"
                        className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Learn More
                    </a>
                </div>
            </div>

            
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full h-48 object-cover"
                    src="./images/card/keraktelor.jpg"
                    alt="Card Image 3"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">Kerak Telor</div>
                    <p className="text-gray-700 text-base">
                        DKI Jakarta
                    </p>
                    
                    <a
                        href="#"
                        className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Learn More
                    </a>
                </div>
            </div>

            
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full h-48 object-cover"
                    src="./images/card/mieaceh.jpg"
                    alt="Card Image 4"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">Mie Aceh</div>
                    <p className="text-gray-700 text-base">
                        Aceh Darrussalam
                    </p>
                    
                    <a
                        href="#"
                        className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Learn More
                    </a>
                </div>
            </div>

            
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full h-48 object-cover"
                    src="./images/card/papeda.jpg"
                    alt="Card Image 5"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">Papeda</div>
                    <p className="text-gray-700 text-base">
                        Papua
                    </p>
                    
                    <a
                        href="#"
                        className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Learn More
                    </a>
                </div>
            </div>

           
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full h-48 object-cover"
                    src="./images/card/pempek.jpg"
                    alt="Card Image 6"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">Pempek</div>
                    <p className="text-gray-700 text-base">
                        Palembang
                    </p>
                    
                    <a
                        href="#"
                        className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Learn More
                    </a>
                </div>
            </div>

            
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full h-48 object-cover"
                    src="./images/card/rendang.jpg"
                    alt="Card Image "/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">Rendang</div>
                    <p className="text-gray-700 text-base">
                        Sumatra Barat
                    </p>

                    <a
                        href="#"
                        className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
  </>
}
