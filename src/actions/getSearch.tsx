'use server'

import { CarStore, Data } from '@/components/interface'

export async function getSearch(vehicle: string) {
  if (!vehicle) {
    return undefined
  }

  const res = await fetch('https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles', {
    next: { revalidate: 900 }
  })

  if (!res.ok) {
    return []
  }

  const data: Data = await res.json()
  const cars: CarStore[] = []
  const regex = new RegExp(vehicle.split('+').join(' '), 'i')
  for (let i = 0; i < data.type.length; i++) {
    const car = data.type[i].car_type.find((item) => regex.test(item.vehicle))
    if (car !== undefined) {
      cars.push({
        ...car,
        id: data.type[i].id
      }
    )}
  }

  return cars
}

