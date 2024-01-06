import { create } from 'zustand'
import { Data } from '../components/interface'

interface DataStore {
  data: Data
  setData: (data: Data) => void
}

export const useData = create<DataStore>((set) => ({
  data: {
    category: [],
    type: []
  },

  setData: (data: Data) => set({ data: data })
}))
