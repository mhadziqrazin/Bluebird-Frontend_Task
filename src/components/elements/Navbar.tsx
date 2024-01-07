'use client'

import { useState, useEffect } from 'react'
import { FaCarSide } from 'react-icons/fa'
import { MdOutlineMenu, MdClose } from 'react-icons/md'
import { useOutsideClick } from '@/hooks'
import { Search } from './Search'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

interface NavMenu {
  name: string
  href: string
}

const menus: NavMenu[] = [
  { name: 'Home', href: '/' },
  { name: 'Wishlist', href: '/wishlist' },
  { name: 'My Book', href: '/mybook' }
]

export const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<string>('Home')
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setVisible(openMenu)
  }, [openMenu])

  useEffect(() => {
    if (pathname === '/wishlist') setMenu('Wishlist')
    else if (pathname === '/mybook') setMenu('My Book')
    else if (pathname === '/') setMenu('Home')
  }, [pathname])

  const handleCloseMenu = () => {
    setVisible(false)
    setTimeout(() => setOpenMenu(false), 200)
  }

  const menuRef = useOutsideClick(handleCloseMenu)

  const handleMenuButton = (opt: NavMenu) => {
    setMenu(opt.name)
    router.push(opt.href)
  }

  return (
    <nav className='bg-primary z-10'>
      <div className='relative flex items-center justify-between container mx-auto px-4 py-4 text-white'>
        <a href='/'>
          <FaCarSide size={25} />
        </a>
        <ul className='hidden sm:flex gap-6 font-medium'>
          <li className={`${menu === 'Home' ? 'bg-secondary rounded-full' : ''} px-4 py-[3px]`}>
            <Link href='/'>Home</Link>
          </li>
          <li className={`${menu === 'Wishlist' ? 'bg-secondary rounded-full' : ''} px-4 py-[3px]`}>
            <Link href='/wishlist'>Wishlist</Link>
          </li>
          <li className={`${menu === 'My Book' ? 'bg-secondary rounded-full' : ''} px-4 py-[3px]`}>
            <Link href='/mybook'>My Book</Link>
          </li>
        </ul>
        <div ref={menuRef} className='relative flex sm:hidden justify-center'>
          <button onClick={() => setOpenMenu(!openMenu)}>
            <MdOutlineMenu size={25} />
          </button>
          {openMenu && (
            <div
              className={`fixed w-[270px] flex sm:hidden flex-col items-end gap-4 top-0 right-0 h-full p-4 bg-primary ${
                visible ? 'translate-x-0' : 'translate-x-full'
              } transition-all duration-200 ease-out`}
            >
              <button onClick={handleCloseMenu}>
                <MdClose size={25} />
              </button>
              <Search />
              <ul className='w-full flex flex-col gap-2'>
                {menus.map((opt) => (
                  <li
                    key={opt.name}
                    className={`${
                      menu === opt.name ? 'bg-secondary' : ''
                    } w-full px-4 py-[3px] rounded-full`}
                  >
                    <button onClick={() => handleMenuButton(opt)} className='w-full text-left'>
                      {opt.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className='hidden sm:block'>
          <Search />
        </div>
      </div>
    </nav>
  )
}
