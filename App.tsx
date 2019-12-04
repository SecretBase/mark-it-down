import * as React from "react"
import Editor from "./components/Editor"
import Preview from "./components/Preview"

const { useState, useCallback } = React

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState("")
  const onChange = useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>(
    e => {
      setMarkdown(e.target.value)
    },
    []
  )

  return (
    <>
      <Editor onChange={onChange} value={markdown} />
      <Preview markdown={markdown} />
    </>
  )
}

export default App
