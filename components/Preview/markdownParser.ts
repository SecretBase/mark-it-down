import { Parser, HtmlRenderer } from "commonmark"
import { expose } from "comlink"

const reader = new Parser()
const writer = new HtmlRenderer({ safe: true })

const fns = {
  parse: (markdown: string): string => {
    const ast = reader.parse(markdown)
    const html = writer.render(ast)
    return html
  }
}

expose(fns)
