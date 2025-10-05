import { Button } from '@/components/ui/button';
import { getUserSession } from '@/helper/getUserSession';
import Image from "next/image";
import Link from "next/link";

export default async function DashboardLayout() {


  const session = await getUserSession();



  const user = session?.user;

  return (
    <div>
      <div>
        <Link href="/">     <Button>Home</Button></Link>
      </div>
      <div className='h-screen flex flex-col items-center justify-center'>

        <h2 className='text-xl font-medium'>Name: <span>{user?.name}</span></h2>
        <h3>Email: <span>{user?.email}</span></h3>
        <Image className='rounded-full' alt='profile' src={user?.image} width={100} height={100}></Image>
      </div>
   </div>
  )
}
