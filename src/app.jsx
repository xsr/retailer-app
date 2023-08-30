import "./default.css"
import React from "react"
import {createRoot} from "react-dom/client"
import "flowbite"
import {Navbar, Debug} from "./components"

const App = props => <main>
  <h1>test</h1>
</main>

createRoot(document.getElementById("app")).render(<App />)
