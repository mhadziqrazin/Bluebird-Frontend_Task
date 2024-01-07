'use client'

import { useUser } from '@/stores'
import { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { CarType } from '../interface'

interface BookButtonProps {
  car: CarType
}

export const BookButton: React.FC<BookButtonProps> = ({ car }) => {
  const { books, addBook, removeBook } = useUser()
  const [booked, setBooked] = useState<boolean>(false)

  const handleLike = (e: any) => {
    e.preventDefault()
    if (!booked) addBook(car)
    else removeBook(car)
  }

  useEffect(() => {
    setBooked(books.find((item) => item.vehicle === car.vehicle) !== undefined)
  }, [books])

  return (
    <button onClick={handleLike} className='text-sm sm:text-lg font-medium'>
      {booked ?
        <div className='flex gap-[2px] px-4 py-[2px] rounded-full items-center bg-black/40 text-white'>
          <p>Cancel book</p>
          <MdOutlineClose size={20} />
        </div> :
        <p className='px-4 py-[2px] rounded-full bg-secondary text-white'>
          Book
        </p>
      }
    </button>
  )
}

