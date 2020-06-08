import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import WorkSpace from "./components/WorkSpace"
import FileTree from "./components/FileTree"
import { MarkdownDBProvider } from "./context/markdownDB"
import FilesStoreProvider from "./context/FilesStore/FilesStoreProvider"

const App: React.FC = () => {
  return (
    <MarkdownDBProvider>
      <FilesStoreProvider>
        <Router>
          <Container fluid>
            <Row>
              <Col as="aside" md={3} width={300}>
                <FileTree />
              </Col>
              <Col as="main">
                <Route path="/edit/:id" exact component={WorkSpace} />
              </Col>
            </Row>
          </Container>
        </Router>
      </FilesStoreProvider>
    </MarkdownDBProvider>
  )
}

export default App
