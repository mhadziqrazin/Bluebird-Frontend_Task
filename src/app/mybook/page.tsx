'use client'

import { VehicleCardUser } from '@/components/elements/VehicleCardUser'
import { useUser } from '@/stores'
import { useMemo } from 'react'

export default function MyBook() {
  const { books, removeBook } = useUser()

  const totalPrice = useMemo(() => {
    let count = 0
    for (let i = 0; i < books.length; i++) {
      const price = Number(books[i].price.split(' ')[1].split('.').join(''))
      count += price
    }
    return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(count)
  }, [books])

  return (
    <main className='container mx-auto px-4 py-10 sm:py-20 flex flex-col gap-10 sm:gap-20 justify-center items-center'>
      <h1 className='text-3xl font-semibold text-center max-w-[350px] sm:max-w-fit text-primary'>
        My Booked Vehicles
      </h1>
      {books.length === 0 && (
        <p className='text-xl font-medium text-secondary'>You haven&apos;t book any car</p>
      )}
      <section className='flex flex-col gap-8'>
        {books.map((car) => (
          <VehicleCardUser key={car.vehicle} car={car} deleteAction={() => removeBook(car)} />
        ))}
        <p className='w-fit self-end p-4 rounded-xl bg-secondary font-light text-white'>
          Total price: <b className='font-semibold'>{totalPrice}</b>
        </p>
      </section>
    </main>
  )
}
