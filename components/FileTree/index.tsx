import * as React from "react"
import { Link } from "react-router-dom"

import { MarkdownDBContext } from "../../context/markdownDB"
import { Markdown } from "../../context/markdownDB/markdownDBContext"

const { useContext, useState, useEffect } = React

const FileTree: React.FC = () => {
  const [files, setFiles] = useState<Markdown[]>([])
  const { list } = useContext(MarkdownDBContext)

  useEffect(() => {
    const run = async () => {
      const markdownList = await list()
      setFiles(markdownList)
    }
    run()
  }, [list])

  return (
    <nav>
      <ul>
        {files.map(file => {
          return (
            <Link key={`${file.id}`} to={`/edit/${file.id}`}>
              {file.title}
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default FileTree
