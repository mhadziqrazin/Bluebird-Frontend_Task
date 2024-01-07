import Image from 'next/image'
import { CarStore } from '../interface'
import Link from 'next/link'
import { LikeButton } from './LikeButton'

interface VehicleCardSearchProps {
  car: CarStore
}

export const VehicleCardSearch: React.FC<VehicleCardSearchProps> = ({ car }) => {
  return (
    <Link
      href={{
        pathname: '/detail',
        query: {
          id: car.id,
          vehicle: car.vehicle
        }
      }}
      className='relative min-w-[400px] flex flex-col sm:grid sm:grid-cols-[0.75fr_1fr] items-center rounded-2xl border-[2px] border-black/5 shadow-xl overflow-hidden hover:bg-black/5 transition-colors duration-200'
    >
      <Image
        width={400}
        height={400}
        src={car.imageURL.split(' ').join('')}
        alt={car.vehicle}
        className='p-4'
      />
      <div className='p-4 self-start'>
        <p className='text-2xl font-semibold text-secondary'>{car.vehicle}</p>
        <p className='text-black/60 max-w-[400px]'>
          {car.description.join(', ')}
        </p>
      </div>
      <div className='absolute top-4 right-4'>
        <LikeButton car={car} />
      </div>
    </Link>
  )
}

