export interface Category {
  id: number
  name: string
  imageURL: string
}

export interface CarType {
  vehicle: string
  imageURL: string
  price: string
  description: string[]
}

export interface Type {
  id: number
  category_id: number
  car_type: CarType[]
}

export interface Data {
  category: Category[]
  type: Type[]
}

export interface CarStore extends CarType {
  id: number
}
