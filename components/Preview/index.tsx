import * as React from "react"

interface Props {
  markdown: string
}

const Preview: React.FC<Props> = ({ markdown }) => {
  return <>{markdown}</>
}

export default React.memo(Preview)
