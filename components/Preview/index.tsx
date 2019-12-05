import { h, FunctionComponent } from "preact"
import { useState, useEffect, memo } from "preact/compat"
import { wrap } from "comlink"

const worker = new Worker("./markdownParser.ts")
const fns = wrap<{ parse: parseFn }>(worker)

interface Props {
  markdown: string
}

type parseFn = (markdown: string) => string

const useMarkdown = (markdown: string): string => {
  const [html, setHtml] = useState("")

  useEffect(() => {
    const run = async (): Promise<void> => {
      const result = await fns.parse(markdown)
      setHtml(result)
    }
    run()
  }, [markdown])

  return html
}

const Preview: FunctionComponent<Props> = ({ markdown }) => {
  const html = useMarkdown(markdown)
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default memo(Preview)
