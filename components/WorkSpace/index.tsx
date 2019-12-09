import { h, FunctionComponent } from "preact"
import {
  lazy,
  useState,
  useCallback,
  Suspense,
  useContext,
  useEffect
} from "preact/compat"
import { Row, Col, Spinner } from "react-bootstrap"

import { MarkdownDBContext } from "../../context/markdownDB"

const Editor = lazy(() => import("../Editor"))
const Preview = lazy(() => import("../Preview"))

interface Props {
  fileId: string
}

const WorkSpace: FunctionComponent<Props> = ({ fileId }) => {
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
      const result = await read(fileId)
      if (result) {
        setContent(result)
      }
    }
    run()
  }, [fileId, read])

  return (
    <Row as="div" fluid>
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
