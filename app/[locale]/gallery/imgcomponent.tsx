"use client";
import { urlForImage } from "@/sanity/lib/utils";

type ImgcomponentProps = {
  src: string;
  name: string;
  callback: () => void;
};

function Imgcomponent({ src, name, callback }: ImgcomponentProps) {
  return (
    <div className="col-6 col-12-narrower">
      <section className="box special" style={{ padding: "0", paddingLeft: "3em", paddingRight: "3em" }}>
        <span style={{ marginTop: "0", cursor: "pointer" }} className="image featured" onClick={() => callback()}>
          {/*@ts-ignore */}
          <img src={urlForImage(src)?.url()} alt={src.alt} />
        </span>
        <h3 style={{ marginTop: "-1.5em" }}>{name}</h3>
      </section>
    </div>
  );
}

export default Imgcomponent;
