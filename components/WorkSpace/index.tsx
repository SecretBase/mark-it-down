import * as React from "react"
import loadable from "@loadable/component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { Row, Col, Spinner, Button } from "react-bootstrap"
import { RouteComponentProps } from "react-router-dom"

import FilesStoreContext from "../../context/FilesStore/filesStoreContext"

const { useState, useCallback, useContext, useEffect, Suspense } = React

const Editor = loadable(() => import("../Editor"))
const Preview = loadable(() => import("../Preview"))

const WorkSpace: React.FC<RouteComponentProps<{ id: string }>> = ({
  match
}) => {
  const [content, setContent] = useState({
    title: "",
    markdown: ""
  })

  const { readFile, updateFile } = useContext(FilesStoreContext)

  const onMarkdownChange = useCallback(
    e => {
      setContent({ ...content, markdown: e.target.value })
    },
    [content]
  )

  const onTitleChange = useCallback(
    e => {
      setContent({ ...content, title: e.target.value })
    },
    [content]
  )

  const onSave = useCallback(
    e => {
      e.preventDefault()
      updateFile({
        id: parseInt(match.params.id, 10),
        ...content
      })
    },
    [content, match.params.id, updateFile]
  )

  useEffect(() => {
    const run = async () => {
      const result = await readFile(parseInt(match.params.id, 10))
      if (result) {
        setContent(result)
      }
    }
    run()
  }, [match.params.id, readFile])

  return (
    <Row>
      <Col>
        <Suspense
          fallback={
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          }
        >
          <Button type="button" variant="primary" onClick={onSave}>
            <span className="sr-only">Save</span>
            <FontAwesomeIcon icon={faSave} />
          </Button>
          <Editor
            onContentChange={onMarkdownChange}
            content={content.markdown}
            onTitleChange={onTitleChange}
            title={content.title}
          />
        </Suspense>
      </Col>
      <Col>
        <Suspense
          fallback={
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          }
        >
          <Preview markdown={content.markdown} />
        </Suspense>
      </Col>
    </Row>
  )
}

export default WorkSpace
