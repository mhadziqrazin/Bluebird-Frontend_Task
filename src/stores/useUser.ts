import { CarStore } from '@/components/interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
  likes: CarStore[]
  addLike: (vehicle: CarStore) => void
  removeLike: (vehicle: CarStore) => void

  books: CarStore[]
  addBook: (vehicle: CarStore) => void
  removeBook: (vehicle: CarStore) => void
}

export const useUser = create<UserStore>()(
  persist(
    (set) => ({
      likes: [],
      books: [],

      addLike: (vehicle: CarStore) =>
        set((state) => ({
          likes: [...state.likes, vehicle]
        })),

      addBook: (vehicle: CarStore) =>
        set((state) => ({
          books: [...state.books, vehicle]
        })),

      removeLike: (vehicle: CarStore) =>
        set((state) => ({
          likes: state.likes.filter((item) => item.vehicle !== vehicle.vehicle)
        })),

      removeBook: (vehicle: CarStore) =>
        set((state) => ({
          books: state.books.filter((item) => item.vehicle !== vehicle.vehicle)
        }))
    }),
    {
      name: 'user store'
    }
  )
)
