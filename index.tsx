import * as React from "react"
import { render } from "react-dom"

import App from "./App"

const app = document.getElementById("app") as Element

render(<App />, app)

navigator.serviceWorker.register("/service_worker.js")
