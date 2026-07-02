import { profile } from "@/data/profile";

export const siteUrl =
  process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://kenzotanougast.com";

export function getPersonJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: siteUrl,
    image: `${siteUrl}${profile.photo}`,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nanterre",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    sameAs: [profile.social.linkedin, profile.social.github],
  };
}
