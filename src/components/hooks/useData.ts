import { create } from 'zustand'
import { Data } from '../interface'

interface DataStore {
  data: Data
}

const useData = create<DataStore>((set) => ({
  data: {
    category: [],
    type: []
  },

  setData: (data: Data) => set({ data: data })
}))

export default useData

