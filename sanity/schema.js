import { post } from './schemas/post'
import { category } from './schemas/category'
import { author } from './schemas/author'

export const schema = {
  types: [post, author, category],
}
