import { render, h } from "preact"

import App from "./App"

const app = document.getElementById("app") as Element

render(<App />, app)

navigator.serviceWorker.register("/service_worker.js")
