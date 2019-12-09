import { h, FunctionComponent, Fragment } from "preact"
import { memo } from "preact/compat"
import { Form } from "react-bootstrap"

interface Props {
  onContentChange: (e) => void
  onTitleChange: (e) => void
  content: string
  title: string
}

const Editor: FunctionComponent<Props> = ({
  onContentChange,
  content,
  onTitleChange,
  title
}) => {
  return (
    <Fragment>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" onChange={onTitleChange} value={title} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          onChange={onContentChange}
          value={content}
          rows={30}
        />
      </Form.Group>
    </Fragment>
  )
}

export default memo(Editor)
