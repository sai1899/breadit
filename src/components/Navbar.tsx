import Link from "next/link"
import { Icons } from "./Icon"
import { buttonVariants } from "./ui/Button"




const Navbar = () =>{
    return(
        <div className="bg-zinc-100 fixed inset-x-0 border-b h-fit z-[10] border-zinc-[300]">
            <div className="container max-w-7xl py-2 flex items-center justify-between gap-2">
                <Link href='/' className='flex gap-2 items-center'>
                <Icons.logo className="h-8 w-8 sm:h-6 sm-w-6"/> 
                <p className="hidden text-zinc-700 text-sm font-medium md:block">BreadIt</p>
                </Link>
                <Link href="/Sign-in" className={buttonVariants()}>Sign In</Link>
            </div>
            
        </div>
    )
}

export default Navbar