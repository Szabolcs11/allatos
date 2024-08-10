"use client";

import React, { useEffect, useState } from "react";
import Imgcomponent from "./imgcomponent";
import CloseIcon from "./CloseIcon";
import ArrowLeftIcon from "./ArrowLeftIcon";
import ArrowRightIcon from "./ArrowRightIcon";

const Sources = ["Kutyus1.jpeg", "kutyus.jpeg", "Lóbox.JPG", "Artur.jpeg"];
const Animals = [
  {
    name: "Kutyus1",
    src: "./../images/Kutyus1.jpeg",
  },
  {
    name: "Kutyus",
    src: "./../images/kutyus.jpeg",
  },
  {
    name: "Lóbox",
    src: "./../images/Lóbox.JPG",
  },
  {
    name: "Artur",
    src: "./../images/Artur.jpeg",
  },
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
