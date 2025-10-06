import { Button } from '@/components/ui/button';
import { fetchBlog } from "@/helper/fetchBlog";
import { IBlog } from "@/types";
import { ArrowLeft, Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BlogDetailsProps = {
  params: { id: string };
};

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const { id } = params;
  const { data }: { data: IBlog } = await fetchBlog(id);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blogs</span>
          </Link>
        </div>

        <Link href={`/blogs/update/${id}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Button size="icon" variant="outline">
            <Edit size={16} />
          </Button>
        </Link>
      </div>

      {/* 🖼 Thumbnail */}
      <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-md">
        <Image
          src={data?.thumbnail || "/placeholder.png"}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 📝 Title & Author */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-muted-foreground">
          By <span className="font-medium">{data.author}</span>
        </p>
      </div>

      {/* 📄 Content */}
      <article className="prose prose-gray max-w-none">
        <p>{data.content}</p>
      </article>

      {/* 🕒 Footer */}
      <div className="text-sm text-gray-500 border-t pt-4">
        <p>Published: {new Date(data.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
