import Link from 'next/link'
import { CarStore } from '../interface'
import Image from 'next/image'
import { DeleteButton } from './DeleteButton'

interface VehicleCardUserProps {
  car: CarStore
  deleteAction: () => void
}

export const VehicleCardUser: React.FC<VehicleCardUserProps> = ({ car, deleteAction }) => {
  return (
    <Link
      href={{
        pathname: '/detail',
        query: {
          id: car.id,
          vehicle: car.vehicle
        }
      }}
      className='flex flex-col sm:grid sm sm:grid-cols-2 rounded-2xl overflow-hidden shadow-xl border-[2px] border-black/5 hover:bg-black/5 transition-colors duration-200'
    >
      <Image width={400} height={400} src={car.imageURL} alt={car.vehicle} className='p-4' unoptimized />
      <section className='relative flex flex-col gap-2 p-4'>
        <h2 className='text-2xl font-semibold text-black/70'>{car.vehicle}</h2>
        <p className='text-xl font-medium text-secondary'>{car.price}</p>
        <div className='absolute bottom-2 right-4'>
          <DeleteButton onClick={deleteAction} />
        </div>
      </section>
    </Link>
  )
}
