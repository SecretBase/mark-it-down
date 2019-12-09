import * as React from "react"

import { default as Context, db, Markdown } from "./markdownDBContext"

const { useCallback, useMemo } = React

export const MarkdownDBProvider: React.FC = props => {
  const create = useCallback(async (payload: Markdown) => {
    db.markdowns.add(payload)
  }, [])

  const update = useCallback(async (payload: Markdown) => {
    await db.markdowns.put(payload)
  }, [])

  const remove = useCallback(async (id: string) => {
    await db.markdowns.delete(parseInt(id, 10))
  }, [])

  const read = useCallback((id: string) => {
    return db.markdowns.get(parseInt(id, 10))
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

export const MarkdownDBContext = Context
