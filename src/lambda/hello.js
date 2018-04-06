const React = require("react")
const ReactDOMServer = require("react-dom/server")

export function handler(event, context, callback) {
  console.log(event)

  const body = ReactDOMServer.renderToString(<div>Hello from JSX</div>)

  callback(null, {
    statusCode: 200,
    body
  })
}
