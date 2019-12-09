import * as React from "react"
import loadable from "@loadable/component"
import { Row, Col, Spinner } from "react-bootstrap"
import { RouteComponentProps } from "react-router-dom"

import { MarkdownDBContext } from "../../context/markdownDB"

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

  const { read } = useContext(MarkdownDBContext)

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

  useEffect(() => {
    const run = async () => {
      const result = await read(match.params.id)
      if (result) {
        setContent(result)
      }
    }
    run()
  }, [match.params.id, read])

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
