import Image from "next/image"
import { Data } from "../interface"

interface NavCategoryProps {
  data: Data
}
export const NavCategory: React.FC<NavCategoryProps> = ({ data }) => {
  return (
    <div className='bg-secondary shadow-xl overflow-x-scroll scrollbar-hide'>
      <div className='container mx-auto flex sm:justify-center'>
        <ul className='flex gap-2 sm:gap-6 justify-center p-4 items-center'>
          {data.category.map((item) => (
            <li key={item.id} className='min-w-[135px] flex flex-col items-center rounded-xl bg-black/5 p-2 cursor-pointer hover:shadow-xl transition-shadow duration-200'>
              <Image
                width={50}
                height={50}
                src={item.imageURL.split(' ').join('')}
                alt={item.name}
              />
              <p className='text-white font-light'>
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
