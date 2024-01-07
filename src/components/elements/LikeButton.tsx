'use client'

import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface LikeButtonProps {
  vehicle: string
}

export const LikeButton: React.FC<LikeButtonProps> = ({ vehicle }) => {
  const handleLike = (e: any) => {
    e.preventDefault()
    console.log(vehicle)
  }
  return (
    <button
      onClick={handleLike}
      className='text-rose-500'
    >
      <FaHeart size={20} />
    </button>
  )
}
