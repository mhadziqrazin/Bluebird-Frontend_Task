'use server'

import { Data } from '@/components/interface'

export async function getDetail(id: number, vehicle: string) {
  if (!id || !vehicle) {
    return undefined
  }

  const res = await fetch('https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles', {
    next: { revalidate: 900 }
  })

  if (!res.ok) {
    return undefined
  }

  const data: Data = await res.json()
  for (let i = 0; i < data.type.length; i++) {
    if (data.type[i].id === id) {
      const car = data.type[i].car_type.find(
        (item) => item.vehicle === vehicle.split('+').join(' ')
      )
      if (car !== undefined) {
        return {
          ...car,
          id: data.type[i].id
        }
      }
    }
  }

  return undefined
}
