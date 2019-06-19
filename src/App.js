import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'
import { withStyles } from '@material-ui/core/styles'

import CardList from './CardList'
import CardInput from './CardInput'
import CommonFooter from './components/CommonFooter'

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundColor: '#f9f9f9'
  }
})

class App extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.root}>
          <Switch>
            <Route path="/" exact component={CardInput} />
            <Route path="/cardList" component={CardList} />
            <Redirect from="*" to="/" />
          </Switch>
          <CommonFooter />
        </div>
      </Router>
    )
  }
}

export default withStyles(styles)(App)
