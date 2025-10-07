import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { fetchBlog } from "@/helper/fetchBlog";
import { IBlog } from "@/types";
import Image from "next/image";
import { notFound } from 'next/navigation';
import { BiLike } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";


export const generateStaticParams = async () => {
  try {
    const data = await fetchBlog();
    const blogs: IBlog[] = data.data || [];

    return blogs.slice(0, 6).map((blog) => ({
      blogId: blog.id.toString(),
    }));
  } catch (err) {
    console.error("Failed to fetch blogs for static params:", err);
    return [];
  }
};


export async function generateMetadata({ params }: { params: { blogId: string } }) {
  try {
    if (!params?.blogId) return { title: "Blog || Prisma Blog" };
    const data = await fetchBlog(params.blogId);
    const blog: IBlog = data.data;

    return {
      title: `${blog.title} || Prisma Blog`,
      description: blog?.content.slice(0, 160),
    };
  } catch (err) {
    console.error("Failed to fetch blog metadata:", err);
    return { title: "Blog || Prisma Blog" };
  }
}

interface Props {
  params: { blogId: string };
}

export default async function BlogDetail({ params }: Props) {
  if (!params?.blogId) {
    notFound();
  }
  const blogId = params?.blogId ?? 1;
  const data = await fetchBlog(blogId);
  const blog: IBlog = data.data;

  if (!blog) return notFound();


  return (
    <div className="mx-auto px-4 py-10 space-y-6 pt-20 lg:pt-28 bg-custom text-white">
      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight">{blog?.title}</h1>

      {/* Meta */}
      <div className="flex items-center justify-between text-sm">
        <time dateTime={new Date(blog?.createdAt).toISOString()}>
          {new Date(blog?.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <div className="flex flex-wrap gap-2 px-4 pb-4">
          {blog.tags.map((tag, i) => (
            <Badge key={i} variant="secondary">#{tag}</Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Thumbnail */}
      {blog.thumbnail && <Image
        alt={blog?.title}
        src={blog.thumbnail || "https://via.placeholder.com/800x400"}
        width={900}
        height={400}
        className="rounded-md object-cover w-full h-64 border-2"
      />}

      {/* Content */}
      <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none">
        <p>{blog?.content}</p>
      </div>

      <hr />

      {/* Footer Info */}
      <div className="flex justify-between text-sm text-muted-background">
        <p>
          <span className="font-medium">Author:</span> {blog?.author}
        </p>
        <div className='flex  gap-2'>
          <p>
            <span className="flex items-center gap-1">
              <BsEye className="text-lg" /> {blog?.views}
            </span>
          </p>
          <p><span className="flex items-center gap-1">
            <BiLike className="text-lg" /> 10
          </span></p>
          <IoMdShareAlt className="text-lg cursor-pointer" /></div>
      </div>

    </div>
  );
}
