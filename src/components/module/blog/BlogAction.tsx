'use client';

import { DeleteModal } from '@/components/module/blog/DeleteModal';
import { Button } from "@/components/ui/button";
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function ClientRowActions({ blogId }: { blogId: string | number }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/delete/${blogId}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (!result.success) {
        toast.error("Delete failed ❌");
        return;
      }
      
      toast.success("Blog deleted successfully ✅");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Link href={`/blogs/${blogId}`}>
        <Button size="icon" variant="outline">
          <Eye size={16} />
        </Button>
      </Link>

      <Link href={`/blogs/update/${blogId}`}>
        <Button size="icon" variant="outline">
          <Edit size={16} />
        </Button>
      </Link>

      <DeleteModal
        onConfirm={handleDelete}
        isLoading={isDeleting}
        trigger={
          <Button size="icon" variant="destructive">
            <Trash2 size={16} />
          </Button>
        }
      />
    </>
  );
}
