import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'


export const metadata: Metadata = {
  title: 'Motor Marvel',
  description: 'Discover the bestcars in the world',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" href="/icon.ico" type="image/x-icon" sizes="any" />
      </head>

      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
