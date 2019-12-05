import { h, FunctionComponent } from "preact"
import { useCallback, useMemo } from "preact/compat"
import { default as Context, db, Markdown } from "./markdownDBContext"

export const MarkdownDBProvider: FunctionComponent = props => {
  const create = useCallback(async (payload: Markdown) => {
    db.markdowns.add(payload)
  }, [])

  const update = useCallback(async (payload: Markdown) => {
    await db.markdowns.put(payload)
  }, [])

  const remove = useCallback(async (id: string) => {
    await db.markdowns.delete(id)
  }, [])

  const read = useCallback(async (id: string) => {
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

export const MarkdownDBContext = Context
