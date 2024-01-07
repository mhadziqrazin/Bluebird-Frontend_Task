'use client'

import Image from 'next/image'
import { Data } from '../interface'
import { FaChevronDown } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useData } from '@/stores'

interface NavCategoryProps {
  data: Data
}

export const NavCategory: React.FC<NavCategoryProps> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false)
  const { setData } = useData()

  useEffect(() => {
    setData(data)
  }, [])

  return (
    <div className='flex flex-col gap-2 py-4 bg-secondary shadow-xl'>
      {open && (
        <div className='overflow-x-scroll scrollbar-hide transition-transform duration-200'>
          <div className='container mx-auto flex sm:justify-center'>
            <ul className='flex gap-2 sm:gap-6 justify-center px-4 items-center'>
              {data.category?.map((item) => (
                <li
                  key={item.id}
                  className='min-w-[125px] flex flex-col items-center rounded-xl bg-black/5 p-2 cursor-pointer hover:bg-black/10 transition-colors duration-200'
                >
                  <Image
                    width={40}
                    height={40}
                    src={item.imageURL.split(' ').join('')}
                    alt={item.name}
                    unoptimized
                  />
                  <p className='text-sm text-white font-light'>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className='flex justify-center'>
        <button onClick={() => setOpen(!open)} className='flex gap-[3px] items-center text-white'>
          <p>Category</p>
          <div className={`${open ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}>
            <FaChevronDown size={12} />
          </div>
        </button>
      </div>
    </div>
  )
}
