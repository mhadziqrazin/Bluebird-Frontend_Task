import { getSearch } from "@/actions"
import { VehicleCardSearch } from "@/components/elements"

interface SearchParams {
  searchParams: {
    vehicle: string
  }
}

export default async function SearchPage({ searchParams }: SearchParams) {
  const { vehicle } = searchParams
  const cars = await getSearch(vehicle) || []

  return (
    <main className='container mx-auto px-4 py-10 sm:py-20 flex flex-col items-center gap-10'>
      <h1 className='text-3xl font-semibold text-primary'>
        Search results for: {vehicle}
      </h1>
      <section className='flex flex-col gap-4'>
        {cars.length === 0 && (
          <h2 className='text-lg font-medium text-black/60'>
            No result matched
          </h2>
        )}
        {cars.map((car) => (
          <VehicleCardSearch car={car} />
        ))}
      </section>
    </main>
  )
}
