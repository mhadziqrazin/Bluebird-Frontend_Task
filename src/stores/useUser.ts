import { CarType } from '@/components/interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
  likes: CarType[]
  addLike: (vehicle: CarType) => void
  removeLike: (vehicle: CarType) => void

  books: CarType[]
  addBook: (vehicle: CarType) => void
  removeBook: (vehicle: CarType) => void
}

export const useUser = create<UserStore>()(
  persist(
    (set) => ({
      likes: [],
      books: [],

      addLike: (vehicle: CarType) =>
        set((state) => ({
          likes: [...state.likes, vehicle]
        })),

      addBook: (vehicle: CarType) =>
        set((state) => ({
          books: [...state.books, vehicle]
        })),

      removeLike: (vehicle: CarType) =>
        set((state) => ({
          likes: state.likes.filter((item) => item.vehicle !== vehicle.vehicle)
        })),

      removeBook: (vehicle: CarType) =>
        set((state) => ({
          books: state.books.filter((item) => item.vehicle !== vehicle.vehicle)
        }))
    }),
    {
      name: 'user store'
    }
  )
)
