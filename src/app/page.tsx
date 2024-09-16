
"use client"

import { useSession, signIn, signOut } from "next-auth/react"

import { getServerSession } from "next-auth/next"

import { Home as HomeIcon} from 'lucide-react';
import { buttonVariants } from "@/components/ui/Button";




export default function Home() {

  const session = useSession()

  console.log("the data is",session)

  return <div className="conatiner grid md:grid-cols-3  p-3">
    <div className="flex flex-col space-y-4">
    <h1 className="font-bold text-3xl">Your Feed</h1>
    <div className="border rounded-lg p-3 space-y-4">
    <div className="flex space-x-1 items-center bg-emerald-100 p-6">
    <HomeIcon size={18} color="black"/>
    <p>Home</p>
    </div>
    <div className="flex flex-col space-y-4">
    <p>Your personal bredit homepage come here to check person community</p>
    <button className={buttonVariants()}>create communtity</button>
    </div>
    </div>
    </div>
  </div>
}
