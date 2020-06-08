import * as React from "react"
import { Link, useHistory, useRouteMatch } from "react-router-dom"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash"
import FilesStoreContext from "../../context/FilesStore/filesStoreContext"

const { useContext } = React

const { useCallback, useMemo } = React

const FileTree: React.FC = () => {
  const { files, createFile, removeFile } = useContext(FilesStoreContext)
  const history = useHistory()

  const match = useRouteMatch<{ id?: string }>("/edit/:id")

  const id = useMemo(() => match?.params.id && parseInt(match.params.id, 10), [
    match,
  ])

  const onCreate = useCallback(
    async (e) => {
      e.preventDefault()
      const id = await createFile()
      history.push(`/edit/${id}`)
    },
    [createFile, history]
  )

  const onDelete = useCallback(
    (removeId: number) => (e) => {
      e.preventDefault()
      removeFile(removeId)

      if (removeId === id) {
        history.replace("/edit")
      }
    },
    [history, id, removeFile]
  )

  return (
    <nav className="vh-100">
      <Button type="button" onClick={onCreate}>
        Create Markdown
      </Button>
      <ul className="list-unstyled mt-3">
        {files.map((file) => {
          const id = file.id as number
          return (
            <li key={`${file.id}`}>
              <Link to={`/edit/${file.id}`}>{file.title}</Link>
              <Button
                type="button"
                variant="link"
                className="text-muted"
                onClick={onDelete(id)}
              >
                <span className="sr-only">Delete</span>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default FileTree
