import { createContext } from "react"
import Dexie from "dexie"

import { Markdown } from "../types/markdown"

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
  create: (payload: Markdown) => Promise<number>
  update: (Markdown) => void
  remove: (id: number) => void
  read: (id: number) => Promise<Markdown | undefined>
  list: () => Promise<Markdown[]>
}>({
  create: async (...args) => {
    console.log(...args)
    return -1
  },
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
