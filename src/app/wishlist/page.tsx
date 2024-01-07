'use client'

import { VehicleCardUser } from "@/components/elements/VehicleCardUser"
import { useUser } from "@/stores"
import { useMemo } from "react"

export default function Wishlist() {
  const { likes, removeLike } = useUser()

  const totalPrice = useMemo(() => {
    let count = 0
    for (let i = 0; i < likes.length; i++) {
      const price = Number(likes[i].price.split(' ')[1].split('.').join(''))
      count += price
    }
    return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(count)
  }, [likes])

  return (
    <main className='container mx-auto px-4 py-10 sm:py-20 flex flex-col gap-10 sm:gap-20 justify-center items-center'>
      <h1 className='text-3xl font-semibold text-center max-w-[350px] sm:max-w-fit text-primary'>
        My Wishlist
      </h1>
      <section className='flex flex-col gap-8'>
        {likes.map((car) => (
          <VehicleCardUser key={car.vehicle} car={car} deleteAction={() => removeLike(car)} />
        ))}
        <p className='w-fit self-end p-4 rounded-xl bg-secondary font-light text-white'>
        Total price: <b className='font-semibold'>{totalPrice}</b>
        </p>
      </section>
    </main>
  )
}
