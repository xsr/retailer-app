import React from "react"
import classNames from "classnames"
import {XyzTransition, xyz} from "@animxyz/react"

React._createElement = React.createElement
React.createElement = (type, props, ...rest) => {
  if (props?.x) {
    props.className = props.x
    delete props.x
  }
  return React._createElement(type, props, ...rest)
}

export const
Debug = props => <pre className="debug" dangerouslySetInnerHTML={{__html: JSON.stringify(props.data, null, 2).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => "<span class='" + (/^"/.test(match) ? (/:$/.test(match) ? "key" : "string") : (/true|false/.test(match) ? "boolean" : (/null/.test(match) ? "null" : "number"))) + "'>" + match + "</span>")}} />,
ThemeSwitch = props => <button className={classNames(props.className, "theme-switch")} onClick={_ => { localStorage.theme = {light: "dark", dark: "light"}[localStorage.theme] ; document.querySelector("html").setAttribute("class", localStorage.theme)} }>
  <svg className="dark:hidden" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
  <svg className="hidden dark:block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
</button>,
Navbar = props => <nav>
  <a href="https://github.com/xsr/retailer-tpl/" className="flex items-center">
    <img src={props.logo} className="h-8 mr-3" alt={props.title} />
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{props.title}</span>
    <ThemeSwitch className="ml-1 -mt-1" />
  </a>
  <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    <svg x="w-5 h-5" viewBox="0 0 17 14">
      <path d="M1 1h15M1 7h15M1 13h15"/>
    </svg>
  </button>
  <div className="items-center hidden md:flex">
    <ul className="">
      {
      // [
        // ["/", "UI Building Bricks"],
        // ["/master/", "Management UX"]
      // ]
      props.menu.map(_ => <li key={_[0] + _[1]}>
        <a href={_[0]} className="">{_[1]}</a>
      </li>)}
    </ul>
    <button className="cta">{props.action}</button>
  </div>
</nav>