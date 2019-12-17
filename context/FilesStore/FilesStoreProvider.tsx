import * as React from "react"
import { default as Context } from "./filesStoreContext"
import { MarkdownDBContext } from "../markdownDB"
import { Markdown } from "../types/markdown"

const { useContext, useReducer, useCallback, useEffect, useMemo } = React

enum ActionTypes {
  list = "LIST",
  create = "CREATE",
  delete = "DELETE",
  update = "UPDATE"
}

interface ListAction {
  type: typeof ActionTypes.list
  payload: Markdown[]
}

interface DeleteAction {
  type: typeof ActionTypes.delete
  payload: number
}

interface CreateAction {
  type: typeof ActionTypes.create
  payload: Markdown
}

interface UpdateAction {
  type: typeof ActionTypes.update
  payload: Markdown
}

const reducer = (
  state: Markdown[],
  action: ListAction | DeleteAction | CreateAction | UpdateAction
): Markdown[] => {
  switch (action.type) {
    case ActionTypes.list:
      return action.payload
    case ActionTypes.delete:
      return state.filter(({ id }) => action.payload !== id)
    case ActionTypes.create:
      return [...state, action.payload]
    default:
      return state
  }
}

const FilesStoreProvider: React.FC = props => {
  const [files, dispatch] = useReducer(reducer, [])
  const { create, list, remove, read, update } = useContext(MarkdownDBContext)

  useEffect(() => {
    const run = async () => {
      const markdownList = await list()
      dispatch({
        type: ActionTypes.list,
        payload: markdownList
      })
    }

    run()
  }, [dispatch, list])

  const createFile = useCallback(
    async (options?: Record<string, string>) => {
      const id = await create({ title: "Untitled", markdown: "", ...options })
      const markdown = await read(id)

      if (markdown) {
        dispatch({
          type: ActionTypes.create,
          payload: markdown
        })
      }

      return id
    },
    [create, read]
  )

  const removeFile = useCallback(
    async (id: number) => {
      await remove(id)
      dispatch({
        type: ActionTypes.delete,
        payload: id
      })
    },
    [dispatch, remove]
  )

  const readFile = useCallback(async (fileId: number) => read(fileId), [read])

  const updateFile = useCallback(
    async (markdown: Markdown) => {
      await update(markdown)
      dispatch({
        type: ActionTypes.update,
        payload: markdown
      })
    },
    [update]
  )

  const value = useMemo(
    () => ({ files, createFile, removeFile, readFile, updateFile }),
    [createFile, files, readFile, removeFile, updateFile]
  )

  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export default FilesStoreProvider
