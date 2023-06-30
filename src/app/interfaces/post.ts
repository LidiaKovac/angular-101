export interface Post {
  [key: string]: string | string[] | number | undefined
  id: string
  body: string
  title: string
  tags?: string[]
  userId?: string
  reactions: number
}
