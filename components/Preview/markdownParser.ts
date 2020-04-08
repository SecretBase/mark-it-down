import MarkdownIt from "markdown-it"
import { expose } from "comlink"
import hljs from "highlight.js"

const md = new MarkdownIt({
  html: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return "" // use external default escaping
  },
})

const fns = {
  parse: (markdown: string): string => {
    return md.render(markdown)
  },
}

expose(fns)
