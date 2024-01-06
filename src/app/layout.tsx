import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '@/components/elements'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Hadziq | Bluebird Frontend Task',
  description: 'Bluebird Frontend Task'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        <div className='grow'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
