import { buttonVariants } from "@/components/ui/Button"
import Signin from "@/components/ui/Signin"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {FC} from "react"

const page:FC=()=>{
    return(
        <div className="absolute inset-0">
            <div className="flex flex-col justify-center h-full mx-auto max-w-2xl gap-20">
                 <Link href='/' className={cn(buttonVariants({variant:'ghost'}),'self-start -mt-20')}
                 >Home</Link>
                 <Signin/>
                
            </div>
            
        </div>
    )
}

export default page