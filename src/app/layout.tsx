import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '@/components/elements'
import { Data } from "@/components/interface"

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Hadziq | Bluebird Frontend Task',
  description: 'Bluebird Frontend Task'
}

async function getData() {
  const res = await fetch('https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles')

  if (!res.ok) {
    throw new Error('Something went wrong when fetching data')
  }

  const data: Data = await res.json()
  return data
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getData()

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
