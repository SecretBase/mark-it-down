import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

import WorkSpace from "./components/WorkSpace"
import FileTree from "./components/FileTree"
import { MarkdownDBProvider } from "./context/markdownDB"

const App: React.FC = () => {
  return (
    <MarkdownDBProvider>
      <Router>
        <Container fluid>
          <Row>
            <Col as="aside" md={3} width={300}>
              <Route component={FileTree} />
            </Col>
            <Col as="main">
              <Route path="/edit/:id" exact component={WorkSpace} />
            </Col>
          </Row>
        </Container>
      </Router>
    </MarkdownDBProvider>
  )
}

export default App
