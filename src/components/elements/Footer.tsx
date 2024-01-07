const year = new Date().getFullYear()

export const Footer: React.FC = () => {
  return (
    <footer className='text-white bg-light'>
      <p className='container mx-auto px-4 py-2 flex justify-center text-xs'>
        Built for Bluebird Frontend Task &copy; {year} Muhammad Hadziq Razin. All Rights Reserverd.
      </p>
    </footer>
  )
}
