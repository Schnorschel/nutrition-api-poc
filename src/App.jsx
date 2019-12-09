import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import NotFound from './pages/NotFound'
import SearchNutrition from './components/SearchNutrition'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Georg's Nutrition Info</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Search for food nutrition information</Link>
            </li>
            <li>
              <Link to="/1">Page 1</Link>
            </li>
            <li>
              <Link to="/2">Page 2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={SearchNutrition}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
