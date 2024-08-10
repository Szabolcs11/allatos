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
import { PostQueryResponse, SettingsQueryResponse, postQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/utils";
import * as demo from "@/sanity/lib/demo";
import { cookies } from "next/headers";
import { Image } from "next-sanity/image";

type Props = {
  params: { slug: string };
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
  return sanityFetch<{ slug: string }[]>({
    query: groq`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const cookieStore = cookies();
  const currentLang = cookieStore.get("NEXT_LOCALE")?.value || "hu";
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
  let currentLang = cookieStore.get("NEXT_LOCALE")?.value || "hu";

  const title = currentLang == "hu" ? post.titleHU : post.titleRS;
  const content = currentLang == "hu" ? post.contentHU : post.contentRS;
  return (
    <section id="main" className="container" style={{ marginTop: 32 }}>
      <header>
        <h2>{title}</h2>
        <p></p>
      </header>
      <div className="box">
        <span className="image featured">
          <Image
            width={400}
            height={190}
            alt={post.coverImage?.alt || ""}
            src={urlForImage(post.coverImage)?.height(1000).width(2000).url() as string}
          />
        </span>
        <h3>
          <PortableText value={content!} />
        </h3>
        {/* <p>
        Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non
        blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet
        interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit.
        Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in
        accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing
        accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet
        odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit
        ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo
        massa arcu.
      </p> */}
        <div className="row">
          {/* <div class="row-6 row-12-mobilep">
          <h3>And now a subheading</h3>
          <p>
            Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc
            integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim
            laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio
            vis praesent.
          </p>
        </div> */}
          {/* <div class="row-6 row-12-mobilep">
          <h3>And another subheading</h3>
          <p>
            Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc
            integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim
            laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio
            vis praesent.
          </p>
        </div> */}
        </div>
      </div>
    </section>

    // <div className="container mx-auto px-5">
    //   {/* <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
    //     <Link href="/" className="hover:underline">
    //       {settings?.title || demo.title}
    //     </Link>
    //   </h2> */}
    //   <article>
    //     <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
    //       {title}
    //     </h1>
    //     <div className="hidden md:mb-12 md:block">
    //       {post.author && (
    //         <Avatar name={post.author.name} picture={post.author.picture} />
    //       )}
    //     </div>
    //     <div className="mb-8 sm:mx-0 md:mb-16">
    //       <CoverImage image={post.coverImage} priority />
    //     </div>
    //     <div className="mx-auto max-w-2xl">
    //       <div className="mb-6 block md:hidden">
    //         {post.author && (
    //           <Avatar name={post.author.name} picture={post.author.picture} />
    //         )}
    //       </div>
    //       <div className="mb-6 text-lg">
    //         <div className="mb-4 text-lg">
    //           <DateComponent dateString={post.date} />
    //         </div>
    //       </div>
    //     </div>
    //     {post.contentHU?.length && (
    //       // @ts-ignore
    //       <PortableText className="mx-auto max-w-2xl" value={content} />
    //     )}
    //   </article>
    //   <aside>
    //     <hr className="border-accent-2 mb-24 mt-28" />
    //     <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
    //       {currentLang == "hu" ? "Utóbbi blogok" : "Nedavni blogovi"}
    //     </h2>
    //     <Suspense>
    //       <MoreStories skip={post._id} limit={2} />
    //     </Suspense>
    //   </aside>
    // </div>
  );
}
