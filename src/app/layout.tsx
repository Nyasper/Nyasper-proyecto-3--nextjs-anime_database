export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-slate-900 to-slate-950 pt-16 min-h-screen`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}



import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anime Database',
  description: '',
}

//Components
import Navbar from './navbar'