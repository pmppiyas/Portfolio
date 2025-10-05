import { BlogCard } from '@/components/module/blog/BlogCard';
import { IBlog } from '@/types';
import { Metadata } from "next";
import { CustomHeading } from '../../../../public/Heading';

export const metadata: Metadata = {
  title: "All blogs - Prisma blog",
  description: "A blog built with Next.js, Prisma, and Tailwind CSS",
}

export default async function Blogs() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog`, {
    next: { revalidate: 10 }
  })
  const data = await res.json();
  const blogs: IBlog[] = data?.data;


  return (
    <div className="min-h-screen bg-custom text-background not-[]:py-6 md:py-8">
      <CustomHeading heading='All Blogs' />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  w-full lg:max-w-6xl  mx-auto  px-6">
        {blogs.map((blog, idx: number) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>

    </div>
  )
}
