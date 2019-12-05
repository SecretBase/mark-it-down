import MarkdownIt from "markdown-it"
import { expose } from "comlink"

const md = new MarkdownIt("commonmark")

const fns = {
  parse: (markdown: string): string => {
    return md.render(markdown)
  }
}

expose(fns)
