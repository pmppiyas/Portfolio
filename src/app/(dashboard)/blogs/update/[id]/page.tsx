'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function UpdateBlogPage() {
  const router = useRouter();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    author: "Prince Mahmud Piyas12",
    thumbnail: "https://i.ibb.co/fV500sDk/download-2.jpg",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`);
        const { data } = await res.json();

        setForm({
          title: data.title || "",
          author: data.author || "Unknown Author",
          thumbnail: data.thumbnail || "https://i.ibb.co/fV500sDk/download-2.jpg",
          content: data.content || "",
        });
      } catch (err) {
        toast.error("Failed to load blog");
        console.error(err);
      }
    };

    if (id) fetchBlog();
  }, [id]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/update/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();

      if (!result.success) {
        toast.error("Update failed ❌");
        return;
      }

      toast.success("Blog updated successfully 🎉");
      router.push(`/blogs/${id}`);
    } catch (err) {
      toast.error("Something went wrong ⚠️");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6 p-6">
      <h1 className="text-2xl font-bold">Update Blog</h1>

      <div className="space-y-4">
        {/* Title */}
        <div className="space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Blog title"
          />
        </div>

        {/* Author (disabled) */}
        <div className="space-y-1">
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            name="author"
            value={form.author}
            disabled
          />
        </div>

        {/* Thumbnail */}
        <div className="space-y-1">
          <Label htmlFor="thumbnail">Thumbnail URL</Label>
          <Input
            id="thumbnail"
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            placeholder="Thumbnail URL"
          />
          <div className="mt-2 w-40 h-24 relative rounded overflow-hidden border border-gray-300">
            <Image
              src={form.thumbnail || "https://i.ibb.co/fV500sDk/download-2.jpg"}
              alt="Thumbnail preview"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />

          </div>
        </div>

        {/* Content */}
        <div className="space-y-1">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your blog content..."
            className="min-h-[200px]"
          />
        </div>

        {/* Update Button */}
        <Button onClick={handleUpdate} disabled={loading}>
          {loading ? "Updating..." : "Update Blog"}
        </Button>
      </div>
    </div>
  );
}
