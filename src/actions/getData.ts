'use server'

import { Data } from '@/components/interface'

export async function getData() {
  const res = await fetch('https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles', {
    next: { revalidate: 900 }
  })

  if (!res.ok) {
    throw new Error('Something went wrong when fetching data')
  }

  const data: Data = await res.json()
  return data
}
