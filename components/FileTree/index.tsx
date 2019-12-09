import { FunctionComponent, h } from "preact"
import { useContext, useState, useEffect } from "preact/compat"
import { Link } from "react-router-dom"

import { MarkdownDBContext } from "../../context/markdownDB"
import { Markdown } from "../../context/markdownDB/markdownDBContext"

const FileTree: FunctionComponent = () => {
  const [files, setFiles] = useState<Markdown[]>([])
  const { list } = useContext(MarkdownDBContext)

  useEffect(() => {
    const run = async () => {
      const markdownList = await list()
      setFiles(markdownList)
    }
    run()
  })

  return (
    <nav>
      <ul>
        {files.map(file => {
          return <Link to={`/edit/${file.id}`}>{file.title}</Link>
        })}
      </ul>
    </nav>
  )
}

export default FileTree
