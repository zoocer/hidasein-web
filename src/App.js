import React from 'react'
import './App.css'
import { getCodes } from 'country-list'
import CardList from './CardList'
import CardInput from './CardInput'
import * as _ from 'lodash'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
// import { loadCSS } from 'fg-loadcss/src/loadCSS'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={CardInput} />
          <Route path="/cardList" component={CardList} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    )
  }
}

export default App
