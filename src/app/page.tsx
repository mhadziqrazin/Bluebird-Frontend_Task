import { getData } from "@/actions"
import { VehicleCardHome } from "@/components/elements"
import { CarType } from "@/components/interface"

export default async function Home() {
  const data = await getData()

  const allVehicle: CarType[] = []
  data.type.map((type) => {
    type.car_type.map((car) => allVehicle.push(car))
  })
  allVehicle.sort(() => 0.5 - Math.random())

  return (
    <main className='container mx-auto px-4 py-10 sm:py-20 flex flex-col gap-10 sm:gap-20 justify-center items-center'>
      <h1 className='text-3xl font-semibold text-center max-w-[350px] sm:max-w-fit text-primary'>
        Book any car of your choice, any time
      </h1>
      <section className='flex flex-col sm:flex-row gap-4'>
        {allVehicle?.slice(0, 4).map((car, index) => (
          <VehicleCardHome key={index} car={car} />
        ))}
      </section>
    </main>
  )
}
