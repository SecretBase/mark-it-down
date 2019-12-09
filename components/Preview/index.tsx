import { h, FunctionComponent } from "preact"
import { useState, useEffect, memo } from "preact/compat"
import { wrap } from "comlink"
import { Spinner } from "react-bootstrap"

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
    const run = async (): Promise<void> => {
      const result = await fns.parse(markdown)
      setHtml(result)
      setIsLoading(false)
    }
    run()
  }, [markdown])

  return { html, isLoading }
}

const Preview: FunctionComponent<Props> = ({ markdown }) => {
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
