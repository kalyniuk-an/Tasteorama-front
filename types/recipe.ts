export interface Recipe {
  _id: string
  title: string
  category: string
  thumb: string
  ingredients: []
  instructions: string
  time: number
  createdAt: string
  updatedAt: string
}