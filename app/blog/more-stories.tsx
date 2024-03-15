import Link from "next/link";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";

import { sanityFetch } from "@/sanity/lib/fetch";
import {
  MoreStoriesQueryResponse,
  moreStoriesQuery,
} from "@/sanity/lib/queries";
import { cookies } from "next/headers";

export default async function MoreStories(params: {
  skip: string;
  limit: number;
}) {
  const data = await sanityFetch<MoreStoriesQueryResponse>({
    query: moreStoriesQuery,
    params,
  });
  let cookieStore = cookies();
  const currentLang = cookieStore.get("NEXT_LOCALE")?.value || "hu"
  // const currentLang = cookies.get("NEXT_LOCALE") || "hu"
  // console.log(cookieStore.get("NEXT_LOCALE") || "hu")
  // console.log("data")
  // console.log(data);
  // console.log("----")

  return (
    <>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {data?.map((post) => {
          const { _id, slug, coverImage, excerpt, author } = post;
          const title = currentLang == "hu" ? post.titleHU : post.titleRS
          return (
            <article key={_id}>
              <Link href={`/blog/${slug}`} className="group mb-5 block">
                <CoverImage image={coverImage} priority={false} />
              </Link>
              <h3 className="text-balance mb-3 text-3xl leading-snug">
                <Link href={`/blog/${slug}`} className="hover:underline">
                  {title}
                </Link>
              </h3>
              <div className="mb-4 text-lg">
                <DateComponent dateString={post.date} />
              </div>
              {excerpt && (
                <p className="text-pretty mb-4 text-lg leading-relaxed">
                  {excerpt}
                </p>
              )}
              {author && <Avatar name={author.name} picture={author.picture} />}
            </article>
          );
        })}
      </div>
    </>
  );
}
