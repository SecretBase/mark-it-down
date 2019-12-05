import { render, h } from "preact"

import App from "./App"

const app = document.getElementById("app")

if (app) {
  render(<App />, app)
}

navigator.serviceWorker.register("/service_worker.js")
