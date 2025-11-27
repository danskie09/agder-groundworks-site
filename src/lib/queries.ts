export const heroQuery = `*[_type == "hero"][0] {
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  "backgroundImage": backgroundImage.asset->url,
  tagline
}`;

export const servicesQuery = `*[_type == "service"] | order(_createdAt asc) {
  title,
  description,
  "iconName": icon,
  "image": image.asset->url,
  details
}`;

export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  "mainImage": mainImage.asset->url,
  publishedAt,
  excerpt,
  body
}`;

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  "mainImage": mainImage.asset->url,
  publishedAt,
  excerpt,
  body
}`;
