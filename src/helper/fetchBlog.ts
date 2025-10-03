export const fetchBlog = async (id?: string) => {
  const url = id
    ? `${process.env.BACKEND_URL}/blog/${id}`
    : `${process.env.BACKEND_URL}/blog`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return res.json();
};
