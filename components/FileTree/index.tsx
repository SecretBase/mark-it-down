import * as React from "react"
import { Link, useHistory, useRouteMatch } from "react-router-dom"
import { Button } from "react-bootstrap"
import FilesStoreContext from "../../context/FilesStore/filesStoreContext"

const { useContext } = React

const { useCallback, useMemo } = React

const FileTree: React.FC = () => {
  const { files, createFile, removeFile } = useContext(FilesStoreContext)
  const history = useHistory()

  const match = useRouteMatch<{ id?: string }>("/edit/:id")

  const id = useMemo(() => match?.params.id && parseInt(match.params.id, 10), [
    match
  ])

  const onCreate = useCallback(
    async e => {
      e.preventDefault()
      const id = await createFile()
      history.push(`/edit/${id}`)
    },
    [createFile, history]
  )

  const onDelete = useCallback(
    (removeId: number) => e => {
      e.preventDefault()
      removeFile(removeId)

      if (removeId === id) {
        history.replace("/edit")
      }
    },
    [history, id, removeFile]
  )

  return (
    <nav>
      <Button type="button" onClick={onCreate}>
        Create
      </Button>
      <ul>
        {files.map(file => {
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
