'use client'

import { useUser } from '@/stores'
import { useEffect, useMemo, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface LikeButtonProps {
  vehicle: string
}

export const LikeButton: React.FC<LikeButtonProps> = ({ vehicle }) => {
  const { likes, addLike, removeLike } = useUser()
  const [liked, setLiked] = useState<boolean>(false)

  const handleLike = (e: any) => {
    e.preventDefault()
    if (!liked) addLike(vehicle)
    else (removeLike(vehicle))
  }

  useEffect(() => {
    setLiked(likes.find((item) => item === vehicle) !== undefined)
  }, [likes])

  return (
    <button
      onClick={handleLike}
      className='text-rose-500'
    >
      {liked ?
        <FaHeart size={20} /> :
        <FaRegHeart size={20} />
      }
    </button>
  )
}
