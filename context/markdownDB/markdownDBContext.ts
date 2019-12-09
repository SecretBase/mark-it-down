import { createContext } from "preact"
import Dexie from "dexie"

export interface Markdown {
  id?: number
  title: string
  markdown: string
}

class MarkdownDatabase extends Dexie {
  public markdowns: Dexie.Table<Markdown, number>
  constructor() {
    super("MarkdownDatabase")

    this.version(1).stores({
      markdowns: "++id, title, markdown"
    })

    this.markdowns = this.table("markdowns")
  }
}

export const db = new MarkdownDatabase()

export default createContext<{
  create: (payload: Markdown) => void
  update: (Markdown) => void
  remove: (id: string) => void
  read: (id: string) => Promise<Markdown | undefined>
  list: () => Promise<Markdown[]>
}>({
  create: (...args) => console.log(...args),
  update: (...args) => console.log(...args),
  remove: (...args) => console.log(...args),
  read: async (...args) => {
    console.log(...args)
    return undefined
  },
  list: async (...args) => {
    console.log(...args)
    return []
  }
})
