import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Footer, NavCategory, Navbar } from '@/components/elements'
import { getData } from '@/actions'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Hadziq | Bluebird Frontend Task',
  description: 'Bluebird Frontend Task'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getData()

  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Toaster toastOptions={{ duration: 2000 }}/>
        <Navbar />
        <NavCategory data={data} />
        <div className='grow'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
