import * as React from "react"

const Editor = React.lazy(() => import("./components/Editor"))
const Preview = React.lazy(() => import("./components/Preview"))

const { useState, useCallback, Suspense } = React

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
      <Suspense fallback={"Loading..."}>
        <Editor onChange={onChange} value={markdown} />
        <Preview markdown={markdown} />
      </Suspense>
    </>
  )
}

export default App
