import { Badge } from "@/components/ui/badge";
import { IBlog } from "@/types";
import Image from "next/image";
import Link from 'next/link';
import { BiLike } from "react-icons/bi";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";

export const BlogCard = ({
  id,
  title,
  content,
  tags,
  views,
}: IBlog) => {
  return (
    <Link href={`/blog/${id}`} >
      <div className="w-full shadow-lg dark:bg-slate-800 bg-white rounded overflow-hidden  flex flex-col">
        <Image src="https://i.ibb.co.com/fV500sDk/download-2.jpg" alt={title} height={150} width={400} layout="responsive"
        />

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <h2 className="font-semibold text-xl text-foreground line-clamp-1">
              {title}
            </h2>

            <BsThreeDotsVertical className="text-[#424242] dark:text-[#abc2d3] ..." />
          </div>

          <div className="px-4 pb-2 text-[#424242] dark:text-[#abc2d3] text-sm flex-1">
            {content.length > 120 ? (
              <>
                {content.slice(0, 120)}...
                <Link href={`/blog/${id}`} className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  Read more
                </Link>
              </>
            ) : (
              content
            )}
          </div>

          <div className="mt-auto">
            <div className="flex justify-between items-center px-4 py-2 text-muted-foreground">
              <div className="flex gap-4">
                <span className="flex items-center gap-1">
                  <BsEye className="text-lg" /> {views}
                </span>
                <span className="flex items-center gap-1">
                  <BiLike className="text-lg" /> 10
                </span>
              </div>
              <IoMdShareAlt className="text-lg cursor-pointer" />
            </div>

            <div className="flex flex-wrap gap-2 px-4 pb-4">
              {tags.map((tag, i) => (
                <Badge key={i} variant="secondary">#{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};