import Image from 'next/image'
import { CarStore } from '../interface'
import Link from 'next/link'
import { LikeButton } from './LikeButton'

interface VehicleCardHomeProps {
  car: CarStore
}

export const VehicleCardHome: React.FC<VehicleCardHomeProps> = ({ car }) => {
  return (
    <Link
      href={{
        pathname: '/detail',
        query: {
          id: car.id,
          vehicle: car.vehicle
        }
      }}
      className='relative min-w-[250px] flex flex-col items-center rounded-2xl border-[2px] border-black/5 shadow-xl overflow-hidden hover:bg-black/5 transition-colors duration-200'
    >
      <Image
        width={250}
        height={250}
        src={car.imageURL.split(' ').join('')}
        alt={car.vehicle}
        unoptimized
        className='p-4'
      />
      <p className='px-2 py-6 text-center text-xl font-medium text-black/60'>{car.vehicle}</p>
      <div className='absolute top-2 right-2'>
        <LikeButton car={car} />
      </div>
    </Link>
  )
}
