import { urlForImage } from "@/sanity/lib/utils";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";
import { Image } from "next-sanity/image";

type BlogComponentProps = {
  title: string | undefined;
  slug: string;
  converImage: any;
  date: string;
  author: Author | null | undefined;
  excerpt: string | null | undefined;
  readmore: string;
};

function BlogComponent({ converImage, title, slug, excerpt, readmore }: BlogComponentProps) {
  // const { image: source, priority } = props;
  // const image = source?.asset?._ref ? (
  //   <Image
  //     className="h-auto w-full"
  //     width={2000}
  //     height={1000}
  //     alt={source?.alt || ""}
  //     src={urlForImage(source)?.height(1000).width(2000).url() as string}
  //     sizes="100vw"
  //     priority={priority}
  //   />
  // ) : (
  //   <div className="bg-slate-50" style={{ paddingTop: "50%" }} />
  // );
  return (
    <div className="col-6 col-12-narrower">
      <section className="box special">
        <span className="image featured">
          {/* <Image
            width={400}
            height={190}
            alt={converImage?.alt || ""}
            src={urlForImage(converImage)?.height(1000).width(2000).url() as string}
          /> */}
          <img
            style={{ maxHeight: 500, width: "auto", justifySelf: "center" }}
            //@ts-ignore
            src={urlForImage(converImage).url()}
            alt=""
          />
        </span>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <ul className="actions special">
          <li>
            <a href={"./blog/" + slug} className="button alt">{readmore}</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BlogComponent;
