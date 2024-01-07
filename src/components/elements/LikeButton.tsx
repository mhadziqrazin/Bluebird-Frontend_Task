'use client'

import { useUser } from '@/stores'
import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { CarType } from '../interface'

interface LikeButtonProps {
  car: CarType
}

export const LikeButton: React.FC<LikeButtonProps> = ({ car }) => {
  const { likes, addLike, removeLike } = useUser()
  const [liked, setLiked] = useState<boolean>(false)

  const handleLike = (e: any) => {
    e.preventDefault()
    if (!liked) addLike(car)
    else removeLike(car)
  }

  useEffect(() => {
    setLiked(likes.find((item) => item.vehicle === car.vehicle) !== undefined)
  }, [likes])

  return (
    <button onClick={handleLike} className='text-rose-500'>
      {liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    </button>
  )
}
