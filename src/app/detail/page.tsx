import { getDetail } from '@/actions'
import { BookButton, ShareButton } from '@/components/elements'
import { LikeButton } from '@/components/elements/LikeButton'
import Image from 'next/image'

interface DetailSearchParams {
  searchParams: {
    id: number
    vehicle: string
  }
}

export default async function Detail({ searchParams }: DetailSearchParams) {
  const { id, vehicle } = searchParams
  const car = await getDetail(Number(id), vehicle)

  if (!car) {
    return (
      <main className='container mx-auto px-4 py-40 flex justify-center'>
        <h1 className='text-center font-medium text-primary text-xl'>No matched vehicle found</h1>
      </main>
    )
  }

  return (
    <main className='container mx-auto px-4 flex justify-center py-10 sm:py-40'>
      <section className='flex flex-col md:grid md:grid-cols-[0.75fr_1fr]'>
        <Image width={600} height={600} src={car.imageURL} alt={car.vehicle} />
        <div className='flex flex-col gap-4 p-4 sm:p-8 justify-between rounded-2xl bg-dark/10'>
          <div className='flex justify-between items-start'>
            <div>
              <h1 className='text-3xl sm:text-5xl font-semibold text-primary'>{car.vehicle}</h1>
              <p className='sm:text-xl text-primary/60'>{car.description.join(', ')}</p>
            </div>
            <div className='flex gap-4 top-8 right-8 text-primary/60'>
              <ShareButton />
              <LikeButton car={car} />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-secondary font-semibold'>{car.price}</p>
            <BookButton car={car} />
          </div>
        </div>
      </section>
    </main>
  )
}
