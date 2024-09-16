"use server"

import { prisma } from "@/lib/db"
import { useSession, signIn, signOut } from "next-auth/react"


import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";


export async function POST(req: Request){

    console.log("in post")

    // const session = useSession()

    const session = await getServerSession(authOptions);

    console.log("the session value is",session)

    try{

        if(!session){
            return new Response("Unauthorized",{status:401})
        }

        const body = await req.json()

        const {name}=body

        console.log("name is",body)


        const subredditExists = await prisma.subreddit.findFirst({
            where:{
                name:name
            }
        }

        )

        if(subredditExists){
            return new Response("subreddit exists",{status:409})
        }

        const userId= await prisma.account.findFirst({
            where:{
                email:session.data?.email
            }
        })

        console.log("the user id is",userId)

        const subreddit = await prisma.subreddit.create({
            data:{
                name:name,
                creatirId:userId?.userId
            }
        })

        console


        return new Response(subreddit.name)



    }
    catch(error){

        if(error){

            return new Response("could not create subreddit",{status:500})

        }

    }

}