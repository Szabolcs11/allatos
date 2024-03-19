import type { Metadata, ResolvingMetadata } from "next";
import { groq } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Avatar from "../../avatar";
import CoverImage from "../../cover-image";
import DateComponent from "../../date";
import MoreStories from "../../more-stories";
import PortableText from "../../portable-text";

import { sanityFetch } from "@/sanity/lib/fetch";
import {
  PostQueryResponse,
  SettingsQueryResponse,
  postQuery,
  settingsQuery,
} from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import * as demo from "@/sanity/lib/demo";
import { cookies } from "next/headers";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return sanityFetch<{ slug: string }[]>({
    query: groq`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
    const cookieStore = cookies();
    const currentLang = cookieStore.get("NEXT_LOCALE")?.value || "hu"
  const post = await sanityFetch<PostQueryResponse>({
    query: postQuery,
    params,
    stega: false,
  });
  // console.log(post);
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: currentLang == "hu" ? post?.titleHU : post?.titleRS,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function PostPage({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch<PostQueryResponse>({
      query: postQuery,
      params,
    }),
    sanityFetch<SettingsQueryResponse>({
      query: settingsQuery,
    }),
  ]);

  if (!post?._id) {
    return notFound();
  }
  const cookieStore = cookies();
  const currentLang = cookieStore.get("NEXT_LOCALE")?.value || "hu"

  console.log(cookieStore.get("NEXT_LOCALE")?.value);

  const title = currentLang == "hu" ? post.titleHU : post.titleRS;
  const content = currentLang == "hu" ? post.contentHU : post.contentRS;
  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          {settings?.title || demo.title}
        </Link>
      </h2>
      <article>
        <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
          {title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {post.author && (
            <Avatar name={post.author.name} picture={post.author.picture} />
          )}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage image={post.coverImage} priority />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <div className="mb-4 text-lg">
              <DateComponent dateString={post.date} />
            </div>
          </div>
        </div>
        {post.contentHU?.length && (
          // @ts-ignore
          <PortableText className="mx-auto max-w-2xl" value={content} />
        )}
      </article>
      <aside>
        <hr className="border-accent-2 mb-24 mt-28" />
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
          Recent Stories
        </h2>
        <Suspense>
          <MoreStories skip={post._id} limit={2} />
        </Suspense>
      </aside>
    </div>
  );
}
