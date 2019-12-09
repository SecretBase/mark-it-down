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
            <Col as="aside" md={3} width={300}>
              <FileTree />
            </Col>
            <Col as="main">
              <Route
                path="/edit/:id"
                exact
                render={props => <WorkSpace fileId={props.match.params.id} />}
              />
            </Col>
          </Row>
        </Container>
      </Router>
    </MarkdownDBProvider>
  )
}

export default App
