import { FunctionComponent, h } from "preact"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

import WorkSpace from "./components/WorkSpace"
import FileTree from "./components/FileTree"
import { MarkdownDBProvider } from "./context/markdownDB"

const App: FunctionComponent = () => {
  return (
    <MarkdownDBProvider>
      <Router>
        <Container fluid>
          <Row>
            <Col as="aside">
              <FileTree />
            </Col>
            <Col as="main">
              <Route path="/edit" exact render={() => <WorkSpace />} />
            </Col>
          </Row>
        </Container>
      </Router>
    </MarkdownDBProvider>
  )
}

export default App
