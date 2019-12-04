import * as React from "react"

interface Props {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
  value: string
}

const Editor: React.FC<Props> = ({ onChange, value }) => {
  return (
    <textarea
      onChange={onChange}
      value={value}
      rows={30}
      style={{ width: "100%", resize: "none" }}
    ></textarea>
  )
}

export default React.memo(Editor)
