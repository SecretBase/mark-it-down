import * as React from "react"
import { default as Context, db } from "./markdownDBContext"
import { Markdown } from "../types/markdown"
const { useCallback, useMemo } = React

const MarkdownDBProvider: React.FC = props => {
  const create = useCallback(async (payload: Markdown) => {
    return db.markdowns.add(payload)
  }, [])

  const update = useCallback(async (payload: Markdown) => {
    await db.markdowns.put(payload)
  }, [])

  const remove = useCallback(async (id: number) => {
    await db.markdowns.delete(id)
  }, [])

  const read = useCallback((id: number) => {
    return db.markdowns.get(id)
  }, [])

  const list = useCallback(async () => {
    return db.markdowns
      .offset(0)
      .limit(Infinity)
      .toArray()
  }, [])

  const value = useMemo(
    () => ({
      create,
      update,
      remove,
      read,
      list
    }),
    [create, list, read, remove, update]
  )
  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export default MarkdownDBProvider
