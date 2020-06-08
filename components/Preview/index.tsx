import "highlight.js/styles/github.css"
import * as React from "react"

import { wrap } from "comlink"
import Spinner from "react-bootstrap/Spinner"

const { useState, useEffect, memo } = React
const worker = new Worker("./markdownParser.ts")
const fns = wrap<{ parse: parseFn }>(worker)

interface Props {
  markdown: string
}

type parseFn = (markdown: string) => string

const useMarkdown = (
  markdown: string
): { html: string; isLoading: boolean } => {
  const [html, setHtml] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      const result = await fns.parse(markdown)
      setHtml(result)
      setIsLoading(false)
    }
    run()
  }, [markdown])

  return { html, isLoading }
}

const Preview: React.FC<Props> = ({ markdown }) => {
  const { html, isLoading } = useMarkdown(markdown)
  if (isLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default memo(Preview)
