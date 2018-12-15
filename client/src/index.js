import React from "react"
import ReactDOM from "react-dom"
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router"
import { Provider } from 'react-redux'
import indexRoutes from "./routes/index.jsx"
import store from './store'

var hist = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
