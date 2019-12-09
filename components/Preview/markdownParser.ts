import MarkdownIt from "markdown-it"
import { expose } from "comlink"

const md = new MarkdownIt({
  html: true,
  linkify: true
})

const fns = {
  parse: (markdown: string): string => {
    return md.render(markdown)
  }
}

expose(fns)
