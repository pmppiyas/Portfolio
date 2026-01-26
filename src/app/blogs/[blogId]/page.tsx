/* eslint-disable @next/next/no-async-client-component */
'use client';
import { techBlogsDemo } from '@/assets/assets';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BiLike } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { IoMdShareAlt } from 'react-icons/io';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const resolvedParams = await params;
  const blogId = resolvedParams.blogId;

  const blog = techBlogsDemo.find((b) => b.id === Number(blogId));

  const otherBlogs = techBlogsDemo
    .filter((b) => b.id !== Number(blogId))
    .slice(0, 5);

  if (!blog) return notFound();

  return (
    <div className="bg-[#020617] min-h-screen text-white pt-24 lg:pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Back Button */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 mb-6 transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Blogs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: Main Content */}
          <main className="lg:col-span-8 space-y-8">
            <header className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 transition-all rounded-md"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white/95">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm py-4 border-y border-white/5">
                <span className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-default">
                  <User size={16} className="text-cyan-500" /> {blog.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-cyan-500" />
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <BsEye size={16} className="text-cyan-500" /> {blog.views}{' '}
                  Views
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <Image
                alt={blog.title}
                src={blog.cover || blog.thumbnail}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Article Body */}
            <article className="prose prose-invert lg:prose-xl max-w-none text-gray-300 leading-relaxed font-light">
              <p className="whitespace-pre-line text-lg md:text-xl selection:bg-cyan-500/30">
                {blog.content}
              </p>
            </article>

            {/* Social Actions */}
            <div className="flex items-center justify-between py-6 border-t border-white/10 mt-12">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-cyan-500/50 px-5 py-2.5 rounded-full transition-all group">
                  <BiLike className="text-xl group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-medium">Helpful (10)</span>
                </button>
                <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-cyan-500/50 px-5 py-2.5 rounded-full transition-all group">
                  <IoMdShareAlt className="text-xl group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          </main>

          {/* RIGHT: Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            <div className="sticky top-32 space-y-8">
              {/* Other Blogs Section */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-cyan-500 rounded-full" /> Related
                  Posts
                </h3>
                <div className="space-y-6">
                  {otherBlogs.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blogs/${item.id}`}
                      className="group flex gap-4 items-start"
                    >
                      <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h4 className="text-sm font-semibold leading-snug group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                          {new Date(item.createdAt).toDateString()}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-linear-to-br from-cyan-500/10 via-transparent to-purple-500/5 p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
                <h3 className="text-lg font-bold mb-2">
                  Subscribe to Tech Updates
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Get the latest AI and full-stack development insights directly
                  to your inbox.
                </p>
                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#020617] py-3 rounded-xl font-bold shadow-[0_10px_20px_rgba(6,182,212,0.2)] transition-all active:scale-95">
                  Subscribe Now
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
