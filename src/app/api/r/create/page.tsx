"use client"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { buttonVariants } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"

import axios, { AxiosError } from "axios"
import { useToast } from '@/components/ui/use-toast'

import { useRouter } from 'next/navigation';
import { useState } from 'react'


const page = ()=>{

    const { toast } = useToast();

    const router = useRouter();

    const [input , setInput] = useState("")

    const {mutate: createCommunity,isLoading} = useMutation({

        
   
        mutationFn: async ()=>{

            const context={
                name:input
            }

            const {data}=await axios.post('/api/subreddit',context)
            return data
        },

        onError: (err)=>{

            if(err instanceof AxiosError){
                if(err.response?.status===409){
                    return toast({
                        variant: "destructive",
                        title: "Subreddit already exists",
                        description: "Please choose a different subreddit name"
                      })
                }
                if(err.response?.status===401){
                    return toast({
                        variant: "destructive",
                        title: "Unauthorized",
                        description: "Please login to create a community"
                      })
                }
                return toast({
                    variant: "destructive",
                    title: "cannot create response",
                    description: "Please login to create a community"
                })
            }

            if(err){

                return toast({
                    variant: "destructive",
                    title: "There is a error",
                    description: "Could not create subreddit"
                })

            }

            

        },

        onSuccess: (data)=>{
            router.push(`/r/${data}`);
        }


    })

    return(
        <div className="grid md:grid-cols-3 bg-white-300">
            <div className="flex flex-col space-y-3 border p-4 rounded-lg">
            <h1 className="font-bold text-3xl border-b-2 border-gray-300 pb-2">Create community</h1>
            <h3 className="text-2xl font-semibold">Name</h3>
            <p>Community names including capitalization cannot be changed</p>
            <Input type="email" placeholder="/r" className="max-w-xl" onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button className={buttonVariants()} onClick={()=>createCommunity()}>Create Community</button>
            </div>
        </div>
    )
}


export default page