"use client";

import { useEffect, useState } from "react";
import ArrowLeftIcon from "./ArrowLeftIcon";
import ArrowRightIcon from "./ArrowRightIcon";
import CloseIcon from "./CloseIcon";
import Imgcomponent from "./imgcomponent";
import { urlForImage } from "@/sanity/lib/utils";

type Image = {
  nameHU: string;
  nameRS: string;
  src: string;
  image: string;
};

function Page(props: any) {
  const [animals, setAnimas] = useState(props.data);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);
  useEffect(() => {
    if (currentImageIndex != -1) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [currentImageIndex]);

  function handleNextImage() {
    if (currentImageIndex < animals.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  }

  function handlePrevImage() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(animals.length - 1);
    }
  }

  return (
    <>
      {currentImageIndex != -1 ? (
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
              onClick={() => setCurrentImageIndex(-1)}
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
            <img
              src={urlForImage(animals[currentImageIndex].image)?.url()!}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </section>
        </div>
      ) : (
        <></>
      )}
      <section id="main" className="container">
        <div className="row">
          {animals.map((animal: Image, index: number) => {
            return (
              <Imgcomponent
                key={index}
                name={props.lang == "hu" ? animal.nameHU : animal.nameRS}
                src={animal.image}
                callback={() => setCurrentImageIndex(index)}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Page;
