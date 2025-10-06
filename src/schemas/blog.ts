import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  author: z.string().min(3, "Title must be at least 3 characters"),
  thumbnail: z.string().url("Thumbnail must be a valid URL").optional(),
  content: z.string().min(10, "Content must be at least 10 characters"),
});

export type BlogInput = z.infer<typeof blogSchema>;
