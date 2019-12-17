import { createContext } from "react"

import { Markdown } from "../types/markdown"

export default createContext<{
  files: Markdown[]
  removeFile: (id: number) => Promise<void>
  createFile: (options?: Record<string, string>) => Promise<number>
  readFile: (id: number) => Promise<Markdown | void>
  updateFile: (markdown: Markdown) => void
}>({
  files: [],
  createFile: async () => {
    console.debug("createFile")
    return -1
  },
  removeFile: async id => {
    console.debug("removeFile", id)
    return
  },
  readFile: async id => {
    console.debug("readFile", id)
    return
  },
  updateFile: async markdown => {
    console.debug(markdown)
  }
})
