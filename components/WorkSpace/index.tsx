import { h, FunctionComponent } from "preact"
import {
  lazy,
  useState,
  useCallback,
  Suspense,
  useContext
} from "preact/compat"

import { MarkdownDBContext } from "../../context/markdownDB"

const Editor = lazy(() => import("../Editor"))
const Preview = lazy(() => import("../Preview"))

const WorkSpace: FunctionComponent = () => {
  const [markdown, setMarkdown] = useState("")
  const [title, setTitle] = useState("")
  const { create } = useContext(MarkdownDBContext)

  const onMarkdownChange = useCallback(e => {
    setMarkdown(e.target.value)
  }, [])

  const onTitleChange = useCallback(e => {
    setTitle(e.target.value)
  }, [])

  const onSave = useCallback(
    e => {
      e.preventDefault()
      create({ title, markdown })
    },
    [create, markdown, title]
  )

  return (
    <Suspense fallback={"Loading..."}>
      Title: <input type="text" value={title} onChange={onTitleChange} />
      <Editor onChange={onMarkdownChange} value={markdown} />
      <Preview markdown={markdown} />
      <button type="button" onClick={onSave}>
        Save
      </button>
    </Suspense>
  )
}

export default WorkSpace
