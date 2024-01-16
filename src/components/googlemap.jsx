import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: -1.1247206,
  lng: 122.2579333,
};

const dataMarker = [
  {
    title: "Tari Saman",
    from: "Nanggoroe Aceh Darussalam",
    image: "tariSaman.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(4.571568),
      lng: parseFloat(96.357198),
    },
  },
  {
    title: "Tari Tor-tor",
    from: "Sumatra Utara",
    image: "tariTorTor.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(2.5960115),
      lng: parseFloat(98.7263639),
    },
  },
  {
    title: "Tari Erai-erai",
    from: "Sumatra Selatan",
    image: "tariEraiErai.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(-3.1328995),
      lng: parseFloat(104.0944384),
    },
  },
  {
    title: "Tari Tempurung",
    from: "Sumatra Barat",
    image: "tariTempurung.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(-0.8301458),
      lng: parseFloat(100.5752503),
    },
  },
  {
    title: "Tari Andun",
    from: "Bengkulu",
    image: "tariAndun.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(-3.8251707),
      lng: parseFloat(102.2221773),
    },
  },
  {
    title: "Tari Persembahan",
    from: "Riau",
    image: "tariPersembahan.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(0.9009377),
      lng: parseFloat(100.5995738),
    },
  },
  {
    title: "Tari Malemang",
    from: "Kepulauan Riau",
    image: "tariMalemang.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(0.7473033),
      lng: parseFloat(104.2145685),
    },
  },
  {
    title: "Tari Sekapur Sirih",
    from: "Jambi",
    image: "tariSekapurSirih.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(-1.61035),
      lng: parseFloat(103.5683288),
    },
  },
  {
    title: "Tari Bedana",
    from: "Lampung",
    image: "tariBedana.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(-5.4284031),
      lng: parseFloat(105.1850741),
    },
  },
  {
    title: "Tari Campak",
    from: "Bangka Belitung",
    image: "tariCampak.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(-2.5312357),
      lng: parseFloat(105.9405545),
    },
  },

  //
  {
    title: "Tari Zapin",
    from: "Kalimantan Barat",
    image: "tariZapin.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(-0.1026843),
      lng: parseFloat(110.7818359),
    },
  },
  {
    title: "Tari Jepen",
    from: "Kalimantan Timur",
    image: "tariJepen.jpeg",
    type: "tarian",
    longlat: {
      lat: parseFloat(0.8000546),
      lng: parseFloat(116.4736797),
    },
  },
  {
    title: "Tari Dadap",
    from: "Kalimantan Selatan",
    image: "tariDadap.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(-2.9251287),
      lng: parseFloat(115.3370722),
    },
  },
  {
    title: "Tari Manasai",
    from: "Kalimantan Tengah",
    image: "tariManasai.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(-1.4829035),
      lng: parseFloat(113.474118),
    },
  },
  {
    title: "Tari Lalatip",
    from: "Kalimantan Utara",
    image: "tariLalatip.jpg",
    type: "tarian",
    longlat: {
      lat: parseFloat(3.1091935),
      lng: parseFloat(116.1271644),
    },
  },

  //

  {
    title: "Makanan Pempek",
    from: "Sumatra Selatan",
    image: "makananPempek.jpeg",
    type: "makanan",
    longlat: {
      lat: parseFloat(-2.9753922),
      lng: parseFloat(104.7742503),
    },
  },
];

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBKDtW47ZKzT5JPduQvi3gUFNHNZmXk-FU",
  });

  const [selectedMarker, setSelectedMarker] = useState("");

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={{
        disableDefaultUI: true,
        keyboardShortcuts: false,
      }}
      zoom={6}
    >
      <>
        {dataMarker.map((marker, i) => (
          <Marker
            key={i}
            position={{
              lat: marker.longlat.lat,
              lng: marker.longlat.lng,
            }}
            onClick={(e) => {
              setSelectedMarker(marker);
            }}
            icon={{
              url: `./images/mapMarker/${marker.image}`,
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 20),
            }}
            animation={"BOUNCE"}
          />
        ))}

        {selectedMarker ? (
          <InfoWindow
            position={{
              lat: parseFloat(selectedMarker.longlat.lat),
              lng: parseFloat(selectedMarker.longlat.lng),
            }}
            clickable={true}
            onCloseClick={() => setSelectedMarker("")}
          >
            <div className="bg-white rounded text-center">
              <img
                src={`./images/mapMarker/${selectedMarker.image}`}
                width={200}
                height={200}
                className="object-cover"
              />
              <h1 className="font-bold text-xl text-gray-800 mt-3">
                {selectedMarker.title}
              </h1>
              <small className="text-gray-600">{selectedMarker.from}</small>
              <br />
              {selectedMarker.type == "makanan" ? (
                <Link
                  to={"/ragam-indonesia/makanan/detail"}
                  className="bg-orange-500 inline-block text-white hover:bg-orange-400 rounded px-8 py-2 mt-5"
                >
                  Baca Selengkapnya
                </Link>
              ) : (
                <Link
                  to={"/ragam-indonesia/tarian/detail"}
                  className="bg-purple-500 inline-block text-white hover:bg-purple-400 rounded px-8 py-2 mt-5"
                >
                  Baca Selengkapnya
                </Link>
              )}
            </div>
          </InfoWindow>
        ) : (
          ""
        )}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
