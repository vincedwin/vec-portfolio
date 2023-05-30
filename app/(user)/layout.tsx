import { NavbarMain } from '@/components'
import '../../style/globals.css'
import { Inter } from 'next/font/google'
import PageWrapper from './pagewrapper'
import Head from './head'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'vec portfoilo',
  openGraph: {
    images:['https://vecvec.vercel.app/api/og']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#f0f0f0] scrollbar-hide'>
      <PageWrapper>
        <div>
          <NavbarMain/>
          {children}
        </div>
      </PageWrapper>
      </body>
    </html>
  )
}
