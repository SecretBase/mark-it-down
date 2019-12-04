import * as React from "react"
import { render } from "react-dom"

import App from "./App"

render(<App />, document.getElementById("app"))

navigator.serviceWorker.register("/service_worker.js")
