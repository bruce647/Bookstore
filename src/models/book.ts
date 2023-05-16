export type Book = {
  name: string
  des: string
  price: string
  category: BookCategories
  imgUrl?: string
}

type BookCategories = 'Science' | 'Horror' | 'Documentary' | 'History'
