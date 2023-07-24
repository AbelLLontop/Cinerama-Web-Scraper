export const parseSlug = (slug: string) => {
    return slug.replace(/\s/g, "-").toLowerCase();
  };