import { h, FunctionComponent } from "preact"
import { memo } from "preact/compat"

interface Props {
  onChange: (e) => void
  value: string
}

const Editor: FunctionComponent<Props> = ({ onChange, value }) => {
  return (
    <textarea
      onChange={onChange}
      value={value}
      rows={30}
      style={{ width: "100%", resize: "none" }}
    ></textarea>
  )
}

export default memo(Editor)
