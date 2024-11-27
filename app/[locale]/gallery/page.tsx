import { sanityFetch } from "@/sanity/lib/fetch";
import { galleriesQuery, GalleriesQueryResponse } from "@/sanity/lib/queries";
import GalleryContent from "./galleryContent";
import { cookies } from "next/headers";

async function Page(props: any) {
  const cookieStore = cookies();
  let currentLang = cookieStore.get("NEXT_LOCALE")?.value || "rs";
  const data = await sanityFetch<GalleriesQueryResponse>({
    query: galleriesQuery,
    params: { skip: "0", limit: 100 },
  });

  return (
    <>
      <div>
        <GalleryContent data={data} lang={currentLang} />
      </div>
    </>
  );
}

export default Page;
