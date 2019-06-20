import React from 'react'
import ReactDOM from 'react-dom'

const Home = props => (
  <div>Home page</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
