import { FunctionComponent, h } from "preact"
import { Link } from "react-router-dom"

const FileTree: FunctionComponent = () => {
  return (
    <nav>
      <Link to="/edit">I am a tree</Link>
    </nav>
  )
}

export default FileTree
