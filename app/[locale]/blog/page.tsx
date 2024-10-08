import Link from "next/link";
import { Suspense } from "react";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";
import MoreStories from "./more-stories";
import Onboarding from "./onboarding";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";

import { cookies } from "next/headers";
import {
  HeroQueryResponse,
  MoreStoriesQueryResponse,
  Post,
  SettingsQueryResponse,
  heroQuery,
  moreStoriesQuery,
  settingsQuery,
} from "@/sanity/lib/queries";
import { useEditState } from "sanity";
import BlogComponent from "./BlogComponent";
import { useTranslations } from "next-intl";

function Intro(props: { title: string | null | undefined; description: any }) {
  const title = props.title || demo.title;
  const description = props.description?.length ? props.description : demo.description;
  return (
    <section className="mt-16 mb-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
      {/* <h1 className="text-balance text-6xl font-bold leading-tight tracking-tighter lg:pr-8 lg:text-8xl">
        {title || demo.title}
      </h1> */}
      {/* <Link href="/" className="group mb-5 block">
          <p>Home</p>
        </Link>
        <Link href="/blog" className="group mb-5 block">
          <p>Blogok</p>
        </Link> */}
      <h2 className="text-pretty mt-5 text-center text-lg lg:pl-8 lg:text-left"></h2>
    </section>
  );
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<Post, "title" | "coverImage" | "date" | "excerpt" | "author" | "slug">) {
  return (
    <article>
      <Link className="group mb-8 block md:mb-16" href={`/blog/${slug}`}>
        <CoverImage image={coverImage} priority />
      </Link>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="text-pretty mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && <p className="text-pretty mb-4 text-lg leading-relaxed">{excerpt}</p>}
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </article>
  );
}

export default async function Page() {
  const cookieStore = cookies();
  let currentLang = cookieStore.get("NEXT_LOCALE")?.value || "rs";
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResponse>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResponse>({ query: heroQuery }),
  // ]);

  const data = await sanityFetch<MoreStoriesQueryResponse>({
    query: moreStoriesQuery,
    params: { skip: "0", limit: 100 },
  });

  return (
    <>
      <section id="banner">
        <h2>Blog</h2>
      </section>
      <section id="main" className="container">
        <div className="row">
          {data?.map((e) => {
            return (
              <BlogComponent
                key={e.date}
                author={e.author}
                converImage={e.coverImage}
                date={e.date}
                excerpt={e.excerpt}
                slug={e.slug}
                title={currentLang == "hu" ? e.titleHU : e.titleRS}
                readmore={currentLang == "hu" ? "Olvass tovább" : "Pročitaj više"}
              />
            );
          })}
          {/* <div className="col-6 col-12-narrower">
            <section className="box special">
              <span className="image featured">
                <img src="images/pic02.jpg" alt="" />
              </span>
              <h3>Első blog posz</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum
                phasellus iaculis accumsan dolore magna aliquam veroeros.
              </p>
              <ul className="actions special">
                <li>
                  <a href="blog.html" className="button alt">
                    Olvass tovább
                  </a>
                </li>
              </ul>
            </section>
          </div> */}
        </div>
      </section>
    </>
    // <div className="container mx-auto px-5">
    //   <Intro title={settings?.title} description={settings?.description} />
    //   {heroPost ? (
    //     <HeroPost
    //       title={currentLang == "hu" ? heroPost.titleHU! : heroPost.titleRS!}
    //       slug={heroPost.slug}
    //       coverImage={heroPost.coverImage}
    //       excerpt={heroPost.excerpt}
    //       date={heroPost.date}
    //       author={heroPost.author}
    //     />
    //   ) : (
    //     <Onboarding />
    //   )}
    //   {heroPost?._id && (
    //     <aside>
    //       <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
    //         {currentLang == "hu" ? "További blogok" : "Više postova"}
    //       </h2>
    //       <Suspense>
    //         <MoreStories skip={heroPost._id} limit={100} />
    //       </Suspense>
    //     </aside>
    //   )}
    // </div>
  );
}
