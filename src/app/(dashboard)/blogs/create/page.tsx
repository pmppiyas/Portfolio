'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BlogInput, blogSchema } from '@/schemas/blog';
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function BlogCreatePage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<BlogInput>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      thumbnail: "https://i.ibb.co/fV500sDk/download-2.jpg", // default thumbnail
    },
  });

  useEffect(() => {
    if (session?.user?.name) {
      setValue("author", session.user.name);
    }
  }, [session, setValue]);

  const onSubmit = async (data: BlogInput) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!result.success) {
        toast.error("Failed to create blog ❌");
        return;
      }

      toast.success("Blog created successfully 🎉");
      router.push("/blogs");
    } catch (err) {
      toast.error("Something went wrong ⚠️");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto p-6">
      <div className="space-y-1">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Enter blog title" {...register("title")} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          placeholder="Author"
          {...register("author")}
          disabled
        />
        {errors.author && <p className="text-red-500">{errors.author.message}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="thumbnail">Thumbnail URL</Label>
        <Input
          id="thumbnail"
          placeholder="Thumbnail URL"
          {...register("thumbnail")}
        />
        {errors.thumbnail && <p className="text-red-500">{errors.thumbnail.message}</p>}
      </div>

      <div className="space-y-1">
        <Label htmlFor="content">Content</Label>
        <Textarea id="content" placeholder="Write your blog content..." {...register("content")} />
        {errors.content && <p className="text-red-500">{errors.content.message}</p>}
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Blog"}
      </Button>
    </form>
  );
}
