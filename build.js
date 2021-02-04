const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { renderToStaticMarkup } = ReactDOMServer
const { createElement } = React
const Page = require('./dist/main')
console.log(renderToStaticMarkup(createElement(Page)))
