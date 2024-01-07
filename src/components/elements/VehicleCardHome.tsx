import Image from "next/image"
import { CarType } from "../interface"
import Link from "next/link"

interface VehicleCardHomeProps {
  car: CarType
}

export const VehicleCardHome: React.FC<VehicleCardHomeProps> = ({ car }) => {
  return (
    <Link href='/' className='min-w-[250px] flex flex-col items-center rounded-xl shadow-xl overflow-hidden hover:bg-black/5 transition-colors duration-200'>
      <Image
        width={250}
        height={250}
        src={car.imageURL.split(' ').join('')}
        alt={car.vehicle}
        className='p-4'
      />
      <p className='px-2 py-6 text-center text-xl font-medium text-black/60'>
        {car.vehicle}
      </p>
    </Link>
  )
}
