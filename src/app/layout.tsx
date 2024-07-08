import '@/styles/globals.css'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { Background } from '@/components/background'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Providers from './providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

type RootLayoutProps = {
  children: React.ReactNode
}



export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'bg-background font-sans antialiased scroll-smooth',
          fontSans.variable
        )}
      >
        <Providers>
          <Background />
          <Toaster richColors />

          <Header />
          <main className='relative mx-auto mb-16 max-w-6xl px-4 md:px-8 py-24'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
