import { groq, type PortableTextBlock } from "next-sanity";
import type { Image } from "sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;
export interface SettingsQueryResponse {
  title?: string;
  description?: PortableTextBlock[];
  footer?: PortableTextBlock[];
  ogImage?: (Image & { alt?: string; metadataBase?: string }) | null;
}

export interface Author {
  name: string;
  picture?: (Image & { alt?: string | null }) | null;
}
export interface Post {
  _id: string;
  status: "draft" | "published";
  title: string;
  titleHU?: string;
  titleRS?: string;
  contentHU?: PortableTextBlock[] | null;
  contentRS?: PortableTextBlock[] | null;
  content: PortableTextBlock[];
  slug: string;
  excerpt?: string | null;
  coverImage?: (Image & { alt?: string }) | null;
  date: string;
  author?: Author | null;
}

const postFields = groq`
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "nevtelenn"),
  titleHU,
  titleRS,
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const heroQuery = groq`*[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
  contentHU,
  contentRS,
  ${postFields}
}`;
export type HeroQueryResponse =
  | (Post & {
      content?: PortableTextBlock[] | null;
    })
  | null;

export const moreStoriesQuery = groq`*[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;
export type MoreStoriesQueryResponse = Post[] | null;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  contentHU,
  contentRS,
  ${postFields}
}`;
export type PostQueryResponse =
  | (Post & {
      content?: PortableTextBlock[] | null;
    })
  | null;

export interface Gallery {
  _id: string;
  nameHU: string;
  nameRS: string;
  image?: (Image & { alt?: string }) | null;
  date: string;
}

const galleryFields = groq`
    _id,
    nameHU,
    nameRS,
    image,
    "date": coalesce(date, _updatedAt)
  `;

// Query to fetch all gallery entries
export const galleriesQuery = groq`*[_type == "gallery"] | order(date desc, _updatedAt desc) {
    ${galleryFields}
  }`;
export type GalleriesQueryResponse = Gallery[] | null;

// Query to fetch a single gallery by ID
export const galleryByIdQuery = groq`*[_type == "gallery" && _id == $id][0] {
    ${galleryFields}
  }`;
export type GalleryByIdQueryResponse = Gallery | null;

// Query to fetch the latest gallery entry
export const latestGalleryQuery = groq`*[_type == "gallery"] | order(date desc, _updatedAt desc) [0] {
    ${galleryFields}
  }`;
export type LatestGalleryQueryResponse = Gallery | null;

// Query to fetch galleries with pagination
export const paginatedGalleriesQuery = groq`*[_type == "gallery"] | order(date desc, _updatedAt desc) [$start...$end] {
    ${galleryFields}
  }`;
export type PaginatedGalleriesQueryResponse = Gallery[] | null;
