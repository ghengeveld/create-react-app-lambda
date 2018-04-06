import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, html: null }
  }

  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/hello")
      .then(response => response.text())
      .then(html => this.setState({ loading: false, html: html }))
  }

  render() {
    const { loading, html } = this.state

    return (
      <p>
        <button onClick={this.handleClick}>{loading ? "Loading..." : "Call Lambda"}</button>
        <br />
        <span dangerouslySetInnerHTML={{ __html: html }} />
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo />
      </div>
    )
  }
}

export default App
