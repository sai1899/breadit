
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers';
import SessionValue from '@/components/Sessionvalue';
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'


import { Inter } from 'next/font/google'



export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

const inter = Inter({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('bg-white text-slate-500  antialiased',inter.className)}>
      <Providers>
      <body className='min-h-screen bg-slate-50 antialiased'>
      <SessionValue>
      <Navbar/> 
      <div className='container max-w-7xl mx-auto h-full pt-[7rem]'>
        {children}
      </div>
      <Toaster/>
      </SessionValue>
      </body>
      </Providers>
    </html>
  )
}
