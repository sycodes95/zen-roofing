import type { Metadata, ResolvingMetadata } from 'next'
import { Inter } from 'next/font/google'
import 'atropos/css'
import './globals.css'
import Header from './components/header/header'
import NextTopLoader from 'nextjs-toploader';
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ['latin'] })
import Footer from './components/footer/footer'

export let metadata: Metadata = {
  title: 'Zen Roofing Corp',
  description: 'The best roofing company in the Los Angeles Area.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html className={`${GeistSans.className}`} lang="en">
      <body className={`min-h-screen h-full w-full flex flex-col  items-center bg-white text-jet`}>
        <NextTopLoader showSpinner={false} color="#FFFFFF" />
        <div className='h-[800px] w-full absolute top-0 bg-white bg-opacity-10 -z-10'></div>
        <Header/>
        <main className='flex flex-col w-full h-full max-w-7xl grow '>{children}</main>
        <Footer />
      </body>
    </html>
  )
}