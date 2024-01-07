'use client'

import { MdSearch } from 'react-icons/md'
import { useState } from 'react'
import { useOutsideClick } from '@/hooks'
import { useRouter } from 'next/navigation'

export const Search: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const router = useRouter()

  const searchRef = useOutsideClick(() => setOpenSearch(false))

  const handleSearch = (e: any) => {
    e.preventDefault()
    router.push(`/search?vehicle=${searchValue}`)
  }

  return (
    <div ref={searchRef} className='relative w-full h-[30px] flex justify-end items-center gap-2'>
      {openSearch && (
        <form onSubmit={handleSearch} className='w-full'>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='w-full text-primary rounded-full grow px-4 py-[3px] sm:absolute sm:top-0 sm:right-[29px] outline-none'
          />
        </form>
      )}
      <button onClick={() => setOpenSearch(true)}>
        <MdSearch size={25} />
      </button>
    </div>
  )
}
