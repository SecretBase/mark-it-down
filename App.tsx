import { Suspense, lazy, useState, useCallback } from "preact/compat"
import { FunctionComponent, h } from "preact"

const Editor = lazy(() => import("./components/Editor"))
const Preview = lazy(() => import("./components/Preview"))

const App: FunctionComponent = () => {
  const [markdown, setMarkdown] = useState("")
  const onChange = useCallback(e => {
    setMarkdown(e.target.value)
  }, [])

  return (
    <Suspense fallback={"Loading..."}>
      <Editor onChange={onChange} value={markdown} />
      <Preview markdown={markdown} />
    </Suspense>
  )
}

export default App
