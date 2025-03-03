export interface Item {
  id: number
  icon?: string
  name: string
  foss: boolean
  osLink?: string // opensource link
  type: string
  tags: string[]
  description: string
  url: string // main link
}
