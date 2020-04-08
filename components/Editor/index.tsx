import * as React from "react"
import { Form } from "react-bootstrap"

interface Props {
  onContentChange: (e) => void
  onTitleChange: (e) => void
  content: string
  title: string
}

const Editor: React.FC<Props> = ({
  onContentChange,
  content,
  onTitleChange,
  title,
}) => {
  return (
    <>
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
    </>
  )
}

export default React.memo(Editor)
