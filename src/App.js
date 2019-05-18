import React from 'react'
import './App.css'
import CardList from './CardList'
import CardInput from './CardInput'
import { withStyles } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#e2e2e2'
  }
})

class App extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Router className={classes.root}>
        <Switch>
          <Route path="/" exact component={CardInput} />
          <Route path="/cardList" component={CardList} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    )
  }
}

export default withStyles(styles)(App)
