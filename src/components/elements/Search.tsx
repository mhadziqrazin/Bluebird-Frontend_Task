import { MdSearch } from 'react-icons/md'
import { useState } from "react"

export const Search: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <div className='relative w-full h-[30px] flex justify-end items-center gap-2'>
      {openSearch &&
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className='text-primary rounded-full grow px-4 py-[3px] sm:absolute sm:right-[29px] outline-none'
        />
      }
      <button onClick={() => setOpenSearch(true)}>
        <MdSearch size={25} />
      </button>
    </div>
  )
}

