import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { fetchBlog } from "@/helper/fetchBlog";
import { IBlog } from '@/types';
import { Edit, Eye, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogAdminTable() {
  const { data: blogs } = await fetchBlog();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">All Blogs ({blogs.length})</h1>
        <Link href="/dashboard/blogs/create">
          <Button>+ New Blog</Button>
        </Link>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Thumbnail</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog: IBlog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  <div className="w-16 h-16 relative rounded-md overflow-hidden">
                    <Image
                      src={blog.thumbnail || "/placeholder.png"}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Link href={`/blogs/${blog.id}`}>
                    <Button size="icon" variant="outline">
                      <Eye size={16} />
                    </Button>
                  </Link>
                  <Link href={`/dashboard/blogs/edit/${blog.id}`}>
                    <Button size="icon" variant="outline">
                      <Edit size={16} />
                    </Button>
                  </Link>

                  <Button size="icon" variant="destructive" disabled>
                    <Trash2 size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
