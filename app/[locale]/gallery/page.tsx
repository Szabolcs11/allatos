"use client";

import React, { useEffect, useState } from "react";
import Imgcomponent from "./imgcomponent";
import CloseIcon from "./CloseIcon";
import ArrowLeftIcon from "./ArrowLeftIcon";
import ArrowRightIcon from "./ArrowRightIcon";

const Sources = ["Kutyus1.jpeg", "kutyus.jpeg", "Lóbox.JPG", "Artur.jpeg"];
const Animals = [
  { src: "./../images/Artur.jpeg", name: "Artur" },
  { src: "./../images/Bajszos.png", name: "Bajszos" },
  { src: "./../images/Benji.jpg", name: "Benji" },
  { src: "./../images/Berni.jpeg", name: "Berni" },
  { src: "./../images/Bolt.JPG", name: "Bolt" },
  { src: "./../images/Bolt_1.jpg", name: "Bolt_1" },
  { src: "./../images/Bolt_2.JPG", name: "Bolt_2" },
  { src: "./../images/Bulldogok.jpg", name: "Bulldogok" },
  { src: "./../images/Csinos.jpeg", name: "Csinos" },
  { src: "./../images/Csupafül.JPG", name: "Csupafül" },
  { src: "./../images/Elvis.jpeg", name: "Elvis" },
  { src: "./../images/Elvis_2.jpeg", name: "Elvis_2" },
  { src: "./../images/Fríz.jpg", name: "Fríz" },
  { src: "./../images/Hektor.jpg", name: "Hektor" },
  { src: "./../images/Kezelő_box.JPG", name: "Kezelő_box" },
  { src: "./../images/Kutyakozmetika.JPG", name: "Kutyakozmetika" },
  { src: "./../images/Kutyakozmetika_1.jpg", name: "Kutyakozmetika_1" },
  { src: "./../images/kutyus.jpeg", name: "kutyus" },
  { src: "./../images/Kutyus1.jpeg", name: "Kutyus1" },
  { src: "./../images/Ló.jpg", name: "Ló" },
  { src: "./../images/Lókezelés_Jade_póni_boxban.jpeg", name: "Lókezelés_Jade_póni_boxban" },
  { src: "./../images/Lóbox.JPG", name: "Lóbox" },
  { src: "./../images/Maci.jpg", name: "Maci" },
  { src: "./../images/Max.jpeg", name: "Max" },
  { src: "./../images/Max.jpg", name: "Max" },
  { src: "./../images/Nar.jpeg", name: "Nar" },
  { src: "./../images/Operáció.JPG", name: "Operáció" },
  { src: "./../images/Picur.jpg", name: "Picur" },
  { src: "./../images/Pomade.jpeg", name: "Pomade" },
  { src: "./../images/Rendelő.JPG", name: "Rendelő" },
  { src: "./../images/Róna_a_véradó.jpeg", name: "Róna_a_véradó" },
  { src: "./../images/Sebészet.jpg", name: "Sebészet" },
  { src: "./../images/Semy_Selly.jpeg", name: "Semy_Selly" },
  { src: "./../images/Sissy.png", name: "Sissy" },
  { src: "./../images/Sterilizátor.JPG", name: "Sterilizátor" },
  { src: "./../images/Tacsi.jpg", name: "Tacsi" },
  { src: "./../images/Tedy1.jpg", name: "Tedy1" },
  { src: "./../images/Tedy2.jpg", name: "Tedy2" },
  { src: "./../images/Terepi_munka.jpg", name: "Terepi_munka" },
  { src: "./../images/Vetservis_20.jpg", name: "Vetservis_20" },
  { src: "./../images/Vizsla operáció után.JPG", name: "Vizsla operáció után" },
  { src: "./../images/Váróterem.JPG", name: "Váróterem" },
  { src: "./../images/Váróterem_2.JPG", name: "Váróterem_2" },
  { src: "./../images/Érkezés.JPG", name: "Érkezés" },
];

function Page(props: any) {
  const [fulSizedImgSrc, setFullSizedImgSrc] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  useEffect(() => {
    if (fulSizedImgSrc) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [fulSizedImgSrc]);

  function handleNextImage() {
    if (currentImageIndex < Animals.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  }

  function handlePrevImage() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(Animals.length - 1);
    }
  }

  return (
    <>
      {fulSizedImgSrc ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 99999,
          }}
        >
          <div>
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                padding: "0.3em",
                cursor: "pointer",
              }}
              onClick={() => setFullSizedImgSrc(null)}
            >
              <CloseIcon />
            </div>
            <div
              style={{ position: "absolute", top: "50%", left: 30, cursor: "pointer", color: "white" }}
              onClick={() => handlePrevImage()}
            >
              <ArrowLeftIcon />
            </div>
            <div
              style={{ position: "absolute", top: "50%", right: 30, cursor: "pointer", color: "white" }}
              onClick={() => handleNextImage()}
            >
              <ArrowRightIcon />
            </div>
          </div>
          <section style={{ width: "35%" }}>
            <img src={Animals[currentImageIndex].src} style={{ width: "100%", height: "100%" }} alt="" />
          </section>
        </div>
      ) : (
        <></>
      )}
      <section id="main" className="container">
        <div className="row">
          {Animals.map((animal, index) => (
            <Imgcomponent
              key={index}
              // name={animal.src.split(".")[0]}
              name={animal.name}
              src={animal.src}
              callback={() => setFullSizedImgSrc(animal.src)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
