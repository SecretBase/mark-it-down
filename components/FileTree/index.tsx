import * as React from "react"
import { Link, RouteComponentProps } from "react-router-dom"
import { Button } from "react-bootstrap"
import { MarkdownDBContext } from "../../context/markdownDB"
import { Markdown } from "../../context/markdownDB/markdownDBContext"

const { useContext, useEffect, useReducer, useCallback } = React

enum ActionTypes {
  list = "LIST",
  create = "CREATE"
}

interface ListAction {
  type: typeof ActionTypes.list
  payload: Markdown[]
}

const reducer = (state: Markdown[], action: ListAction): Markdown[] => {
  switch (action.type) {
    case ActionTypes.list:
      return action.payload
    default:
      return state
  }
}

const useListFileTree = ({ dispatch, list }) => {
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
}

const useCreateFile = ({ dispatch, create, list, history }) => {
  const onCreate = useCallback(
    async e => {
      e.preventDefault()
      const id = await create({ title: "Un title", markdown: "" })
      const markdownList = await list()
      dispatch({
        type: ActionTypes.list,
        payload: markdownList
      })

      history.push(`/edit/${id}`)
    },
    [create, dispatch, history, list]
  )

  return onCreate
}

const useDeleteFile = ({ dispatch, list, history, remove }) => {
  const onDelete = useCallback(
    (id: number) => async e => {
      e.preventDefault()
      await remove(id)
      const markdownList = await list()
      dispatch({
        type: ActionTypes.list,
        payload: markdownList
      })

      history.push("/edit")
    },
    [dispatch, history, list, remove]
  )

  return onDelete
}

const FileTree: React.FC<RouteComponentProps> = ({ history }) => {
  const [store, dispatch] = useReducer(reducer, [])
  const { create, list, remove } = useContext(MarkdownDBContext)

  useListFileTree({ dispatch, list })
  const onCreate = useCreateFile({ dispatch, create, list, history })
  const onDelete = useDeleteFile({ dispatch, list, remove, history })

  return (
    <nav>
      <Button type="button" onClick={onCreate}>
        Create
      </Button>
      <ul>
        {store.map(file => {
          const id = file.id as number
          return (
            <li key={`${file.id}`}>
              <Link to={`/edit/${file.id}`}>{file.title}</Link>
              <Button type="button" variant="danger" onClick={onDelete(id)}>
                Delete
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default FileTree
