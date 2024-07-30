"use client";

import React, { useEffect, useState } from "react";
import Imgcomponent from "./imgcomponent";

const Sources = ["Kutyus1.jpeg", "kutyus.jpeg", "Lóbox.JPG", "Artur.jpeg"];
const Animals = [
  {
    name: "Kutyus1",
    src: "./../Kutyus1.jpeg",
  },
  {
    name: "Kutyus",
    src: "./../kutyus.jpeg",
  },
  {
    name: "Lóbox",
    src: "./../Lóbox.JPG",
  },
  {
    name: "Artur",
    src: "./../Artur.jpeg",
  },
];

function Page(props: any) {
  const [fulSizedImgSrc, setFullSizedImgSrc] = useState<string | null>(null);
  useEffect(() => {
    if (fulSizedImgSrc) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [fulSizedImgSrc]);
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
            <button
              style={{ position: "absolute", top: 20, right: 20, padding: "0.3em", cursor: "pointer" }}
              onClick={() => setFullSizedImgSrc(null)}
            >
              X
            </button>
          </div>
          <section style={{ width: "35%" }}>
            <img src={fulSizedImgSrc} style={{ width: "100%", height: "100%" }} alt="" />
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
