import "./default.css"
import React from "react"
import {createRoot} from "react-dom/client"
// import styled from "styled-components"
// import Index from "./index.js"
import { ColorMode } from "./components"

const
  syntax = __ => __.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => "<span class='" + (/^"/.test(match) ? (/:$/.test(match) ? "key" : "string") : (/true|false/.test(match) ? "boolean" : (/null/.test(match) ? "null" : "number"))) + "'>" + match + "</span>"),
  Debug = ({data}) => <article className="debug"><section><pre dangerouslySetInnerHTML={{__html: syntax(JSON.stringify(data, null, 2))}} /></section></article>,
  // queryClient = new QueryClient()
  Index = () => <main>
    <h3>React + Tailwind + Webpack</h3>
    <h1>Landing App</h1>
    <ColorMode /> 
    <Debug data={{}} />
  </main>

createRoot(document.getElementById("app")).render(
  // <QueryClientProvider client={queryClient}>
    <Index />
  // </QueryClientProvider>
)
