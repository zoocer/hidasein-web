import React from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import HDTextField from './components/HDTextField'
import HDButton from './components/HDButton'
// import { loadCSS } from 'fg-loadcss/src/loadCSS'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

class App extends React.Component {
  render() {
    const classes = styles
    return (
      <Grid container className={classes.root} justify="center" spacing={16}>
        <h1>Hi Dasein</h1>
        <Grid
          container
          className={classes.demo}
          justify="center"
          alignItems="flex-end"
          spacing={16}
        >
          <HDTextField />
          <HDButton />
        </Grid>
      </Grid>
    )
  }
}

export default App
